import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.mocky.io/v2/",
});
