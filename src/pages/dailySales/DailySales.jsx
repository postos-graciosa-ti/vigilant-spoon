// import axios from "axios"
// import dayjs from "dayjs"
// import { useEffect, useState } from "react"
// import Navbar from "../../components/Navbar"
// import useUserSessionStore from "../../stores/userSession"

// const DailySales = () => {
//   const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

//   const today = dayjs().format("YYYY-MM-DD")

//   const [salesByProduct, setSalesByProduct] = useState()

//   const [todaySales, setTodaySales] = useState()

//   useEffect(() => {
//     axios
//       .get(`https://web.qualityautomacao.com.br/INTEGRACAO/MAPA_DESEMPENHO?CHAVE=ocultado&dataInicial=${today}&dataFinal=${today}&empresaCodigo=${joinedSubsidiarie?.web_postos_subsidiarie_code}`)
//       .then((response) => {
//         const totalPorFuncionarioProduto = response.data.reduce((acc, venda) => {
//           const funcKey = venda.funcionarioCodigo;

//           if (!acc[funcKey]) {
//             acc[funcKey] = {
//               funcionarioNome: venda.funcionarioNome,
//               produtos: {}
//             };
//           }

//           if (!acc[funcKey].produtos[venda.produtoCodigo]) {
//             acc[funcKey].produtos[venda.produtoCodigo] = {
//               produtoNome: venda.produtoNome,
//               totalVendas: 0
//             };
//           }

//           acc[funcKey].produtos[venda.produtoCodigo].totalVendas += venda.valorVenda;

//           return acc;
//         }, {});

//         // Para transformar em array legível
//         const resultado = Object.values(totalPorFuncionarioProduto).map(func => ({
//           funcionarioNome: func.funcionarioNome,
//           produtos: Object.values(func.produtos)
//         }));

//         console.log(resultado);

//         setSalesByProduct(resultado)

//         setTodaySales(response.data)
//       })
//   }, [])

//   return (
//     <>
//       <Navbar />

//       <div className="container">
//         <div className="mt-3 mb-3">
//           <h1>{dayjs(today).format("DD/MM/YYYY")}</h1>
//         </div>

//         <div className="mt-3 mb-3">
//           <h2>Total de vendas por funcionário</h2>
//         </div>

//         {
//           salesByProduct && (
//             <>
//             <div className="table-responsive">
//               <thead>
//                 <tr>
//                   <th>Funcionário</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {
//                   salesByProduct.map((sale) => (
//                     <tr>
//                       <td>{sale.funcionarioNome}</td>

//                       <td>
//                         {
//                           sale.produtos?.map((product) => (
//                             <>{product.produtoNome}</>
//                           ))
//                         }
//                       </td>
//                     </tr>
//                   ))
//                 }
//               </tbody>
//             </div>
//             </>
//           )
//         }

//         <div className="mt-3 mb-3">
//           <h3>Registro de vendas diárias</h3>
//         </div>

//         {
//           todaySales && (
//             <div className="table-responsive">
//               <table className="table table-hover">
//                 <thead>
//                   <tr>
//                     <th>Funcionário</th>

//                     <th>Produto</th>

//                     <th>Quantidade/litros</th>

//                     <th>Venda</th>

//                     <th>Comissão</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {
//                     todaySales.map((sale) => (
//                       <tr>
//                         <td>{sale.funcionarioNome}</td>

//                         <td>{sale.produtoNome} ({sale.grupoNome})</td>

//                         <td>{sale.quantidade}</td>

//                         <td>{sale.valorVenda}</td>

//                         <td>{sale.valorComissao}</td>
//                       </tr>
//                     ))
//                   }
//                 </tbody>
//               </table>
//             </div>
//           )
//         }
//       </div>
//     </>
//   )
// }

// export default DailySales


// import axios from "axios"
// import dayjs from "dayjs"
// import { useEffect, useState } from "react"
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis
// } from "recharts"
// import Navbar from "../../components/Navbar"
// import useUserSessionStore from "../../stores/userSession"

// const DailySales = () => {
//   const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

//   const today = dayjs().format("YYYY-MM-DD")

//   const [chartData, setChartData] = useState([])

//   const [salesByProduct, setSalesByProduct] = useState()

//   const [todaySales, setTodaySales] = useState()

//   useEffect(() => {
//     axios
//       .get(
//         `https://web.qualityautomacao.com.br/INTEGRACAO/MAPA_DESEMPENHO?CHAVE=ocultado&dataInicial=${today}&dataFinal=${today}&empresaCodigo=${joinedSubsidiarie?.web_postos_subsidiarie_code}`
//       )
//       .then((response) => {
//         const totalPorFuncionarioProduto = response.data.reduce((acc, venda) => {
//           const funcKey = venda.funcionarioCodigo

//           if (!acc[funcKey]) {
//             acc[funcKey] = {
//               funcionarioNome: venda.funcionarioNome,
//               produtos: {}
//             }
//           }

//           if (!acc[funcKey].produtos[venda.produtoCodigo]) {
//             acc[funcKey].produtos[venda.produtoCodigo] = {
//               produtoNome: venda.produtoNome,
//               totalVendas: 0
//             }
//           }

//           acc[funcKey].produtos[venda.produtoCodigo].totalVendas += venda.valorVenda

//           return acc
//         }, {})

//         const resultado = Object.values(totalPorFuncionarioProduto).map((func) => ({
//           funcionarioNome: func.funcionarioNome,
//           produtos: Object.values(func.produtos)
//         }))

//         const chartResult = resultado.map((func) => ({
//           funcionario: func.funcionarioNome,
//           totalVendas: func.produtos.reduce((sum, p) => sum + p.totalVendas, 0)
//         }))

//         setChartData(chartResult)

//         setSalesByProduct(resultado)

//         setTodaySales(response.data)
//       })
//   }, [])

//   return (
//     <>
//       <Navbar />

//       <div className="container">
//         <div className="mt-3 mb-3">
//           <h1>{dayjs(today).format("DD/MM/YYYY")}</h1>
//         </div>

//         <div className="mt-3 mb-3">
//           <h2>Total de vendas por funcionário</h2>
//         </div>

//         {
//           chartData.length > 0 && (
//             <div style={{ width: "100%", height: 400 }}>
//               <ResponsiveContainer>
//                 <BarChart
//                   data={chartData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis
//                     dataKey="funcionario"
//                     angle={-45}
//                     textAnchor="end"
//                     interval={0}
//                     height={100}
//                   />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="totalVendas" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           )
//         }

//         {
//           salesByProduct && (
//             <div className="table-responsive mt-3">
//               <table className="table table-hover">
//                 <thead>
//                   <tr>
//                     <th>Funcionário</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {
//                     salesByProduct.map((sale) => (
//                       <tr>
//                         <td>{sale.funcionarioNome}</td>

//                         <td>
//                           {
//                             sale.produtos?.map((product) => (
//                               <div>
//                                 <span className="badge text-bg-success me-2">
//                                   {product.produtoNome}: R${product.totalVendas}
//                                 </span>
//                               </div>
//                             ))
//                           }
//                         </td>
//                       </tr>
//                     ))
//                   }
//                 </tbody>
//               </table>
//             </div>
//           )
//         }

//         <div className="mt-3 mb-3">
//           <h3>Registro de vendas diárias</h3>
//         </div>

//         {todaySales && (
//           <div className="table-responsive">
//             <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th>Funcionário</th>
//                   <th>Produto</th>
//                   <th>Quantidade/litros</th>
//                   <th>Venda</th>
//                   <th>Comissão</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {todaySales.map((sale, idx) => (
//                   <tr key={idx}>
//                     <td>{sale.funcionarioNome}</td>
//                     <td>
//                       {sale.produtoNome} ({sale.grupoNome})
//                     </td>
//                     <td>{sale.quantidade}</td>
//                     <td>{sale.valorVenda}</td>
//                     <td>{sale.valorComissao}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   )
// }

// export default DailySales


import dayjs from "dayjs"
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
import Navbar from "../../components/Navbar"
import postRequest from "../../requests/postRequest"
import useUserSessionStore from "../../stores/userSession"

const DailySales = () => {
  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const today = dayjs().format("YYYY-MM-DD")

  const [chartData, setChartData] = useState([])

  const [salesByProduct, setSalesByProduct] = useState()

  const [todaySales, setTodaySales] = useState()

  useEffect(() => {
    let body = {
      dataInicial: today,
      dataFinal: today,
      empresaCodigo: joinedSubsidiarie.web_postos_subsidiarie_code,
    }

    postRequest("/sales-report/daily-sales", body)
      .then((response) => {
        setChartData(response.data.chartResult)

        setSalesByProduct(response.data.resultado)

        setTodaySales(response.data.rawData)
      })
  }, [joinedSubsidiarie, today])

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="mt-3 mb-3">
          <h1>{dayjs(today).format("DD/MM/YYYY")}</h1>
        </div>

        <div className="mt-3 mb-3">
          <h2>Total de vendas por funcionário</h2>
        </div>

        {chartData.length > 0 && (
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="funcionario"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={100}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalVendas" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="mt-3 mb-3">
          <h3>Detalhamento de vendas por funcionário</h3>
        </div>

        {salesByProduct && (
          <div className="table-responsive mt-3">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Funcionário</th>
                  <th>Produtos</th>
                </tr>
              </thead>
              <tbody>
                {salesByProduct.map((sale, idx) => (
                  <tr key={idx}>
                    <td>{sale.funcionarioNome}</td>
                    <td>
                      {sale.produtos?.map((product, pIdx) => (
                        <div key={pIdx}>
                          <span className="badge text-bg-success me-2">
                            {product.produtoNome}: R${product.totalVendas}
                          </span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-3 mb-3">
          <h4>Registro de vendas diárias</h4>
        </div>

        {todaySales && (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Funcionário</th>
                  <th>Produto</th>
                  <th>Quantidade/litros</th>
                  <th>Venda</th>
                  <th>Comissão</th>
                </tr>
              </thead>
              <tbody>
                {todaySales.map((sale, idx) => (
                  <tr key={idx}>
                    <td>{sale.funcionarioNome}</td>
                    <td>
                      {sale.produtoNome} ({sale.grupoNome})
                    </td>
                    <td>{sale.quantidade}</td>
                    <td>{sale.valorVenda}</td>
                    <td>{sale.valorComissao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default DailySales
