import { Dispatch } from 'redux'

type StepAction = {
  type: 'SET_STEP'
  current: number
}

export interface IStepValues {
  current: number
}
export const stepReducer = (state: IStepValues, action: StepAction): IStepValues => {
  switch (action.type) {
    case 'SET_STEP': {
      return { ...state, current: action.current }
    }
    default:
      return { ...state }
  }
}

export const setStep = (type: number) => (dispatch: Dispatch<StepAction>): void => {
  dispatch({
    type: 'SET_STEP',
    current: type
  })
}
