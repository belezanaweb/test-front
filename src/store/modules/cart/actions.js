import api from '../../../services/api';

const setProducts = products => ({
  type: "SET_PRODUCTS",
  products
});

export const getProducts = () => async (dispatch) => {
  try {
    const response = await api.get("/data");

    dispatch(setProducts(response.data));
    console.log(setProducts(response.data));
  } catch {
    alert("Ocorreu um erro inesperado. Tente novamente!")
  }
}
