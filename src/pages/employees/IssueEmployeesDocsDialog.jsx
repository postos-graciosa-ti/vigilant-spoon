import printJS from 'print-js'
import ReactDOMServer from 'react-dom/server'
import { useForm } from "react-hook-form"
import Dialog from "../../components/Dialog"
import Input from "../../components/Input"
import Select from "../../components/Select"
import getRequest from '../../requests/getRequest'
import useSelectOptionsStore from "../../stores/selectOptions"
import useUserSessionStore from '../../stores/userSession'
import EthnicityDoc from "./employeesDocs/EthnicityDoc"
import HealthDoc from './employeesDocs/HealthDoc'
import IntegrationDoc from './employeesDocs/IntegrationDoc'
import ResponsabilityDoc from './employeesDocs/ResponsabilityDoc'
import WhatsAppDoc from "./employeesDocs/WhatsAppDoc"

const IssueEmployeesDocsDialog = (props) => {
  const { issueEmployeesDocsDialogOpen, setIssueEmployeesDocsDialogOpen, selectedEmployee, setSelectedEmployee } = props

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const { control, handleSubmit, reset, watch } = useForm()

  const { docsOptions } = useSelectOptionsStore()

  const selectedDocOption = watch("docOption")

  const handleCloseDialog = () => {
    reset()

    setSelectedEmployee()

    setIssueEmployeesDocsDialogOpen(false)
  }

  const onSubmit = async (data) => {
    const { docOption } = data

    let employeeFunction = await getRequest(`/functions/${selectedEmployee?.function_id}`).then((response) => response.data)

    let employeeNeighborhood = await getRequest(`/neighborhoods/${selectedEmployee?.neighborhood_id}`).then((response) => response.data)

    let optionsPrints = {
      "ethnicityDoc": (
        <EthnicityDoc
          selectedEmployee={selectedEmployee}
          joinedSubsidiarie={joinedSubsidiarie}
          deliveryDate={watch("ethnicityDocDeliveryDate")}
        />
      ),
      "ResponsabilityDoc": (
        <ResponsabilityDoc
          joinedSubsidiarie={joinedSubsidiarie}
          selectedEmployee={selectedEmployee}
          employeeFunction={employeeFunction}
          employeeNeighborhood={employeeNeighborhood}
          deliveryDate={watch("responsabilityDocDeliveryDate")}
        />
      ),
      "HealthDoc": (
        <HealthDoc
          joinedSubsidiarie={joinedSubsidiarie}
          selectedEmployee={selectedEmployee}
          deliveryDate={watch("healthDocDeliveryDate")}
        />
      ),
      "WhatsAppDoc": (
        <WhatsAppDoc
          joinedSubsidiarie={joinedSubsidiarie}
          selectedEmployee={selectedEmployee}
          employeeFunction={employeeFunction}
          deliveryDate={watch("whatsAppDocDeliveryDate")}
        />
      ),
      "IntegrationDoc": (
        <IntegrationDoc
          joinedSubsidiarie={joinedSubsidiarie}
          selectedEmployee={selectedEmployee}
          employeeFunction={employeeFunction}
          deliveryDate={watch("IntegrationDocDeliveryDate")}
        />
      ),
    }

    let printableContent = ReactDOMServer.renderToString(optionsPrints[docOption])

    printJS({
      printable: printableContent,
      type: 'raw-html',
      header: null
    })
  }

  return (
    <Dialog
      dialogOpen={issueEmployeesDocsDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={`Emitir documentos de admissão de funcionário`}
      handleSubmitDialog={handleSubmit(onSubmit)}
    >
      <Select
        control={control}
        name={"docOption"}
        label={"Tipo de documento"}
        options={docsOptions}
      />

      {
        selectedDocOption && (
          selectedDocOption == "ethnicityDoc" && (
            <>
              <Input
                control={control}
                label={"Data de entrega"}
                name={"ethnicityDocDeliveryDate"}
                type={"date"}
              />
            </>
          ) || selectedDocOption == "ResponsabilityDoc" && (
            <>
              <Input
                control={control}
                label={"Data de entrega"}
                name={"responsabilityDocDeliveryDate"}
                type={"date"}
              />
            </>
          ) || selectedDocOption == "HealthDoc" && (
            <>
              <Input
                control={control}
                label={"Data de entrega"}
                name={"healthDocDeliveryDate"}
                type={"date"}
              />
            </>
          ) || selectedDocOption == "WhatsAppDoc" && (
            <>
              <Input
                control={control}
                label={"Data de entrega"}
                name={"whatsAppDocDeliveryDate"}
                type={"date"}
              />
            </>
          ) || selectedDocOption == "IntegrationDoc" && (
            <>
              <Input
                control={control}
                label={"Data de entrega"}
                name={"IntegrationDocDeliveryDate"}
                type={"date"}
              />
            </>
          )
        )
      }
    </Dialog>
  )
}

export default IssueEmployeesDocsDialog
