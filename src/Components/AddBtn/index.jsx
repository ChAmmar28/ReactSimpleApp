import React from 'react'
import { addToCart } from '../../Store/Slises/cartList'
import { useDispatch } from 'react-redux'

function AddBtn({ data }) {
   const dispatch = useDispatch()
   const handleClick = (item) => {
      dispatch(addToCart(item))
   }
   return <button onClick={() => handleClick(data)}>Add to cart</button>
}

export default AddBtn
