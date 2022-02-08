import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

api.registerInterceptWithStore = (store) => {
  api.interceptors.response.use(
    (response) => {
      if (
        response.data &&
        !response.data.success &&
        (response.data.httpStatusCode === 403 || response.data.httpStatusCode === 401)
      ) {
        alert('SignOut');
      }

      return response;
    },
    (err) => {
      if (err.response.status === 403 || err.response.status === 401) {
        alert('SignOut');
      }
      return err;
    }
  );
};

export default api;
