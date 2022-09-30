import { Action, AnyAction, Middleware, ThunkAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { hasActionMatch } from 'utils'
import {
  addToCart,
  decrementQuantity,
  emptyCart,
  removeItem,
  setDynoAction,
  updateQuantity,
  addToFavorites,
  removeFavoriteItem,
} from './slice'

const localStorageMiddleware: Middleware<unknown, RootState> =
  (store) => (next) => (action: Action) => {
    next(action)
    if (
      hasActionMatch(
        [
          addToCart,
          updateQuantity,
          decrementQuantity,
          removeItem,
          emptyCart,
          addToFavorites,
          removeFavoriteItem,
        ],
        action
      )
    ) {
      const cart = store.getState().cart
      const favorites = store.getState().favorites
      localStorage.setItem(
        'namstoreStorage',
        JSON.stringify({ cart, favorites })
      )
    }
  }

export const hydrateStore =
  (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
    const namstoreStorage = localStorage.getItem('namstoreStorage')
    if (namstoreStorage) {
      dispatch(
        setDynoAction({ ...JSON.parse(namstoreStorage), hasHydrated: true })
      )
    } else {
      dispatch(setDynoAction({ hasHydrated: true }))
    }
  }

export default [localStorageMiddleware]
