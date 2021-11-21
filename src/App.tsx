import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'
import DetailPage from './components/DetailPage'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/details/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
