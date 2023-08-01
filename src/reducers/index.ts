import { produce } from 'immer'
import { ACTIONS } from '../actions/actionTypes';

export interface AppState {
  test: boolean
}

const appState: AppState = {
  test: true
}

export interface IClearStateInterface {
  type: typeof ACTIONS.CLEAR_STATE;
}

type Action =
  | IClearStateInterface

const appReducer = (state = appState, action: Action): AppState =>
  produce(state, () => {
    switch (action.type) {
      case ACTIONS.CLEAR_STATE: {
        return undefined
      }
    }
  })

export default appReducer