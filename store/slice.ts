import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = { cart: [] as ICartItem[] }

const root = createSlice({
  name: 'root',
  initialState,
  reducers: {
    //For simple adding and updating any field of the store
    setDynoAction(state, action: PayloadAction<IRecord>) {
      return { ...state, ...action.payload }
    },
    //Add item to the cart
    addToCart(state, action: PayloadAction<Omit<ICartItem, 'quantity'>>) {
      const item = state.cart.find((item) => item._id === action.payload._id)

      if (item) {
        item.quantity++
        return
      }
      state.cart.unshift({ ...action.payload, quantity: 1 })
    },
    //Remove item from the cart
    removeFromCart(state, action: PayloadAction<{ _id: string }>) {
      const item = state.cart.find((item) => item._id === action.payload._id)

      if (item && item.quantity > 1) {
        item.quantity--
        return
      }
      state.cart = state.cart.filter((item) => item._id !== action.payload._id)
    },
  },
})

export const { addToCart, setDynoAction } = root.actions

export default root.reducer
