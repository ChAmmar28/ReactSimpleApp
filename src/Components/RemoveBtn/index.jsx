import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../Store/Slises/cartList'

function RemoveBtn({ data }) {
   const dispatch = useDispatch()
   const handleClick = (item) => {
      dispatch(removeFromCart(item))
   }
   return <button onClick={() => handleClick(data)}>Remove from cart</button>
}

export default RemoveBtn
