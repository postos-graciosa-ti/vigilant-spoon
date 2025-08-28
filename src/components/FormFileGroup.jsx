import FormFileInput from "./FormFileInput"
import PdfViewer from "./PdfViewer"

const FormFileGroup = (props) => {
  const { label, setStateValue, base64 } = props

  return (
    <>
      <div className="mb-3">
        <FormFileInput
          label={label}
          setStateValue={setStateValue}
        />
      </div>

      {
        base64 && (
          <div className="mb-3">
            <PdfViewer
              base64={base64}
            />
          </div>
        )
      }
    </>
  )
}

export default FormFileGroup
