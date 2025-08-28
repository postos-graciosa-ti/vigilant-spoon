const FormInputLink = (props) => {
  const { label, stateValue, defaultValue, setStateValue } = props

  const handleOpenNewTab = () => {
    let urlToOpen = stateValue || defaultValue

    window.open(urlToOpen, "_blank")
  }

  return (
    <>
      <div>
        <label className="form-label fw-bold">
          {label}
        </label>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={defaultValue}
          aria-label="Recipient’s username"
          aria-describedby="basic-addon2"
          onChange={(e) => setStateValue(e.target.value)}
        />

        <button
          className="input-group-text"
          id="basic-addon2"
          onClick={handleOpenNewTab}
        >
          <i className="bi bi-box-arrow-in-up-right"></i>
        </button>
      </div>
    </>
  )
}

export default FormInputLink
