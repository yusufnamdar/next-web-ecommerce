import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import rootReducer from './slice'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
})

export type RootState = ReturnType<typeof rootReducer>
//the default useDispatch hook does not know about thunks, and so dispatching a thunk will cause a type error.
export type AppDispatch = typeof store.dispatch
