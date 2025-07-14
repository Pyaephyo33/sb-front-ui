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

import ListSavingsGoals from './pages/savingsGoals/ListSavingsGoals'
import CreateSavingsGoals from './pages/savingsGoals/CreateSavingsGoals'

import TransactionList from './pages/transaction/TransactionList'
import TransactionDetails from './pages/transaction/TransactionDetails'
import CreateTransaction from './pages/transaction/CreateTransaction'
import ExpenseTracking from './pages/transaction/ExpenseTracking'

import Profile from './pages/auth/Profile'
import Settings from './pages/auth/Settings'
import UserAccount from './pages/auth/UserAccount'

// client
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* admin side */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/user-account' element={<UserAccount />} />


        {/* Envelope */}
        <Route path="/envelopes" element={<TableEnvelope />} />
        <Route path="/envelopes/create" element={<CreateEnvelope />} />
        <Route path="/envelopes/edit/:id" element={<EditEnvelope />} />

        {/* Savings Goals */}
        <Route path='/savings-goals' element={<ListSavingsGoals />} />
        <Route path='/savings-goals/create' element={<CreateSavingsGoals />} />
        
        {/* Transactions */}
        <Route path='/transactions' element={<TransactionList />} />
        <Route path='/transactions/create' element={<CreateTransaction />} />
        <Route path='/transactions/:id' element={<TransactionDetails />} />
        <Route path='/expense-tracking' element={<ExpenseTracking />} />
        {/* Client side */}
        <Route path='/home' element={<><Navbar /> <Home /> <Footer /></>} />
        <Route path='/contact' element={<><Navbar /> <Contact /> </>} />


      </Routes>
    </Router>
  )
}

export default App
