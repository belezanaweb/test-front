import axios from 'axios';

const baseUrl = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07';

export const setCart = (cart) => ({
  type: 'SET_CART',
  payload: {
    cart,
  },
});

export const listCart = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}`);

    dispatch(setCart(response.data));
  } catch (error) {
    alert('Por favor, tentar novamente.');
  }
};
