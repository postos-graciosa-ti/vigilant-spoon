import fileToBase64 from "../utils/fileToBase64"

const FormFileInput = (props) => {
  const { label, setStateValue } = props

  const handleOnChangeFile = async (e) => {
    const file = e.target.files[0]

    if (!file) return

    const base64 = await fileToBase64(file)

    setStateValue(base64)
  }

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>

      <input
        type="file"
        className="form-control"
        onChange={handleOnChangeFile}
      />
    </div>
  )
}

export default FormFileInput
