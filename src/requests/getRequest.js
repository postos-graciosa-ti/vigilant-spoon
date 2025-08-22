import server from "../services/server"

const getRequest = (endpoint) => {
  return (
    server
      .get(endpoint)
      .then((response) => response)
      .catch((error) => console.error(error))
  )
}

export default getRequest
