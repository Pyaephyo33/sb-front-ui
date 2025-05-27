import React from 'react';
import Sidebar from './Sidebar';

const Container = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 ml-16 md:ml-64 p-6 transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default Container;