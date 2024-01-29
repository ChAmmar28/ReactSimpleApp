import React from 'react'
import { Link } from 'react-router-dom'
import cls from './style.module.scss'

function Cards({ data }) {
   return (
      <Link to={`/ProductPage/${data.id - 1} `} className={cls.cardWrapper}>
         <div className={cls.card}>
            <div className={cls.imgWrapper}>
               <img src={data.image_url} />
            </div>
            <div>
               <p>{data.name}</p>
            </div>
            <div>
               <p>{data.price}</p>
               <p>{data.theme}</p>
            </div>
         </div>
      </Link>
   )
}

export default Cards
