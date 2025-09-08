import dayjs from "dayjs"

const EthnicityDoc = ({ selectedEmployee, joinedSubsidiarie, deliveryDate }) => {
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

      <h4>AUTODECLARAÇÃO ÉTNICO-RACIAL</h4>

      <p>
        Eu, {selectedEmployee?.name}, inscrito no CPF sob o nº
        {selectedEmployee?.cpf}, AUTODECLARO, sob as penas da lei, minha
        raça/etnia sendo:
      </p>

      <p>[  ] <b>Branca</b></p>

      <p>[  ] <b>Preta</b></p>

      <p>[  ] <b>Parda</b></p>

      <p>[  ] <b>Amarela</b></p>

      <p>[  ] <b>Indígena</b></p>

      <p>
        Esta autodeclaração atende a exigência do art. 39, § 8º, da Lei nº
        12.288/2010, alterado pela Lei nº 14.553/2023 e da Portaria MTE nº
        3.784/2023, que obriga a prestação da informação nas inclusões,
        alterações ou retificações cadastrais dos trabalhadores ocorridas a partir
        de 1o de janeiro de 2024, respeitando o critério de autodeclaração do
        trabalhador, em conformidade com a classificação utilizada pelo Instituto
        Brasileiro de Geografia e Estatística - IBGE.
      </p>

      <p>
        Por ser expressão da verdade, firmo e assino a presente para que a
        mesma produza seus efeitos legais e de direito.
      </p>

      <p>
        Joinville, {dayjs(deliveryDate).format("DD/MM/YYYY")}
      </p>

      <p>
        Assinatura: ________________________________________________________________________________________
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

export default EthnicityDoc
