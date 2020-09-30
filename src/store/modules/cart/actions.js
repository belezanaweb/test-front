import axios from 'axios';
import api from '../../../services/api';

const setProducts = products => ({
  type: "SET_PRODUCTS",
  products
});

const getProducts = () => async (dispatch) => {
  try {
    const response = await api.get("/data");

    dispatch(response);
    console.log(response);
  } catch {
    alert("Ocorreu um erro inesperado. Tente novamente!")
  }
}
