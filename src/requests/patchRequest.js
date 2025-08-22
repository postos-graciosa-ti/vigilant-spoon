import server from "../services/server"

const patchRequest = (endpoint, body) => {
  return (
    server
      .patch(endpoint, body)
      .then((response) => response)
      .catch((error) => console.error(error))
  )
}

export default patchRequest
