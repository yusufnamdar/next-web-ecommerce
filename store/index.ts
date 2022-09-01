import { configureStore } from '@reduxjs/toolkit'
import { cartReducer, setDynoAction, universalReducer } from './slices'

export const store = configureStore({
  reducer: { cart: cartReducer, universal: universalReducer },
  devTools: process.env.NODE_ENV !== 'production',
})
store.dispatch(setDynoAction({}))
export type RootState = ReturnType<typeof store.getState>
