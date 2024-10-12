import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})


//steps:
//1. create a store
//2. wrap the app with the provider and pass the store as a prop
//3. create a slice
//4. create a reducer using the slice and register it in store