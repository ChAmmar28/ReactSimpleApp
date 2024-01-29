import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
   name: 'Cart',
   initialState: { cartList: [] },
   reducers: {
      addToCart: (state, action) => {
         state.cartList.push(action.payload)
      },
      removeFromCart: (state, action) => {
         return state.cartList.filter((item) => item.id !== action.payload)
      },
   },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer

//
