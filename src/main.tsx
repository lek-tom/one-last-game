import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import Login from './pages/registration/Login/Login.tsx'
import MainPage from './pages/mainPage/MainPage.tsx'
import Register from './pages/registration/Register/Register.tsx'
import Mines from './pages/mines/Mines.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/mines' element={<Mines/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
