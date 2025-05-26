import React from 'react';
import Sidebar from './Sidebar';

const Container = ({ children }) => {


  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] transition-colors duration-500">
      <Sidebar/>
      <main className="md:ml-60 ml-16 p-4 pt-20 transition-all duration-500">
        {children}
      </main>
    </div>
  );
};

export default Container;
