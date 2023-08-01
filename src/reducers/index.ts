import { produce } from 'immer'
import { ACTIONS } from '../actions/actionTypes';

enum ProgramType {
  Movie = "movie",
  Series = "series",
}

export interface Movie {
  title: string;
  description: string;
  programType: ProgramType;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    }
  },
  releaseYear: number;
}
export interface AppState {
  movies: Array<Movie>
}

const appState: AppState = {
  movies: []
}

export interface IClearStateInterface {
  type: typeof ACTIONS.CLEAR_STATE;
}

export interface ISetMovies {
  type: typeof ACTIONS.SET_MOVIES;
  payload: Array<Movie>
}

type Action =
  | IClearStateInterface
  | ISetMovies

const appReducer = (state = appState, action: Action): AppState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.CLEAR_STATE: {
        return undefined
      }
      case ACTIONS.SET_MOVIES: 
        draft.movies = action.payload
    }
  })

export default appReducer