import React, { useState } from 'react';
import { Moon, Sun, Home, Table, PieChart } from 'lucide-react';

// const Sidebar = ({ isDark, toggleDark }) => {
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <aside className={`transition-all duration-500 z-50 fixed h-screen bg-[#1E293B] text-white ${expanded ? 'w-60' : 'w-16'} overflow-hidden`}>
      {/* Toggle button */}
      <div
        onClick={handleToggleSidebar}
        className="absolute top-2 right-[-12px] bg-[#1E293B] hover:bg-blue-500 dark:hover:bg-cyan-500 border-4 border-white dark:border-[#0F172A] p-3 rounded-full cursor-pointer transition-transform duration-300 hover:rotate-45"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5" />
        </svg>
      </div>

      {/* Theme toggle */}
      {/* <div className="mt-20 flex items-center justify-center space-x-4 px-4">
        <button onClick={() => toggleDark('dark')} className={`${isDark ? 'hidden' : ''}`}>
          <Moon className="w-4 h-4 hover:text-blue-500" />
        </button>
        <button onClick={() => toggleDark('light')} className={`${!isDark ? 'hidden' : ''}`}>
          <Sun className="w-4 h-4 hover:text-yellow-400" />
        </button>
      </div> */}

        {/* Welcome Message (Only Visible When Sidebar is Expanded) */}
        {expanded ? (
        <div className="mt-20 flex items-center justify-center px-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white transform transition-all duration-300 hover:scale-105 hover:text-purple-400">
            Welcome, John Doe!
            </h2>
        </div>
        ) : null}



      {/* Nav links */}
      <nav className={`mt-18 space-y-2 ${expanded ? 'px-2' : 'px-2'}`}>
        <SidebarItem icon={<Home className="w-5 h-5" />} label="Home" expanded={expanded} />
        <SidebarItem icon={<Table className="w-5 h-5" />} label="Table" expanded={expanded} />
        <SidebarItem icon={<PieChart className="w-5 h-5" />} label="Graph" expanded={expanded} />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, expanded }) => (
  <div className="flex items-center space-x-3 hover:ml-2 transition-all p-2 rounded-full cursor-pointer hover:text-purple-500 dark:hover:text-cyan-400">
    {icon}
    {expanded && <span className="whitespace-nowrap">{label}</span>}
  </div>
);

export default Sidebar;
