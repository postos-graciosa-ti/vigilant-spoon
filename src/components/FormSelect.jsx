import ReactSelect from "react-select"

const FormSelect = (props) => {
  const { label, options, setStateValue, defaultValue } = props

  return (
    <>
      <div className="mb-3">
        <label className="form-label fw-bold">
          {label}
        </label>

        <ReactSelect
          placeholder={""}
          options={options}
          onChange={(value) => setStateValue(value)}
          defaultValue={options?.find((option) => option.value == defaultValue)}
        />
      </div>
    </>
  )
}

export default FormSelect
