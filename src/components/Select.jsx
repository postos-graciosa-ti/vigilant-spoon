import { Controller } from "react-hook-form"
import ReactSelect from "react-select"

const Select = (props) => {
  const { control, name, label, options } = props

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactSelect
            placeholder={""}
            {...field}
            options={options}
            getOptionValue={(option) => option.value.toString()}
            getOptionLabel={(option) => option.label}
            onChange={(val) => field.onChange(val.value)}
            value={options.find((opt) => opt.value === field.value) || null}
          />
        )}
      />
    </div>
  )
}

export default Select
