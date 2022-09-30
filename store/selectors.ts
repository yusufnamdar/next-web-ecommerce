import type { RootState } from 'store'

export const getCart = (state: RootState) => state.cart || []
export const getFavorites = (state: RootState) => state.favorites || []
export const getHydrate = (state: RootState) => state.hasHydrated
