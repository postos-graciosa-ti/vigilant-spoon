import dayjs from "dayjs"

const IntegrationDoc = ({ joinedSubsidiarie, selectedEmployee, employeeFunction }) => {
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
          Termo de Confirmação de Participação na Integração
        </h4>
      </div>

      <p>
        Joinville, {handDate || dayjs().format("DD/MM/YYYY")}
      </p>

      <p>
        Empresa: {joinedSubsidiarie?.name}
      </p>

      <p>
        Colaborador: {selectedEmployee?.name}
      </p>

      <p>
        Cargo: {employeeFunction?.name}
      </p>

      <p>
        Data de admissão: {dayjs(selectedEmployee?.admission_date).format("DD/MM/YYYY")}
      </p>

      <p>
        Declaro que:
      </p>

      <p>
        1. Participei do programa de Integração realizado, onde recebi informações e orientações sobre:
      </p>

      <ul>
        <li>Missão, Visão e Valores da Empresa</li>
        <li>Estrutura Organizacional e Função de Cada Departamento</li>
        <li>Cultura, Normas e Código de Conduta</li>
        <li>Benefícios, Premiações e Políticas da Empresa</li>
        <li>Procedimentos Internos, como registro de ponto e solicitação de equipamentos</li>
        <li>Utilização das Ferramentas Tecnológicas da Empresa</li>
        <li>Políticas de Saúde e Segurança no Trabalho</li>
        <li>Treinamentos Obrigatórios e Oportunidades de Desenvolvimento Profissional</li>
        <li>Administração de Pessoal</li>
        <li>Processo de Avaliação de Desempenho e Feedback</li>
      </ul>

      <p>
        2. Estou ciente de minhas responsabilidades, direitos e deveres, conforme as políticas e regulamentos
        apresentados durante a integração.
      </p>

      <p>
        3. Recebi todas as orientações necessárias para o desempenho das minhas funções e esclareci
        quaisquer dúvidas durante o processo de integração.
      </p>

      <p>
        4. Comprometo-me a seguir as normas e diretrizes estabelecidas pela empresa, conforme descrito no
        código de conduta, políticas internas e demais documentos apresentados.
      </p>

      <p>
        5. Estou ciente de que este documento confirma minha participação e entendimento sobre os pontos
        discutidos durante a integração, e que eventuais infrações ou o não cumprimento das políticas da
        empresa poderão resultar em sanções, conforme as regras internas.
      </p>

      <p>
        Assinatura do colaborador: ________________________________________________________________________________________
      </p>

      <p>
        Assinatura do Responsável pela Integração: ________________________________________________________________________________________
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

export default IntegrationDoc