// BEGINNING -  ACTION TYPES 
export const FETCH_BEGIN = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
// END - ACTION TYPES

export const fetchBegin = () => ({
    type: FETCH_BEGIN
})

export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    payload: data
})

export const fetchError = (error) => ({
    type: FETCH_ERROR,
    payload: error
})

export function fetchData() {
    const url = `http://www.mocky.io/v2/5b15c4923100004a006f3c07`;

    return dispatch => {
        dispatch(fetchBegin());
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchSuccess(data))
                return data
            })
            .catch(error => dispatch(fetchError(error)))
    }
}