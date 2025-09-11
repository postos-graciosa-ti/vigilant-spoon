import { useEffect, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import Dialog from "../../components/Dialog"
import getRequest from "../../requests/getRequest"

const AllEmployeesTableDialog = (props) => {
  const { allEmployeesTableDialogOpen, setAllEmployeesTableDialogOpen } = props

  const [tableData, setTableData] = useState({ total_employees: 0, subsidiaries: [] })

  useEffect(() => {
    if (allEmployeesTableDialogOpen) {
      getRequest(`/all-employees-table`)
        .then((response) => setTableData(response.data))
    }
  }, [allEmployeesTableDialogOpen])

  const handleCloseDialog = () => setAllEmployeesTableDialogOpen(false)

  const totalEmployees = tableData.total_employees || 0

  const chartData = (tableData.subsidiaries || []).map((subs) => ({
    subsidiarie: subs.subsidiarie,
    total: subs.total_employees,
  }))

  return (
    <Dialog
      dialogOpen={allEmployeesTableDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={"Quadro de funcionários das filiais"}
      hideSubmitButton={true}
    >
      <div className="d-flex flex-column gap-4">
        <p className="fw-bold">Total geral de funcionários: {totalEmployees}</p>

        {
          chartData.length > 0 && (
            <div style={{ width: "100%", height: "300px" }} className="card p-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subsidiarie" />
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
          Array.isArray(tableData.subsidiaries) && tableData.subsidiaries.length > 0 ? (
            tableData.subsidiaries.map((subs, sIndex) => (
              <div key={sIndex} className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    {subs.subsidiarie} — Total: {subs.total_employees}
                  </h5>

                  {
                    subs.turns.map((turn, tIndex) => (
                      <div key={tIndex} className="mb-3 ps-3">
                        <h6 className="fw-bold">{turn.turn}</h6>

                        {
                          turn.functions.map((func, fIndex) => (
                            <div key={fIndex} className="mb-2 ps-3">
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

export default AllEmployeesTableDialog
