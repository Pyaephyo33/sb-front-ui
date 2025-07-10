import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';

const CreateTransaction = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    amount: '',
    type: 'expense',
    payment_method: 'cash',
    date: '',
    notes: '',
    is_refunded: false,
  });

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setForm({ ...form, [name]: inputType === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating transaction:', form);
    navigate('/transactions');
  };

  return (
    <Container>
      <section className="py-6 px-4">
        <div className="max-w-2xl ml-0 md:ml-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Add New Transaction</h2>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">Amount (£)</label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 dark:text-gray-300">Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 dark:text-gray-300">Payment Method</label>
                <select
                  name="payment_method"
                  value={form.payment_method}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                  <option value="bank">Bank</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-300">Notes</label>
              <textarea
                name="notes"
                rows="3"
                value={form.notes}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_refunded"
                checked={form.is_refunded}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600"
              />
              <label className="text-sm text-gray-600 dark:text-gray-300">Refunded?</label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Submit Transaction
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default CreateTransaction;
