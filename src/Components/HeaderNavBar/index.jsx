import React from 'react'
import MyLinks from '../MyLinks'
import CartBtn from '../CartBtn'
// import { UseSelector } from 'react-redux'

import style from './style.module.scss'
function HeaderNavBar() {
   return (
      <div className={style.navBar}>
         <MyLinks aText={'Blog'} href={'/BlogPage'} sClass={style.navLink} />
         <CartBtn sClass={style.navLink} />
      </div>
   )
}

export default HeaderNavBar
