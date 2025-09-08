import dayjs from "dayjs"

const ResponsabilityDoc = ({ joinedSubsidiarie, selectedEmployee, employeeFunction, employeeNeighborhood, deliveryDate }) => {
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

      <h4>TERMO DE RESPONSABILIDADE</h4>

      <p>
        Eu, {selectedEmployee?.name}, {employeeFunction?.name}, residente e domiciliado(a) Rua: {selectedEmployee?.street},
        Nº {selectedEmployee?.street_number} - Bairro: {employeeNeighborhood?.name}, mediante este instrumento de aceitação, responsabilizo-me pelo uso e
        conservação do caixa {joinedSubsidiarie?.name}, de propriedade da mesma, pelo prazo indeterminado, a
        contar desta data.
      </p>

      <ol>
        <li>
          Comprometo-me a devolver em perfeito estado findo o meu vínculo com a empresa. Em caso
          de extravio e/ou dano, total ou parcial, do dinheiro ou quaisquer outros bens sob minha
          responsabilidade, comprometo-me a ressarcir a empresa pelos prejuízos decorrentes;
        </li>

        <li>
          Estou ciente de que serei responsável pela movimentação de caixa, que inclui registrar vendas,
          receber pagamentos, fornecer recibos aos clientes, processar devoluções de mercadorias e
          trocas, e emitir notas fiscais quando necessário. Além disso, estou ciente de que devo manter
          o caixa e a área circundante limpos e organizados, repondo materiais como rolos de papel para
          recibos e formulários necessários.
        </li>

        <li>
          Caso tenha diferenças entre o valor real em caixa e o valor apurado, essa diferença será
          descontada do adicional de quebra de caixa, limitado aos 10% do valor da quebra de caixa de
          acordo com o Artigo 462 da CLT (Consolidação das Leis do Trabalho).
        </li>
      </ol>

      <p>
        Estou ciente de que devo seguir rigorosamente os procedimentos de segurança, ética e
        confidencialidade da empresa.
      </p>

      <p>
        Joinville, {dayjs(deliveryDate).format("DD/MM/YYYY")}
      </p>

      <div>
        <p>
          ________________________________________________________________________________________
        </p>

        <p>Assinatura</p>

        <p>{selectedEmployee?.name.toUpperCase()}</p>
      </div>

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

export default ResponsabilityDoc
