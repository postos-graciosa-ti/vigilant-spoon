import ReactSelect from "react-select"

const FormSelect = (props) => {
  const { label, options, value, onChange } = props

  return (
    <>
      <div className="mb-3">
        <label className="form-label fw-bold">
          {label}
        </label>

        <ReactSelect
          placeholder={""}
          options={options}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default FormSelect
