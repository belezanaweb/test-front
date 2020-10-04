const API = {
  baseUrl: 'http://www.mocky.io/v2',
  endpoints: {
    getProducts: '5b15c4923100004a006f3c07'
  }
};

const GetProductsList = () => fetch(`${API}/${API.endpoints.getProducts}`);

export default {
  GetProductsList
};