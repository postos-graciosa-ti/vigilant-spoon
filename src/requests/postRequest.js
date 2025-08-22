import server from "../services/server"

const postRequest = (endpoint, body) => {
  return (
    server
      .post(endpoint, body)
      .then((response) => response)
      .catch((error) => console.error(error))
  )
}

export default postRequest
