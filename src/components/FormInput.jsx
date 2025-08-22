const FormInput = (props) => {
  const { label, type, setStateValue, defaultValue } = props

  return (
    <>
      <div className="mb-3">
        <label className="form-label fw-bold">
          {label}
        </label>

        <input
          type={type}
          className="form-control"
          onChange={(e) => setStateValue(e.target.value)}
          defaultValue={defaultValue}
        />
      </div>
    </>
  )
}

export default FormInput
