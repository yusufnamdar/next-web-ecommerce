import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: [] as IProduct[],
  reducers: {
    addToCart(state: any, action: IRecord) {
      state.push(action.payload)
    },
  },
})

//It is for common use case
const universal = createSlice({
  name: 'universal',
  initialState: {} as IRecord,
  reducers: {
    setDynoAction(state, action: any) {
      console.log(state)
      return { ...state, ...action.payload }
    },
  },
})

export const { addToCart, setDynoAction } = {
  ...cart.actions,
  ...universal.actions,
}

export const { cartReducer, universalReducer } = {
  cartReducer: cart.reducer,
  universalReducer: universal.reducer,
}
