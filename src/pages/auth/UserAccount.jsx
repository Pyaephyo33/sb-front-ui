import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { ArrowLeft } from 'lucide-react';

const UserAccount = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    account_type: '',
    balance: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Created:', form);
    navigate('/settings');
  };

  return (
    <Container>

      <div className="flex justify-start px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6 w-full max-w-xl">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Create New Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Account Type</label>
              <select
                name="account_type"
                value={form.account_type}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Type</option>
                <option value="Cash Wallet">Cash Wallet</option>
                <option value="Bank Account">Bank Account</option>
                <option value="Savings Vault">Savings Vault</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Initial Balance</label>
              <input
                type="number"
                name="balance"
                value={form.balance}
                onChange={handleChange}
                placeholder="Enter balance"
                required
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-200"
              >
                Add Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default UserAccount;
