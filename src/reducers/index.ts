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
  yearRange: Array<number>
  programType: Array<string>
  nameFilter: string
  order: string
}

const appState: AppState = {
  movies: [],
  yearRange: [0, 1],
  programType: ['series', 'movie'],
  nameFilter: '',
  order: 'Name ASC'
}

export interface IClearStateInterface {
  type: typeof ACTIONS.CLEAR_STATE;
}

export interface ISetMovies {
  type: typeof ACTIONS.SET_MOVIES;
  payload: Array<Movie>
}

export interface ISetYearRange {
  type: typeof ACTIONS.SET_YEAR_RANGE;
  payload: Array<number>
}

export interface ISetProgramType{
  type: typeof ACTIONS.SET_PROGRAM_TYPE;
  payload: Array<string>
}

export interface ISetNameFilter {
  type: typeof ACTIONS.SET_NAME_FILTER;
  payload: string
}

export interface ISetOrder {
  type: typeof ACTIONS.SET_ORDER;
  payload: string
}

type Action =
  | IClearStateInterface
  | ISetMovies
  | ISetYearRange
  | ISetProgramType
  | ISetNameFilter
  | ISetOrder

const appReducer = (state = appState, action: Action): AppState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.CLEAR_STATE: {
        return undefined
      }
      case ACTIONS.SET_MOVIES: 
        draft.movies = action.payload
        break
      case ACTIONS.SET_YEAR_RANGE: 
        draft.yearRange = action.payload
        break
      case ACTIONS.SET_PROGRAM_TYPE: 
        draft.programType = action.payload
        break
      case ACTIONS.SET_NAME_FILTER: 
        draft.nameFilter = action.payload
        break
      case ACTIONS.SET_ORDER: 
        draft.order = action.payload
    }
  })

export default appReducer