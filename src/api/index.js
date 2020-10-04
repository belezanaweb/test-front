import axios from 'axios';

const API = axios.create({
  baseURL: 'http://www.mocky.io/v2'
});

const GetPurchase = () => API.get('/5b15c4923100004a006f3c07')

export {
  GetPurchase
};