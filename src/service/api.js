import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.mocky.io/v2/'
})

export const getOrderData = () => axiosInstance.get('/5b15c4923100004a006f3c07')