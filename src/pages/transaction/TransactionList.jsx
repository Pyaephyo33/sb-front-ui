import React, { useState } from 'react';
import { Search, Eye, PlusCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

const transactions = [
  {
    id: 1, amount: 50.0, type: 'expense', payment_method: 'card',
    date: '2025-06-10', notes: 'Lunch with team', is_refunded: false,
    account_id: 101, envelope_id: 201, category_id: 301, goal_id: null,
  },
  {
    id: 2, amount: 120.0, type: 'income', payment_method: 'bank',
    date: '2025-06-08', notes: 'Freelance payment', is_refunded: false,
    account_id: 102, envelope_id: 202, category_id: 302, goal_id: null,
  },
  {
    id: 3, amount: 30.0, type: 'expense', payment_method: 'cash',
    date: '2025-06-05', notes: 'Book Refund', is_refunded: true,
    account_id: 103, envelope_id: 203, category_id: 303, goal_id: 401,
  },
];

const TransactionList = () => {
  const [search, setSearch] = useState('');
  const [selectedTx, setSelectedTx] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const filtered = transactions.filter(tx =>
    tx.notes.toLowerCase().includes(search.toLowerCase()) &&
    (filterType === 'all' || tx.type === filterType)
  );

  return (
    <Container>
      <section className="py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Transaction History</h2>
          {/* <Link
            to="/transactions/create"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition text-sm font-medium"
          >
            <PlusCircle className="w-5 h-5" strokeWidth={2} />
            <span>New Transaction</span>
          </Link> */}
          <div className="flex gap-2">
          <Link
            to="/transactions/create"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition text-sm font-medium"
          >
            <PlusCircle className="w-5 h-5" strokeWidth={2} />
            <span>New Transaction</span>
          </Link>
          <Link
            to="/expense-tracking"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md hover:shadow-lg transition text-sm font-medium"
          >
            📊 <span>Expense Tracking</span>
          </Link>
        </div>

        </div>
        

        {/* Search and Filter */}
        <div className="px-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by notes..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-lg text-sm transition shadow ${filterType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('income')}
              className={`px-4 py-2 rounded-lg text-sm transition shadow ${filterType === 'income' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              Income
            </button>
            <button
              onClick={() => setFilterType('expense')}
              className={`px-4 py-2 rounded-lg text-sm transition shadow ${filterType === 'expense' ? 'bg-red-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Transaction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
          {filtered.map((tx) => (
            <div
              key={tx.id}
              className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  £{tx.amount.toFixed(2)}
                </h3>
                <button
                  onClick={() => setSelectedTx(tx)}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  title="View Details"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">{tx.type}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tx.date}</p>
              <p className="text-xs mt-2 text-gray-500 italic dark:text-gray-400">{tx.notes}</p>
              {tx.is_refunded && (
                <span className="inline-block mt-3 px-3 py-1 text-xs bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-white rounded-full">
                  Refunded
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedTx && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-xl w-full relative animate-fadeIn">
              <button
                onClick={() => setSelectedTx(null)}
                className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition"
              >
                <XCircle className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Transaction Details</h2>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>ID:</strong> {selectedTx.id}</p>
                <p><strong>Amount:</strong> £{selectedTx.amount.toFixed(2)}</p>
                <p><strong>Type:</strong> {selectedTx.type}</p>
                <p><strong>Payment Method:</strong> {selectedTx.payment_method}</p>
                <p><strong>Date:</strong> {selectedTx.date}</p>
                <p><strong>Notes:</strong> {selectedTx.notes}</p>
                <p><strong>Account ID:</strong> {selectedTx.account_id}</p>
                <p><strong>Envelope ID:</strong> {selectedTx.envelope_id}</p>
                <p><strong>Category ID:</strong> {selectedTx.category_id}</p>
                <p><strong>Goal ID:</strong> {selectedTx.goal_id || 'N/A'}</p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span className={selectedTx.is_refunded ? 'text-yellow-600 dark:text-yellow-400 font-medium' : 'text-green-600 dark:text-green-400 font-medium'}>
                    {selectedTx.is_refunded ? 'Refunded' : 'Completed'}
                  </span>
                </p>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedTx(null)}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </Container>
  );
};

export default TransactionList;
