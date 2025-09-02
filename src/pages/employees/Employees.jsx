import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import getRequest from "../../requests/getRequest"
import useUserSessionStore from "../../stores/userSession"
import handleOpenDialog from "../../utils/handleOpenDialog"
import AddEmployessDialog from "./AddEmployeesDialog"
import DeleteEmployeesDialog from "./DeleteEmployeesDialog"
import EditEmployeesDialog from "./EditEmployeesDialog"
import RequestAdmissionExamDialog from "./RequestAdmissionExamDialog"
import SendAdmissionToContabilityDialog from "./SendAdmissionToContabilityDialog"

const Employees = () => {
  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const [employeesList, setEmployeesList] = useState()

  const [selectedEmployee, setSelectedEmployee] = useState()

  const [addEmployeesDialogOpen, setAddEmployeesDialogOpen] = useState(false)

  const [editEmployeesDialogOpen, setEditEmployeesDialogOpen] = useState(false)

  const [deleteEmployeesDialogOpen, setDeleteEmployeesDialogOpen] = useState(false)

  const [requestAdmissionExamDialogOpen, setRequestAdmissionExamDialogOpen] = useState(false)

  const [sendAdmissionToContabilityDialogOpen, setSendAdmissionToContabilityDialogOpen] = useState(false)

  useEffect(() => {
    getEmployeeList()
  }, [])

  const getEmployeeList = () => {
    getRequest(`/subsidiaries/${joinedSubsidiarie?.id}/employees`)
      .then((response) => setEmployeesList(response.data))
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="mt-3 mb-3">
          <h1>Cadastro de funcionários</h1>
        </div>

        <div className="mb-3">
          <button
            className="btn btn-primary"
            onClick={() => handleOpenDialog(setAddEmployeesDialogOpen)}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>

        {
          employeesList && employeesList.map((employee) => (
            <div className="card mb-3" key={employee.id}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">{employee.name}</h5>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-warning"
                    title="Editar"
                    onClick={() => handleOpenDialog(setEditEmployeesDialogOpen, setSelectedEmployee, employee)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>

                  <button
                    className="btn btn-danger"
                    title="Excluir"
                    onClick={() => handleOpenDialog(setDeleteEmployeesDialogOpen, setSelectedEmployee, employee)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-gear-fill"></i>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleOpenDialog(setRequestAdmissionExamDialogOpen, setSelectedEmployee, employee)}
                        >
                          Solicitar exame admissional
                        </button>
                      </li>

                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleOpenDialog(setSendAdmissionToContabilityDialogOpen, setSelectedEmployee, employee)}
                        >
                          Encaminhar admissão para contabilidade
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <AddEmployessDialog
        addEmployeesDialogOpen={addEmployeesDialogOpen}
        setAddEmployeesDialogOpen={setAddEmployeesDialogOpen}
        getEmployeeList={getEmployeeList}
      />

      <EditEmployeesDialog
        editEmployeesDialogOpen={editEmployeesDialogOpen}
        setEditEmployeesDialogOpen={setEditEmployeesDialogOpen}
        getEmployeeList={getEmployeeList}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />

      <DeleteEmployeesDialog
        deleteEmployeesDialogOpen={deleteEmployeesDialogOpen}
        setDeleteEmployeesDialogOpen={setDeleteEmployeesDialogOpen}
        getEmployeeList={getEmployeeList}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />

      <RequestAdmissionExamDialog
        requestAdmissionExamDialogOpen={requestAdmissionExamDialogOpen}
        setRequestAdmissionExamDialogOpen={setRequestAdmissionExamDialogOpen}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />

      <SendAdmissionToContabilityDialog
        sendAdmissionToContabilityDialogOpen={sendAdmissionToContabilityDialogOpen}
        setSendAdmissionToContabilityDialogOpen={setSendAdmissionToContabilityDialogOpen}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
    </>
  )
}

export default Employees
