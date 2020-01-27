import { put } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'

const initialDog = {
  name: 'Tucker',
  age: 11
}

function reducer(state = initialDog, action) {
  if (action.type === 'HAVE_BIRTHDAY') {
    return {
      ...state,
      age: state.age + 1
    }
  }

  return state
}

function* saga() {
  yield put({ type: 'HAVE_BIRTHDAY' })
}

it('handles reducers and store state', () => {
  return expectSaga(saga)
    .withReducer(reducer)

    .hasFinalState({
      name: 'Tucker',
      age: 12 // <-- age changes in store state
    })

    .run()
})
