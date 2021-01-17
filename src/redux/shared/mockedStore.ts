import configureMockStore from 'redux-mock-store'
import { Middleware } from 'redux'
import { Action, BaseAction } from 'redux-actions'

const middlewares: Middleware[] = []
const mockStore = configureMockStore(middlewares)

// Represents the store.
export interface IStore {
  dispatch: (action: BaseAction) => void;
  getActions<T = any>(): BaseAction[] | Action<T>;
}

// Exports a function to allow runtime store creation
export default (initialState = {}): IStore => {
  const store = mockStore(initialState)
  return store
}
