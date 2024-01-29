import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ref, getDatabase, get, child } from 'firebase/database'

import cls from './style.module.scss'
import app from '../HomePage/FireBase'
import AddBtn from '../../AddBtn'
import RemoveBtn from '../../RemoveBtn'

function ProductPage() {
   const { Id } = useParams()
   console.log(useParams())
   const [data, GetData] = useState()
   useEffect(() => {
      const dbref = ref(getDatabase(app))
      get(child(dbref, '/anime_merchandise/' + Id))
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
   }, [Id])

   return (
      <>
         {data && (
            <div className={cls.container}>
               <div className={cls.imgWrapper}>
                  <img src={data.image_url} alt="" />
               </div>
               <div className={cls.text}>
                  <div>
                     <h4>{data.name}</h4>
                     <h3>{data.price}</h3>
                  </div>
                  <div>
                     <AddBtn data={data} />
                     <RemoveBtn data={data} />
                  </div>
                  <div>
                     <h5>Description</h5>
                     <p>{data.description}</p>
                  </div>
               </div>
               {/* <div></div> */}
            </div>
         )}
      </>
   )
}

export default ProductPage
