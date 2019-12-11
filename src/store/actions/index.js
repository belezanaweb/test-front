import axios from 'axios';

export function loadData() {
    return (dispatch) => {
        return axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
            .then((response) => {
                dispatch(getData(response.data));
                dispatch(addCard(''));
                dispatch(addName(''));
                dispatch(addDateCard(''));
                dispatch(addCvv(''));
            })
    }
}

function getData(data) {
    return {
        type: 'CHANGE_DATA',
        payload: data
    }
}

export function addCard(text) {
    return {
        type: 'ADD_CARD',
        payload: text
    }
}

export function addName(text) {
    return {
        type: 'ADD_NAME',
        payload: text
    }
}

export function addDateCard(text) {
    return {
        type: 'ADD_DATECARD',
        payload: text
    }
}

export function addCvv(text) {
    return {
        type: 'ADD_CVV',
        payload: text
    }
}
