import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search/searchSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
