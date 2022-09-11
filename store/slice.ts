import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = { cart: [] as ICartItem[] }

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
  },
})

export const {
  addToCart,
  setDynoAction,
  updateQuantity,
  decrementQuantity,
  removeItem,
  emptyCart,
} = root.actions

export default root.reducer
