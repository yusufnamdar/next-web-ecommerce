import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  cart: [] as ICartItem[],
  favorites: [] as IFavoriteItem[],
  hasHydrated: false,
}

const root = createSlice({
  name: 'root',
  initialState,
  reducers: {
    //For simple adding or updating any field of the store
    setDynoAction(state, action: PayloadAction<IRecord>) {
      return { ...state, ...action.payload }
    },
    //Add one item to the cart or increment an item quantity
    addToCart(state, action: PayloadAction<Omit<ICartItem, 'quantity'>>) {
      const item = state.cart.find(
        (item) => item.sku.sku === action.payload.sku.sku
      )

      if (item) {
        item.quantity++
        return
      }
      state.cart.unshift({ ...action.payload, quantity: 1 })
    },
    //Update the quantity of already existing cart item
    updateQuantity(
      state,
      action: PayloadAction<{ sku: string; quantity: number }>
    ) {
      const item = state.cart.find(
        (item) => item.sku.sku === action.payload.sku
      )
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    //Decrement an item quantity
    decrementQuantity(state, action: PayloadAction<{ sku: string }>) {
      const item = state.cart.find(
        (item) => item.sku.sku === action.payload.sku
      )

      if (item && item.quantity > 1) {
        item.quantity--
      }
    },
    //Remove one item from the cart
    removeItem(state, action: PayloadAction<{ sku: string }>) {
      state.cart = state.cart.filter(
        (item) => item.sku.sku !== action.payload.sku
      )
    },
    //Empty the cart
    emptyCart(state) {
      state.cart = []
    },
    //Add favorite
    addToFavorites(state, action: PayloadAction<IFavoriteItem>) {
      const item = state.favorites.find(
        (item) => item.sku.sku === action.payload.sku.sku
      )

      if (!item) {
        state.favorites.unshift(action.payload)
      }
    },
    //Remove favorite
    removeFavoriteItem(state, action: PayloadAction<{ sku: string }>) {
      state.favorites = state.favorites.filter(
        (item) => item.sku.sku !== action.payload.sku
      )
    },
  },
})

export const {
  addToCart,
  setDynoAction,
  updateQuantity,
  decrementQuantity,
  removeItem,
  emptyCart,
  addToFavorites,
  removeFavoriteItem,
} = root.actions

export default root.reducer
