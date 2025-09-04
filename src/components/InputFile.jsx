import { Controller } from "react-hook-form";
import fileToBase64 from "../utils/fileToBase64";

const InputFile = (props) => {
  const { name, control, label } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="mt-3 mb-3">
          {label && <label className="form-label fw-bold">{label}</label>}

          <input
            type="file"
            className="form-control"
            onChange={async (e) => {
              const file = e.target.files[0]

              if (file) {
                const base64 = await fileToBase64(file)

                field.onChange(base64)

              } else {
                field.onChange(null)

              }
            }}
          />
        </div>
      )}
    />
  )
}

export default InputFile
