export const REQUEST_PAGE = 'REQUEST_PAGE';

export async function setPage(page) {
    return dispatch => {
        dispatch({ type: REQUEST_PAGE, payload: page })
    }
}
