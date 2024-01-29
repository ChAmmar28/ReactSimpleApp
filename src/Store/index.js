import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slises/cartList'

export const store = configureStore({
   reducer: {
      cart: cartSlice,
   },
})
