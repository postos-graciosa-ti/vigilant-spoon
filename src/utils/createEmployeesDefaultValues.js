const handleInputDefaultValue = (value) => {
  return value || ""
}

const handleSelectDefaultValue = (value) => {
  return value !== undefined ? value : null
}

export const createEmployeesDefaultValues = (selectedEmployee = {}) => ({

  name: selectedEmployee.name || "", // padrão para campos do tipo texto
  // tshirt_len: selectedEmployee.tshirt_len || "",
  // legs_len: selectedEmployee.legs_len || "",
  // feet_len: selectedEmployee.feet_len || "",
  function_id: selectedEmployee.function_id !== undefined ? selectedEmployee.function_id : null, // padrão para campos do tipo Select
  turn_id: selectedEmployee.turn_id !== undefined ? selectedEmployee.turn_id : null,
  admission_date: selectedEmployee.admission_date || "",
  employee_status_id: selectedEmployee.employee_status_id !== undefined ? selectedEmployee.employee_status_id : null,
  department_id: selectedEmployee.department_id !== undefined ? selectedEmployee.department_id : null,
  sector_id: selectedEmployee.sector_id !== undefined ? selectedEmployee.sector_id : null,
  hierarchy_structure_id: selectedEmployee.hierarchy_structure_id !== undefined ? selectedEmployee.hierarchy_structure_id : null,
  gender_id: selectedEmployee.gender_id !== undefined ? selectedEmployee.gender_id : null,
  has_previous_experience: selectedEmployee.has_previous_experience !== undefined ? selectedEmployee.has_previous_experience : null,
  civil_status_id: selectedEmployee.civil_status_id !== undefined ? selectedEmployee.civil_status_id : null,
  emergency_contact_name: selectedEmployee.emergency_contact_name || "",
  emergency_number: selectedEmployee.emergency_number || "",
  esocial: selectedEmployee.esocial || "",
  access_code: selectedEmployee.access_code || "",
  time_clock_code: selectedEmployee.time_clock_code || "",
  street: selectedEmployee.street || "",
  street_number: selectedEmployee.street_number || "",
  cep: selectedEmployee.cep || "",
  residence_city_id: selectedEmployee.residence_city_id !== undefined ? selectedEmployee.residence_city_id : null,
  neighborhood_id: selectedEmployee.neighborhood_id !== undefined ? selectedEmployee.neighborhood_id : null,
  phone: selectedEmployee.phone || "",
  mobile: selectedEmployee.mobile || "",
  email: selectedEmployee.email || "",
  ethnicitie_id: selectedEmployee.ethnicitie_id !== undefined ? selectedEmployee.ethnicitie_id : null,
  datebirth: selectedEmployee.datebirth || "",
  birthstate_id: selectedEmployee.birthstate_id !== undefined ? selectedEmployee.birthstate_id : null,
  birthcity_id: selectedEmployee.birthcity_id !== undefined ? selectedEmployee.birthcity_id : null,
  mothername: selectedEmployee.mothername || "",
  fathername: selectedEmployee.fathername || "",
  cpf: selectedEmployee.cpf || "",
  rg: selectedEmployee.rg || "",
  rg_issuing_agency: selectedEmployee.rg_issuing_agency || "",
  rg_state_id: selectedEmployee.rg_state_id !== undefined ? selectedEmployee.rg_state_id : null,
  rg_expedition_date: selectedEmployee.rg_expedition_date || "",
  military_certificate: selectedEmployee.military_certificate || "",
  pis: selectedEmployee.pis || "",
  pis_register_date: selectedEmployee.pis_register_date || "",
  votant_title: selectedEmployee.votant_title || "",
  votant_zone: selectedEmployee.votant_zone || "",
  votant_session: selectedEmployee.votant_session || "",
  ctps: selectedEmployee.ctps || "",
  ctps_serie: selectedEmployee.ctps_serie || "",
  ctps_state: selectedEmployee.ctps_state !== undefined ? selectedEmployee.ctps_state : null,
  ctps_emission_date: selectedEmployee.ctps_emission_date || "",
  cnh: selectedEmployee.cnh || "",
  cnh_category_id: selectedEmployee.cnh_category_id !== undefined ? selectedEmployee.cnh_category_id : null,
  cnh_emission_date: selectedEmployee.cnh_emission_date || "",
  cnh_validity_date: selectedEmployee.cnh_validity_date || "",
  is_first_job: selectedEmployee.is_first_job !== undefined ? selectedEmployee.is_first_job : null,
  already_has_been_employee: selectedEmployee.already_has_been_employee !== undefined ? selectedEmployee.already_has_been_employee : null,
  trade_union_contribution_this_year: selectedEmployee.trade_union_contribution_this_year !== undefined ? selectedEmployee.trade_union_contribution_this_year : null,
  receiving_unemployment_insurance: selectedEmployee.receiving_unemployment_insurance !== undefined ? selectedEmployee.receiving_unemployment_insurance : null,
  monthly_wage: selectedEmployee.monthly_wage || "",
  hourly_wage: selectedEmployee.hourly_wage || "",
  pro_rated_hours: selectedEmployee.pro_rated_hours || "",
  has_transport_voucher: selectedEmployee.has_transport_voucher !== undefined ? selectedEmployee.has_transport_voucher : null,
  experience_time_id: selectedEmployee.experience_time_id !== undefined ? selectedEmployee.experience_time_id : null,
  has_hazard_pay: selectedEmployee.has_hazard_pay !== undefined ? selectedEmployee.has_hazard_pay : null,
  has_unhealthy_pay: selectedEmployee.has_unhealthy_pay !== undefined ? selectedEmployee.has_unhealthy_pay : null,
  payment_method_id: selectedEmployee.payment_method_id !== undefined ? selectedEmployee.payment_method_id : null,
  bank_id: selectedEmployee.bank_id !== undefined ? selectedEmployee.bank_id : null,
  bank_agency: selectedEmployee.bank_agency || "",
  bank_account: selectedEmployee.bank_account || "",
  wage: selectedEmployee.wage || "",
  wage_advance: selectedEmployee.wage_advance || "",
  health_insurance: selectedEmployee.health_insurance || "",
  life_insurance: selectedEmployee.life_insurance || "",
  // ag: selectedEmployee.ag || "",
  // cc: selectedEmployee.cc || "",
  has_harmfull_exposition: selectedEmployee.has_harmfull_exposition !== undefined ? selectedEmployee.has_harmfull_exposition : null,
  nationalitie_id: selectedEmployee.nationalitie_id !== undefined ? selectedEmployee.nationalitie_id : null,
  street_complement: selectedEmployee.street_complement || "",
  residence_state_id: selectedEmployee.residence_state_id !== undefined ? selectedEmployee.residence_state_id : null,
  workdays_id: selectedEmployee.workdays_id !== undefined ? selectedEmployee.workdays_id : null,
  school_level_id: selectedEmployee.school_level_id !== undefined ? selectedEmployee.school_level_id : null,

  parents:
    selectedEmployee.parents ?
      selectedEmployee.parents
      :
      [
        {
          "name": "",
          "relation": "",
          "datebirth": "",
          "cityState": "",
          "cpf": "",
          "book": "",
          "paper": "",
          // "birthCertificate": "",
          // "vaccinationCard": "",
          // "schoolProof": "",
        }
      ],

  ctps_file: selectedEmployee.ctps_file ? selectedEmployee.ctps_file : null,
  admission_health_exam_file: selectedEmployee.admission_health_exam_file ? selectedEmployee.admission_health_exam_file : null,
  identity_file: selectedEmployee.identity_file ? selectedEmployee.identity_file : null,
  cpf_file: selectedEmployee.cpf_file ? selectedEmployee.cpf_file : null,
  votant_title_file: selectedEmployee.votant_title_file ? selectedEmployee.votant_title_file : null,
  residence_proof: selectedEmployee.residence_proof ? selectedEmployee.residence_proof : null,
  cnh_file: selectedEmployee.cnh_file ? selectedEmployee.cnh_file : null,
  marriage_certificate_file: selectedEmployee.marriage_certificate_file ? selectedEmployee.marriage_certificate_file : null,
  military_certificate_file: selectedEmployee.military_certificate_file ? selectedEmployee.military_certificate_file : null,
  employee_files: selectedEmployee.employee_files ? selectedEmployee.employee_files : null,

  // name: selectedEmployee.name || "", // padrão para campos do tipo texto
  // function_id: selectedEmployee.function_id !== undefined ? selectedEmployee.function_id : null, // padrão para campos do tipo Select
  // street_complement: selectedEmployee.street_complement || "",
  // has_hazard_pay: selectedEmployee.has_hazard_pay !== undefined ? selectedEmployee.has_hazard_pay : null,

  // parents:
  //   selectedEmployee.parents ?
  //     selectedEmployee.parents
  //     :
  //     [
  //       {
  //         "name": "",
  //         "relation": "",
  //         "birthCertificate": "",
  //       }
  //     ],

  // // padrão para campos do tipo File
  // military_certificate_file: selectedEmployee.military_certificate_file ? selectedEmployee.military_certificate_file : null,
})
