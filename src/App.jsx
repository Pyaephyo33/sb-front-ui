import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// admin
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Tables from './pages/Tables'
import Categories from './pages/Categories'

import TableEnvelope from './pages/envelopes/TableEnvelope'
import CreateEnvelope from './pages/envelopes/CreateEnvelope'
import EditEnvelope from './pages/envelopes/EditEnvelope'




// client
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* admin side */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/auth' element={<Auth />} />


        {/* Envelope */}
        <Route path="/envelopes" element={<TableEnvelope />} />
        <Route path="/envelopes/create" element={<CreateEnvelope />} />
        <Route path="/envelopes/edit/:id" element={<EditEnvelope />} />


      

        {/* Client side */}
        <Route path='/home' element={<><Navbar /> <Home /> <Footer /></>} />


      </Routes>
    </Router>
  )
}

export default App
