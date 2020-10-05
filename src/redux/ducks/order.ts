import { Dispatch } from 'redux'
import axios from 'axios'
import { IOrder } from '../../model/order'

type FetchOrderAction = {
  type: 'FETCH_ORDER'
  order: IOrder
}

export interface IOrderValues {
  order?: IOrder
}

export const orderReducer = (state: IOrderValues = {}, action: FetchOrderAction): IOrderValues => {
  switch (action.type) {
    case 'FETCH_ORDER': {
      return { ...state, order: action.order }
    }
    default:
      return { ...state }
  }
}

export const fetchOrder = () => (dispatch: Dispatch<FetchOrderAction>): void => {
  axios
    .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    .then((res) => {
      dispatch({
        type: 'FETCH_ORDER',
        order: res.data
      })
    })
    .catch((err) => {
      console.error('erro', err)
    })
}
