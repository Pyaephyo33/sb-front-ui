import React from 'react';
import Container from '../components/Container';

const Dashboard = () => {
  return (
    <Container>
      <div className="text-black dark:text-white font-bold text-xl">Dashboard</div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['User', 'Product', 'Visitor'].map((title, i) => (
          <div key={i} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-cyan-500 dark:to-blue-500 rounded-md p-3 text-white flex justify-between items-center">
            <div>
              <div className="text-xs">{`Total ${title}`}</div>
              <div className="text-lg font-semibold">{Math.floor(Math.random() * 1000)}</div>
            </div>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
