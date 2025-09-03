import { useEffect, useState } from "react"

const PdfViewer = ({ base64 }) => {
  const [pdfUrl, setPdfUrl] = useState(null)

  useEffect(() => {
    if (base64) {
      const url = `data:application/pdf;base64,${base64}`

      setPdfUrl(url)
    }
  }, [base64])

  if (!pdfUrl) return <p>Nenhum PDF disponível</p>

  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="600px"
      style={{ border: "none" }}
      title="PDF Viewer"
    />
  )
}

export default PdfViewer