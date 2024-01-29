import React from 'react'
import { NavLink } from 'react-router-dom'

function CartBtn({ sClass }) {
   return (
      <NavLink to="/CartPage" className={sClass}>
         Cart
      </NavLink>
   )
}

export default CartBtn
