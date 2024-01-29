import React from 'react'
import { NavLink } from 'react-router-dom'
// import { UseSelector } from 'react-redux'

function CartBtn({ sClass }) {
   return (
      <NavLink to="/CartPage" className={sClass}>
         <span>{}</span>| #<span>{}</span>
      </NavLink>
   )
}

export default CartBtn
