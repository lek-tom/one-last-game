import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.scss'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Routes, Route} from 'react-router-dom'
import Login from './pages/registration/Login/Login.tsx'
import Navbar from './components/navbar/Navbar.tsx'
import MainPage from './pages/mainPage/MainPage.tsx'
import Register from './pages/registration/Register/Register.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
)
