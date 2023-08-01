import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers'

const store = configureStore({
  reducer: appReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
