import server from "../services/server"

const deleteRequest = (endpoint) => {
  return (
    server
      .delete(endpoint)
      .then((response) => response)
      .catch((error) => console.error(error))
  )
}

export default deleteRequest
