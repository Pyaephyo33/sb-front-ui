import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {ChevronDown} from 'lucide-react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className='bg-whtie shadow-md sticky top-0 z-50 transition-all'>
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
            <NavLink to='/' className="text-2xl font-semibold text-gray-800">
                Smart Budgetting
            </NavLink>
            <button
                className='md:hidden text-gray-800 focus:outline-none'
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        {menuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
            </button>
            <nav className={`flex-col md:flex-row md:flex items-center gap-4 md:gap-6 transition-all duration-300 ease-in-out
                ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                    <NavLink to='#' className='text-gray-700 hover:text-blue-600 font-medium text-sm'>Home</NavLink>
                    <NavLink to='#' className='text-gray-700 hover:text-blue-600 font-medium text-sm'>Pricing</NavLink>
                    <NavLink to='#' className='text-gray-700 hover:text-blue-600 font-medium text-sm'>How It Works</NavLink>
                    <NavLink to='#' className='text-gray-700 hover:text-blue-600 font-medium text-sm'>About</NavLink>
                    <NavLink to='#' className='text-gray-700 hover:text-blue-600 font-medium text-sm'>Contast</NavLink>

                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className='text-gray-700 hover:text-blue-600 font-medium text-sm inline-flex items-center gap-1'
                            >
                                More <ChevronDown size={16} />
                        </button>

                        {dropdownOpen && (
                            <div className='absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-2 w-40 animate-fade-in'>
                                <NavLink to='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded'>Features</NavLink>
                                <NavLink to='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded'>FAQ</NavLink>
                                <NavLink to='/auth' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded'>Login</NavLink>
                            </div>
                        )}
                    </div>
            </nav>
        </div>
      
    </header>
  )
}

export default Navbar
