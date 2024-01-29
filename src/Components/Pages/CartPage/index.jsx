import React from 'react'
import { useSelector } from 'react-redux'
import cls from './style.module.scss'
import Cards from '../../Cards'

function CartPage() {
   const cartData = useSelector((state) => state.cart.cartList)
   return (
      <div className={cls.container}>
         {cartData &&
            cartData.map((item) => <Cards key={item.id} data={item} />)}
      </div>
   )
}

export default CartPage
