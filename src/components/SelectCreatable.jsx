import { Controller } from "react-hook-form"
import CreatableSelect from "react-select/creatable"
import postRequest from "../requests/postRequest"
import useSelectOptionsStore from "../stores/selectOptions"

const SelectCreatable = (props) => {
  const { control, name, label, options, createOptionEndpoint } = props

  const { getOptions } = useSelectOptionsStore()

  const handleOnCreate = (newValue) => {
    postRequest(createOptionEndpoint, { name: newValue }).then(() => getOptions())
  }

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CreatableSelect
            placeholder=""
            {...field}
            options={options}
            getOptionValue={(option) => option.value.toString()}
            getOptionLabel={(option) => option.label}
            onChange={(val) => field.onChange(val?.value)}
            value={options.find((opt) => opt.value === field.value) || null}
            onCreateOption={(newValue) => handleOnCreate(newValue)}
          />
        )}
      />
    </div>
  )
}

export default SelectCreatable
