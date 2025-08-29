const FormInput = (props) => {
  const { label, type, value, onChange } = props

  return (
    <>
      <div className="mb-3">
        <label className="form-label fw-bold">
          {label}
        </label>

        <input
          type={type}
          className="form-control"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default FormInput
