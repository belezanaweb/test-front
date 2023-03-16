import axios from "axios";

const api = axios.create({
  baseURL: "https://run.mocky.io/v3/",
});



export default api;
