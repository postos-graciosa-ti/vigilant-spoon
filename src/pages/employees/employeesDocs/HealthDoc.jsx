import dayjs from "dayjs"

const HealthDoc = ({ joinedSubsidiarie, selectedEmployee, deliveryDate }) => {
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

      <hr />

      <p>
        Joinville, {dayjs(deliveryDate).format("DD/MM/YYYY")}
      </p>

      <p>
        {joinedSubsidiarie?.name}
      </p>

      <p>
        Anexo 01
      </p>

      <p>
        TERMO DE CIÊNCIA DO PROTOCOLO DE HOMOLOGAÇÃO DE ATESTADO
      </p>

      <p>
        Eu, {selectedEmployee?.name}
      </p>

      <p>
        fui devidamente orientado a respeito das regras de Homologação de Atestados Médicos, NÃO
        RESTANDO DÚVIDAS de que o não cumprimento das regras apresentadas no referido documento
        acarretará nas devidas consequências como falta não justificada.
      </p>

      <p>
        Joinville, {dayjs(deliveryDate).format("DD/MM/YYYY")}
      </p>

      <p>
        ________________________________________________________________________________________
      </p>

      <p>Assinatura</p>

      <div style={{ "bottom": "0", "position": "fixed" }}>
        <hr />

        Posto Graciosa: Rua Florianópolis, 510 – Itaum – Cep: 89210-085 – Joinville – SC <br />
        Auto Posto Fatima: Rua Fátima, 1730 – Fatima – Cep: 89.229-102 – Joinville – SC <br />
        Posto Bemer: Rua Boehmerwaldt, 675 – Boehmerwaldt – Cep: 89.232-100 – Joinville – SC <br />
        Posto Jariva: Rua Monsenhor Gercino, 5085 – Jarivatuba – Cep: 89.231-000 – Joinville – SC <br />
        Posto Graciosa V: Rua Santa Catarina, 1870 – Floresta – Cep: 89.212-000 – Joinville – SC <br />
        Auto Posto Pirai: Rua XI de Novembro, 5031 – Vila Nova – Cep: 89.237-000 – Joinville - SC
      </div>
    </>
  )
}

export default HealthDoc
