import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { ISetMovies, Movie } from '../reducers'
import { ACTIONS } from './actionTypes'

export const setMovies = (movies: Array<Movie>): ISetMovies => ({
  type: ACTIONS.SET_MOVIES,
  payload: movies,
})

export const fetchMovies = () => (dispatch: Dispatch): void => {
  axios
    .get('http://localhost:3001/entries')
    .then((response) => {
      dispatch(setMovies(response.data))
    })
}
