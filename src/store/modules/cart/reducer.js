import { produce } from 'immer'

export const INITIAL_STATE = {
  loadingUser: false,
  user: null,
  notFound: false
}

export function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    // switch (action.type) {
    // }
  })
}
