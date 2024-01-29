import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, child } from 'firebase/database'
import Cards from '../Cards'
import app from '../Pages/HomePage/FireBase'
import cls from './style.module.scss'

function CardContainer() {
   const [dataArray, GetData] = useState()
   useEffect(() => {
      const dbref = ref(getDatabase(app))
      get(child(dbref, '/anime_merchandise/'))
         .then((snapshot) => {
            if (snapshot.exists()) {
               GetData(snapshot.val())
            } else {
               console.log('No data available')
            }
         })
         .catch((error) => {
            console.error(error)
         })
   }, [])

   return (
      <div className={cls.container}>
         {dataArray &&
            dataArray.map((item) => <Cards key={item.id} data={item} />)}
      </div>
   )
}

export default CardContainer
