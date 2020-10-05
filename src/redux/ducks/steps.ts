import { Dispatch } from 'redux'

type StepAction = {
  type: 'SET_STEP'
  step: number
}

export const stepReducer = (state: number, action: StepAction): number => {
  switch (action.type) {
    case 'SET_STEP': {
      return action.step
    }
    default:
      return 1
  }
}

export const setStep = (type: number) => (dispatch: Dispatch<StepAction>): void => {
  dispatch({
    type: 'SET_STEP',
    step: type
  })
}
