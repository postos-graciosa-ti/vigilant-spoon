import { Controller } from "react-hook-form"

const Input = (props) => {
  const { control, label, name, type } = props

  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type={type}
            className="form-control"
            {...field}
          />
        )}
      />
    </div>
  )
}

export default Input
