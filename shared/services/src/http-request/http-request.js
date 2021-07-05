import axios from "axios";

/**
 * The final baseURL must be a domain that mantains all endpoins
 * that will be used in this project. Such an example:
 * https://api.belezanaweb.com.br/
 * This mocky is only an exercise.
 */
const httpRequest = axios.create({
  baseURL: "http://www.mocky.io/v2",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default httpRequest;
