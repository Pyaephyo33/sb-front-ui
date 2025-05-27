import React from 'react';
import Container from '../components/Container';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Expenses',
        data: [400, 600, 300, 800, 650],
        borderColor: '#6366f1',
        tension: 0.4,
        fill: false,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const cards = [
    {
      title: 'Total Balance',
      value: '$12,450',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Monthly Spending',
      value: '$1,320',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Remaining Budget',
      value: '$2,800',
      bgColor: 'bg-green-100'
    }
  ];


  const transactions = [
    { date: '2025-05-25', description: 'Groceries - Walmart' },
    { date: '2025-05-24', description: 'Subscription - Spotify' },
    { date: '2025-05-23', description: 'Utility - Electricity' }
  ];

  return (
    <Container>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard</h1>

      {/* Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${card.color} text-white rounded-xl p-6 shadow-md transform transition-transform hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-sm opacity-90">{card.title}</div>
            <div className="text-2xl font-semibold">{card.value}</div>
          </div>
        ))}
      </div> */}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative group rounded-xl shadow-md transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
          >
            {/* Outer border layer */}
            <div className="absolute inset-0 border border-gray-300 dark:border-gray-700 rounded-xl"></div>

            {/* Inner card with light background + hover effect */}
            <div
              className={`
                relative z-10 rounded-xl p-6 text-gray-800 transform transition duration-300
                group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-95
                ${card.bgColor}
              `}
            >
              <div className="text-sm font-medium">{card.title}</div>
              <div className="text-2xl font-semibold mt-2">{card.value}</div>
            </div>
          </div>
        ))}
      </div>



      {/* Chart + Table */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Chart */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Expense Overview</h2>
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Transactions */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex-1">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Transactions</h2>
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
            <thead>
              <tr>
                <th className="pb-2">Date</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-2">{tx.date}</td>
                  <td className="py-2">{tx.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
