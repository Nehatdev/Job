import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Login } from './Login'
import AdminPage from './AdminPage'
import UserPage from './UserPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='admin' element={<AdminPage />} />
        <Route path='user' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
