import CreatableSelect from 'react-select/creatable'
import getRequest from '../requests/getRequest'
import postRequest from '../requests/postRequest'

const FormCreatableSelect = (props) => {
  const { label, options, onValueChange, createOptionConfig, defaultValue } = props

  const handleOnCreateOption = (endpoint, body) => {
    postRequest(endpoint, body)
      .then(() => {
        getRequest(endpoint)
          .then((getResponse) => {
            let newOptions = getResponse.data.map((option) => ({
              value: option.id,
              label: option.name,
            }))

            createOptionConfig?.setOptions(newOptions)
          })
      })
  }

  return (
    <>
      <label className="form-label fw-bold">{label}</label>

      <div className="mb-3">
        <CreatableSelect
          placeholder={""}
          options={options}
          onChange={(selected) => onValueChange(selected)}
          onCreateOption={(newValue) =>
            handleOnCreateOption(createOptionConfig?.endpoint, { name: newValue })
          }
          defaultValue={options?.find((option) => option.value == defaultValue)}
        />
      </div>
    </>
  )
}

export default FormCreatableSelect
