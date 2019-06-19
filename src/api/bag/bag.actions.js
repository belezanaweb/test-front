/**
 * Dependencies
 */
import axios from 'axios'

/*** Resources*/
import { BAG_ALL } from './bag.types'
const apiUrl = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'

const ALL = () => async dispatch => {
  try {
    const response = await axios.get(apiUrl)

    return dispatch({ type: BAG_ALL, response: response.data })
  } catch (e) {
    return e.message
  }
}

export const bagActions = { ALL }
