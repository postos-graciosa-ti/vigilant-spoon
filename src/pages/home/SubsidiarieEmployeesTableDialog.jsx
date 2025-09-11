import { useEffect, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid, Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from "recharts"
import Dialog from "../../components/Dialog"
import getRequest from "../../requests/getRequest"
import useUserSessionStore from "../../stores/userSession"

const SubsidiarieEmployeesTableDialog = (props) => {
  const { subsidiarieEmployeesTableDialogOpen, setSubsidiarieEmployeesTableDialogOpen } = props

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    if (subsidiarieEmployeesTableDialogOpen) {
      getRequest(`/subsidiaries/${joinedSubsidiarie?.id}/employees-table`)
        .then((response) => setTableData(response.data))
    }
  }, [subsidiarieEmployeesTableDialogOpen, joinedSubsidiarie?.id])

  const handleCloseDialog = () => setSubsidiarieEmployeesTableDialogOpen(false)

  const chartData = tableData.map((turn) => ({
    turn: turn.turn,
    total: turn.functions.reduce(
      (acc, func) => acc + func.employees.length,
      0
    ),
  }))

  return (
    <Dialog
      dialogOpen={subsidiarieEmployeesTableDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={"Quadro de funcionários da filial"}
      hideSubmitButton={true}
    >
      <div className="d-flex flex-column gap-4">
        {
          chartData.length > 0 && (
            <div style={{ width: "100%", height: "300px" }} className="card p-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="turn" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="total" fill="#0d6efd" name="Funcionários" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )
        }

        {
          Array.isArray(tableData) && tableData.length > 0 ? (
            tableData.map((turn, tIndex) => (
              <div key={tIndex} className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{turn.turn}</h5>

                  {
                    turn.functions.map((func, fIndex) => (
                      <div key={fIndex} className="mb-3 ps-3">
                        <h6 className="text-secondary">{func.function}</h6>

                        <ul className="list-unstyled ms-3">
                          {
                            func.employees.map((emp) => (
                              <li key={emp.id}>• {emp.name}</li>
                            ))
                          }
                        </ul>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted small">Nenhum funcionário cadastrado</p>
          )
        }
      </div>
    </Dialog>
  )
}

export default SubsidiarieEmployeesTableDialog
