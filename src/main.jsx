import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './styles.css'
import { MangaListApp } from './MangaListApp'
import { store } from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>


    <Provider store={store}>

      <BrowserRouter>
        <MangaListApp />
      </BrowserRouter>

    </Provider>
  // </React.StrictMode>
)
