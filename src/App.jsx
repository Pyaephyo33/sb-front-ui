import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Tables from './pages/Tables'
import Categories from './pages/Categories'

import TableEnvelope from './pages/envelopes/TableEnvelope'
import CreateEnvelope from './pages/envelopes/CreateEnvelope'
import EditEnvelope from './pages/envelopes/EditEnvelope'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/auth' element={<Auth />} />


        {/* Envelope */}
        <Route path="/envelopes" element={<TableEnvelope />} />
        <Route path="/envelopes/create" element={<CreateEnvelope />} />
        <Route path="/envelopes/edit/:id" element={<EditEnvelope />} />
      </Routes>
    </Router>
  )
}

export default App
