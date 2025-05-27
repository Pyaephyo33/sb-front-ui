import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import Container from '../../components/Container';

const EditEnvelope = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', budgeted_amount: '', cycle_type: 'monthly' });

  useEffect(() => {
    const mockData = { name: 'Utilities', budgeted_amount: 150, cycle_type: 'monthly' };
    setForm(mockData);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Envelope ${id} Updated:`, form);
    navigate('/envelopes');
  };

  return (
    <Container>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6 w-full max-w-xl ml-0 md:ml-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <Pencil className="w-5 h-5" /> Edit Envelope
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Budgeted Amount</label>
            <input
              name="budgeted_amount"
              type="number"
              value={form.budgeted_amount}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Cycle Type</label>
            <select
              name="cycle_type"
              value={form.cycle_type}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/envelopes')}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-5 py-2 rounded-lg transition duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default EditEnvelope;
