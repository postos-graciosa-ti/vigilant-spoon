const FormInputLink = (props) => {
  const {
    label,
    value,
    onChange,
    placeholder = "",
    disabled = false
  } = props

  const handleOpenNewTab = () => {
    if (!value) return

    let urlToOpen = value

    if (!urlToOpen.startsWith('http://') && !urlToOpen.startsWith('https://')) {
      urlToOpen = 'https://' + urlToOpen
    }

    window.open(urlToOpen, "_blank", "noopener noreferrer")
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleOpenNewTab()
    }
  }

  return (
    <div className="mb-3">
      {
        label && (
          <label className="form-label fw-bold">
            {label}
          </label>
        )
      }

      <div className="input-group">
        <input
          value={value || ''}
          type="url"
          className="form-control"
          placeholder={placeholder}
          aria-label={label || "Link de documentos"}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          disabled={disabled}
        />

        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleOpenNewTab}
          disabled={!value || disabled}
          title="Abrir link em nova aba"
        >
          <i className="bi bi-box-arrow-in-up-right"></i>
        </button>
      </div>
    </div>
  )
}

export default FormInputLink
