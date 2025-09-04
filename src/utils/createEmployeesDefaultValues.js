export const createEmployeesDefaultValues = (selectedEmployee = {}) => ({
  name: selectedEmployee.name || "", // padrão para campos do tipo texto
  function_id: selectedEmployee.function_id !== undefined ? selectedEmployee.function_id : null, // padrão para campos do tipo Select
  street_complement: selectedEmployee.street_complement || "",
  has_hazard_pay: selectedEmployee.has_hazard_pay !== undefined ? selectedEmployee.has_hazard_pay : null,
  military_certificate_file: null,
})
