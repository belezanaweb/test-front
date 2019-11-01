import axios from 'axios';

export default {
    get: axios.get,
    post: axios.post,
    axios: axios
}

axios.interceptors.response.use(null, error => {
    return Promise.reject(error);
});