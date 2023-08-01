import { Dispatch, Store } from 'redux'

export const fetchMovies = () => (dispatch: Dispatch, getState: () => Store): void => {
  const state = getState()
  console.log(state)
}
