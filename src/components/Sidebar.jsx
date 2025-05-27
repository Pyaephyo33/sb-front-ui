import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Table,
  Layers,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: <Home className="w-4 h-4" />, path: '/' },
  { name: 'Tables', icon: <Table className="w-4 h-4" />, path: '/tables' },
  { name: 'Categories', icon: <Layers className="w-4 h-4" />, path: '/categories' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`transition-all duration-300 h-screen bg-white dark:bg-gray-800 shadow-md ${open ? 'w-64' : 'w-16'} fixed z-50`}>
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <span className={`font-bold text-lg text-gray-800 dark:text-white transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
          MyApp
        </span>
        <button
          className="text-gray-800 dark:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
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
    </div>
  );
};

export default Sidebar;
