import axios from "axios"
import { useNavigate } from 'react-router-dom'
import useUserSessionStore from "../stores/userSession"

const server = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
})

server.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json"

    config.headers["ngrok-skip-browser-warning"] = "true"

    const token = useUserSessionStore.getState().bearerToken

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

server.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const navigate = useNavigate()

      navigate('/')
    }

    return Promise.reject(error)
  }
)

export default server
