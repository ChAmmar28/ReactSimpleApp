import { Routes, Route } from 'react-router-dom'

import Layout from './Components/Layout'
import HomePage from './Components/Pages/HomePage'
import BlogPage from './Components/Pages/BlogPage'
import CartPage from './Components/Pages/CartPage'
import ProductPage from './Components/Pages/ProductPage'
import NotFoundPage from './Components/Pages/NotFoundPage'

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" index element={<HomePage />} />
               <Route path="/ProductPage" element={<BlogPage />} />
               <Route path="/CartPage" element={<CartPage />} />
               <Route path="/ProductPage/:Id" element={<ProductPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
