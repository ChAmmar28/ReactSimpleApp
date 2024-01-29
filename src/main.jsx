import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { store } from './Store/index.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
   // <React.StrictMode>
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>

   // </React.StrictMode>
)
