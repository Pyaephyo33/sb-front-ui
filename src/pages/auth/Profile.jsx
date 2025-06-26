import React from 'react';
import Container from '../../components/Container';

const accounts = [
  {
    name: 'Cash Wallet',
    balance: 540,
    color: 'from-green-100 to-green-200 dark:from-green-800 dark:to-green-700',
  },
  {
    name: 'Bank Account',
    balance: 1290.5,
    color: 'from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700',
  },
  {
    name: 'Savings Vault',
    balance: 2050.25,
    color: 'from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700',
  },
];

const Profile = () => {
  const total = accounts.reduce((acc, a) => acc + a.balance, 0);
  const user = {
    name: 'John Doe',
    email: 'johndoe@email.com',
  };

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            👋 Hello, {user.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${acc.color} p-4 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1`}
            >
              <h3 className="text-sm font-medium text-gray-700 dark:text-white mb-1">{acc.name}</h3>
              <p className="text-xl font-bold text-gray-800 dark:text-white">£{acc.balance.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md text-center">
          <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Total Balance</h4>
          <p className="text-2xl font-extrabold text-green-600 dark:text-green-400">£{total.toFixed(2)}</p>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
