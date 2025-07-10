import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Table,
  Layers,
  Folder,
  ChevronLeft,
  ChevronRight,
  Goal,
  Settings,
  Send,
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: <Home className="w-4 h-4" />, path: '/' },
  { name: 'Tables', icon: <Table className="w-4 h-4" />, path: '/tables' },
  { name: 'Categories', icon: <Layers className="w-4 h-4" />, path: '/categories' },
  { name: 'Envelopes', icon: <Folder className="w-4 h-4" />, path: '/envelopes' },
  { name: 'Savings', icon: <Goal className="w-4 h-4" />, path: '/savings-goals' },
  { name: 'Transaction', icon: <Send className='w-4 h-4' />, path: '/transactions'}
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`transition-all duration-300 h-screen bg-white dark:bg-gray-800 shadow-md ${open ? 'w-64' : 'w-16'} fixed z-50`}>
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <span className={`font-bold text-lg text-gray-800 dark:text-white transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
          Smart Budgeting
        </span>
        <button
          className="text-gray-800 dark:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>


      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition"
        >
          <img
            src="https://ui-avatars.com/api/?name=User&background=random"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          {open && <span className="text-gray-800 dark:text-white font-medium">John Doe</span>}
        </NavLink>
      </div>


      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                isActive
                  ? 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
                  : 'text-gray-700 dark:text-gray-300'
              } ${open ? 'justify-start' : 'justify-center'}`
            }
          >
            {item.icon}
            {open && <span className="ml-3">{item.name}</span>}
          </NavLink>
        ))}
      </nav>


      {/* Settings Icon at Bottom */}
      <div className="absolute bottom-4 left-0 w-full px-4">
        <NavLink
          to="/settings"
          className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition justify-start"
        >
          <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          {open && <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</span>}
        </NavLink>
      </div>

    </div>
  );
};

export default Sidebar;
