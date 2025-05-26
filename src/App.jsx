import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
