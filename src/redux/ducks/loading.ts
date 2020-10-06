import { Dispatch } from 'redux'

type LoadingAction = {
  type: 'DISPLAY_LOADING'
  display: boolean
}

export interface ILoadingValues {
  display: boolean
}
export const loadingReducer = (state: ILoadingValues, action: LoadingAction): ILoadingValues => {
  switch (action.type) {
    case 'DISPLAY_LOADING': {
      return { ...state, display: action.display }
    }
    default:
      return { ...state }
  }
}

export const setDisplay = (value: boolean) => (dispatch: Dispatch<LoadingAction>): void => {
  dispatch({
    type: 'DISPLAY_LOADING',
    display: value
  })
}
