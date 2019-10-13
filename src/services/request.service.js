import axios from 'axios'
const { REACT_APP_API_HOST: API_HOST } = process.env

const RequestService = axios.create({
  baseURL: API_HOST
})

export default RequestService
