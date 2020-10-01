import api from '../../../services/api';

const setProducts = products => ({
  type: "SET_PRODUCTS",
  products
});

const setCardData = data => ({
  type: "SET_CARD_DATA",
  data
})

export const getProducts = () => async (dispatch) => {
  try {
    const response = await api.get("/data");

    dispatch(setProducts(response.data));
    console.log(setProducts(response.data));
  } catch {
    alert("Ocorreu um erro inesperado. Tente novamente!")
  }
}

export const validationData = ({ numberCard, holder, validity, cvv }) => (dispatch) => {
  try {
    const body = {
      numberCard,
      holder,
      validity,
      cvv
    }

    dispatch(setCardData(body))
    console.log(setCardData(body))

  } catch {
    alert("Ocorreu um erro inesperado. Tente novamente!")
  }
}
