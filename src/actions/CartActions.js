
//Chaves para ações
import {
    LOADING_CART,
    SET_CART
} from '../actions/types';


/**
 * Method to retrieve products in cart
 *}
 * */
export const fetchCart = () => {

    return dispatch => {

        //dispatch loading 
        dispatch({ type: LOADING_CART, payload: true });

        
        fetch("https://www.mocky.io/v2/5b15c4923100004a006f3c07", { //<-- mas consumindo a api com backend deu certo
            headers: {
                'accept-charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
                'Accept-Encoding': 'gzip, deflate, compress',
                'Content-Type': 'application/json'
            },
            method: "GET"
        })

            .then((response) => response.json())
            .then((responseJson) => {
                
                //when the server return with result

                //stop the loading
                dispatch({ type: LOADING_CART, payload: false });

                console.log('   ...res', responseJson);

                dispatch({ type: SET_CART, payload: responseJson });

            })
            .catch((error) => {
                
                //If we get an error on server consult

                //stop the loading
                dispatch({ type: LOADING_CART, payload: false });
                
            });

    }

}
