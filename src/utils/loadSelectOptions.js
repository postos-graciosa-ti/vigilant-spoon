import getRequest from "../requests/getRequest"

const loadSelectOptions = (endpoint) => {
  return (
    getRequest(endpoint)
      .then((response) => response.data.map((data) => ({ "value": data.id, "label": data.name })))
  )
}

export default loadSelectOptions
