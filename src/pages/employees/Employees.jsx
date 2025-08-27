import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import getRequest from "../../requests/getRequest"
import useUserSessionStore from "../../stores/userSession"
import AddEmployessDialog from "./AddEmployeesDialog"
import DeleteEmployeesDialog from "./DeleteEmployeesDialog"
import EditEmployeesDialog from "./EditEmployeesDialog"

const handleOpenDialog = (dialogSetState, setSelectedRow, selectedRow) => {
  if (selectedRow) {
    setSelectedRow(selectedRow)
  }

  dialogSetState(true)
}

const Employees = () => {
  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const [employeesList, setEmployeesList] = useState()

  const [selectedEmployee, setSelectedEmployee] = useState()

  const [addEmployeesDialogOpen, setAddEmployeesDialogOpen] = useState(false)

  const [editEmployeesDialogOpen, setEditEmployeesDialogOpen] = useState(false)

  const [deleteEmployeesDialogOpen, setDeleteEmployeesDialogOpen] = useState(false)

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

                <div>
                  <button
                    className="btn btn-warning me-2"
                    title="Editar"
                    onClick={() => handleOpenDialog(setEditEmployeesDialogOpen, setSelectedEmployee, employee)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>

                  <button
                    className="btn btn-danger me-2"
                    title="Excluir"
                    onClick={() => handleOpenDialog(setDeleteEmployeesDialogOpen, setSelectedEmployee, employee)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>

                  <button className="btn btn-secondary me-2">
                    <i class="bi bi-gear-fill"></i>
                  </button>
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
    </>
  )
}

export default Employees
