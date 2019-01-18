import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://www.mocky.io/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
