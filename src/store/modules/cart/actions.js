import api from '../../../services/api';
import { push} from "connected-react-router";

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
    dispatch(push("/success"))
  } catch {
    alert("Ocorreu um erro inesperado. Tente novamente!")
  }
}

export const validationData = ( {numberCard, holder, validity, cvv} ) => async (dispatch) => {
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
