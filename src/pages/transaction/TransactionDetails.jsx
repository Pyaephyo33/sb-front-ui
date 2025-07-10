import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { XCircle } from 'lucide-react';

const mockTransaction = {
  id: 1,
  amount: 50,
  type: 'expense',
  payment_method: 'card',
  date: '2025-06-10',
  notes: 'Team Lunch',
  is_refunded: true,
  account_id: 101,
  envelope_id: 201,
  category_id: 301,
  goal_id: null,
};

const TransactionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tx = mockTransaction;

  return (
    <Container>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-xl w-full relative animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => navigate('/transactions')}
            className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <XCircle className="w-6 h-6" />
          </button>

          {/* Header */}
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Transaction Details</h2>

          {/* Details */}
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>ID:</strong> {tx.id}</p>
            <p><strong>Amount:</strong> £{tx.amount.toFixed(2)}</p>
            <p><strong>Type:</strong> {tx.type}</p>
            <p><strong>Payment Method:</strong> {tx.payment_method}</p>
            <p><strong>Date:</strong> {tx.date}</p>
            <p><strong>Notes:</strong> {tx.notes}</p>
            <p><strong>Account ID:</strong> {tx.account_id}</p>
            <p><strong>Envelope ID:</strong> {tx.envelope_id}</p>
            <p><strong>Category ID:</strong> {tx.category_id}</p>
            <p><strong>Goal ID:</strong> {tx.goal_id || 'N/A'}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span className={tx.is_refunded ? 'text-yellow-600 dark:text-yellow-400 font-medium' : 'text-green-600 dark:text-green-400 font-medium'}>
                {tx.is_refunded ? 'Refunded' : 'Completed'}
              </span>
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-6 text-right">
            <button
              onClick={() => navigate('/transactions')}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TransactionDetails;
