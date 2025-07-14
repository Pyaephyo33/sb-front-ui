import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { utils, writeFile } from 'xlsx';

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
  Legend
);

// Mock envelope data with limits
const data = [
  { date: '2025-06', envelope: 'Groceries', amount: 150, limit: 180 },
  { date: '2025-06', envelope: 'Transport', amount: 90, limit: 100 },
  { date: '2025-06', envelope: 'Shopping', amount: 60, limit: 75 },
  { date: '2025-07', envelope: 'Groceries', amount: 200, limit: 180 },
  { date: '2025-07', envelope: 'Transport', amount: 120, limit: 100 },
  { date: '2025-07', envelope: 'Shopping', amount: 80, limit: 75 },
];

const ExpenseTracking = () => {
  const navigate = useNavigate();
  const [chartType, setChartType] = useState('line');
  const [timeRange, setTimeRange] = useState('monthly');

  const periods = [...new Set(data.map(d => d.date))];
  const envelopes = [...new Set(data.map(d => d.envelope))];

  // Datasets (main + limit lines)
  const datasets = envelopes.map(env => {
    const envData = data.filter(d => d.envelope === env);
    const baseColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    return [
      {
        label: `${env} - Actual`,
        data: periods.map(p => {
          const entry = envData.find(d => d.date === p);
          return entry ? entry.amount : 0;
        }),
        backgroundColor: baseColor,
        borderColor: baseColor,
        tension: 0.4,
        borderWidth: 2,
        fill: false,
      },
      {
        label: `${env} - Limit`,
        data: periods.map(p => {
          const entry = envData.find(d => d.date === p);
          return entry ? entry.limit : 0;
        }),
        borderDash: [6, 4],
        borderColor: '#dc2626',
        backgroundColor: 'transparent',
        pointRadius: 0,
        borderWidth: 1.5,
        tension: 0.4,
        fill: false,
      }
    ];
  }).flat();

  const doughnutDataset = {
    labels: envelopes,
    datasets: [
      {
        label: 'Total by Envelope',
        data: envelopes.map(env =>
          data.filter(d => d.envelope === env).reduce((sum, d) => sum + d.amount, 0)
        ),
        backgroundColor: envelopes.map(() => `hsl(${Math.random() * 360}, 70%, 70%)`),
        borderWidth: 2,
        borderColor: 'white',
      }
    ]
  };

  const chartData = {
    labels: periods,
    datasets: chartType === 'doughnut' ? doughnutDataset.datasets : datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      title: {
        display: true,
        text: `${timeRange === 'monthly' ? 'Monthly' : 'Weekly'} Expense Overview`,
        font: { size: 18, weight: 'bold' },
        color: '#1f2937'
      }
    },
    scales: chartType === 'doughnut' ? {} : {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => `£${value}`,
          color: '#6b7280'
        }
      },
      x: {
        ticks: { color: '#6b7280' }
      }
    }
  };

  const topEnv = data.reduce((acc, d) => {
    acc[d.envelope] = (acc[d.envelope] || 0) + d.amount;
    return acc;
  }, {});
  const topSpending = Object.entries(topEnv).sort((a, b) => b[1] - a[1])[0];

  const handleExport = () => {
    const sheet = data.map(d => ({
      Date: d.date,
      Envelope: d.envelope,
      Amount: d.amount,
      Limit: d.limit
    }));
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(sheet);
    utils.book_append_sheet(wb, ws, 'ExpenseReport');
    writeFile(wb, 'Expense_Tracking_Report.xlsx');
  };

  return (
    <Container>
      <section className="py-6 px-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Expense Tracking</h2>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg shadow hover:shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              ← Back
            </button>
          </div>

          {/* Description */}
          <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
            This dashboard helps you analyze expenses by envelope over time. Switch between views and export reports for budgeting decisions.
          </p>

          {/* Controls */}
          <div className="flex flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700 dark:text-gray-300">Chart:</label>
              {['line', 'bar', 'doughnut'].map(type => (
                <button
                  key={type}
                  onClick={() => setChartType(type)}
                  className={`px-3 py-1 rounded-md text-sm shadow ${
                    chartType === type ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700 dark:text-gray-300">Time:</label>
              {['monthly', 'weekly'].map(range => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded-md text-sm shadow ${
                    timeRange === range ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
            <button
              onClick={handleExport}
              className="ml-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow text-sm"
            >
              ⬇ Export Excel
            </button>
          </div>

          {/* Chart */}
          <div className="h-[360px] md:h-[400px] mb-8">
            {chartType === 'bar' ? (
              <Bar data={chartData} options={options} />
            ) : chartType === 'doughnut' ? (
              <Doughnut data={doughnutDataset} options={options} />
            ) : (
              <Line data={chartData} options={options} />
            )}
          </div>

          {/* Recommendation */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Insights & Suggestions</h3>
          <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-5 py-4 rounded-lg shadow-md text-sm">
            <p className="mb-2">
              <strong>{topSpending[0]}</strong> had the highest spending of <strong>£{topSpending[1]}</strong>. Consider:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Setting a clear monthly limit for this envelope.</li>
              <li>Reviewing recurring purchases or patterns in that area.</li>
              <li>Exploring more affordable alternatives or promotions.</li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ExpenseTracking;
