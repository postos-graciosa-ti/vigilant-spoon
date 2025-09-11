import dayjs from "dayjs"

const WorkJourneyDoc = (props) => {
  const { joinedSubsidiarie, selectedEmployee, employeeTurn, deliveryDate } = props

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img src="/logo.png" style={{ width: '80px' }} />
        </div>

        <div style={{ marginLeft: '8px' }}>
          {joinedSubsidiarie?.name}
        </div>
      </div>

      <div className="text-center">
        <h4>DECLARAÇÃO DE HORÁRIO DE TRABALHO</h4>
      </div>

      <div>
        <p>
          A empresa {joinedSubsidiarie?.name} cadastrada no CNPJ sob n° {joinedSubsidiarie?.cnpj}, situada nesta cidade, declara para os devidos fins que {selectedEmployee?.name} cadastrado no CPF nº {selectedEmployee?.cpf}, é funcionário desta empresa, cumprindo, a jornada de trabalho das {employeeTurn?.name} horas de segunda a domingo, com uma folga durante a semana.
        </p>
      </div>

      <p>
        Joinville, {dayjs(deliveryDate).format("DD/MM/YYYY")}
      </p>

      <p>
        Assinatura do colaborador: ________________________________________________________________________________________
      </p>

      <p>POSTO JARIVA LTDA</p>

      <p>Reigiani Souza</p>

      <p>
        Assinatura da diretoria: ________________________________________________________________________________________
      </p>

      <p>Gestora de Recursos Humanos</p>
    </>
  )
}

export default WorkJourneyDoc
