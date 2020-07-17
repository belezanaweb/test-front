import axios from "axios";

const baseUrl = "http://www.mocky.io/v2/5b15c4923100004a006f3c07"

export const setCreditCard = (cardInfo) => {
    return {
        type: "SET_CREDIT_CARD",
        payload: {
            cardInfo
        }
    }
}

export const setCart = (cart) => {
    return {
        type: "SET_CART",
        payload: {
            cart
        }
    }
}


export const getCart = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}`)
        dispatch(setCart(response.data))
    } catch (error) {
        console.error(error)
    }
}