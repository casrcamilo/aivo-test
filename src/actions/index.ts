import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from "react-toastify"
import {
  ISetMovies,
  ISetProgramType,
  ISetYearRange,
  ISetNameFilter,
  ISetOrder,
  Movie,
  ISetFilterSidebarOpen,

} from '../reducers'
import { ACTIONS } from './actionTypes'

export const setMovies = (movies: Array<Movie>): ISetMovies => ({
  type: ACTIONS.SET_MOVIES,
  payload: movies,
})

export const setYearRange = (yearRange: Array<number>): ISetYearRange => ({
  type: ACTIONS.SET_YEAR_RANGE,
  payload: yearRange,
})

export const setProgramType = (programType: Array<string>): ISetProgramType => ({
  type: ACTIONS.SET_PROGRAM_TYPE,
  payload: programType,
})

export const setNameFilter = (nameFilter: string): ISetNameFilter => ({
  type: ACTIONS.SET_NAME_FILTER,
  payload: nameFilter,
})

export const setOrder = (order: string): ISetOrder => ({
  type: ACTIONS.SET_ORDER,
  payload: order,
})

export const setFilterSidebarOpen = (isFilterSidebarOpen: boolean): ISetFilterSidebarOpen => ({
  type: ACTIONS.SET_FILTER_SIDEBAR_OPEN,
  payload: isFilterSidebarOpen,
})

// Async functions
export const fetchMovies = () => (dispatch: Dispatch): void => {
  axios
    .get('http://localhost:3001/entries')
    .then((response) => {
      dispatch(setMovies(response.data))
    })
    .catch((error) => {
      console.error(error)
      dispatch(setMovies([]))
      toast.error("There was an error trying to get the movies, please try again", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    })
}
