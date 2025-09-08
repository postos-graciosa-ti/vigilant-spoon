import dayjs from "dayjs"

const WhatsAppDoc = ({ joinedSubsidiarie, selectedEmployee, employeeFunction, deliveryDate }) => {
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

      <div style={{ textAlign: "center" }}>
        <h4>
          TERMO DE COMPROMISSO PARA UTILIZAÇÃO DO GRUPO DE WHATSAPP
        </h4>
      </div>

      <p>
        Nome da empresa: {joinedSubsidiarie?.name}
      </p>

      <p>
        Endereço: {joinedSubsidiarie?.address}
      </p>

      <p>
        OBJETIVO: Este termo tem como objetivo estabelecer as normas e responsabilidades para a utilização do grupo de
        WhatsApp corporativo, destinado à comunicação entre os funcionários da {joinedSubsidiarie?.name}.
      </p>

      <p>
        2. REGRAS DE UTILIZAÇÃO: O grupo de WhatsApp deve ser utilizado exclusivamente para assuntos relacionados
        ao trabalho, comunicação interna, avisos e informações pertinentes à empresa. É vedada a utilização do grupo para
        assuntos pessoais, correntes, piadas, propagandas, ou qualquer outro conteúdo que não esteja relacionado às
        atividades profissionais. Os membros do grupo devem manter um comportamento respeitoso e profissional, evitando
        qualquer forma de ofensa, discriminação ou assédio.
      </p>

      <p>
        1. 3. CONFIDENCIALIDADE As informações compartilhadas no grupo são confidenciais e de uso exclusivo dos
        funcionários do {joinedSubsidiarie?.name}
      </p>

      <p>
        É proibido divulgar qualquer conteúdo do grupo a terceiros sem autorização expressa.
      </p>

      <p>
        1. 4. RESPONSABILIDADES. Cada funcionário é responsável pelo conteúdo que compartilha no grupo e pelas
        consequências de suas mensagens. {joinedSubsidiarie?.name} não se responsabiliza por qualquer uso
        inadequado do grupo que viole este termo de compromisso.
      </p>

      <p>
        5. SANÇÕES O descumprimento das regras estabelecidas neste termo poderá resultar em advertências, suspensão
        do uso do grupo, e, em casos graves, medidas disciplinares conforme o regulamento interno da empresa.
      </p>

      <p>
        6. ACEITAÇÃO Ao assinar este termo, o funcionário declara ter lido, compreendido e aceitado todas as condições
        aqui estabelecidas.
      </p>

      <p>
        Joinville, {dayjs(deliveryDate).format("DD/MM/YYYY")}
      </p>

      <p>
        Nome do funcionário: {selectedEmployee?.name}
      </p>

      <p>
        Cargo: {employeeFunction?.name}
      </p>

      <p>
        Assinatura: ________________________________________________________________________________________
      </p>

      <p>
        Assinatura do representante da empresa: ________________________________________________________________________________________
      </p>

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

export default WhatsAppDoc
