import React from 'react';
import { Link } from 'react-router-dom';
import { Pencil, PlusCircle, Trash2 } from 'lucide-react';
import Container from '../../components/Container';

const sampleData = [
  { id: 1, name: 'Groceries', budgeted_amount: 300, cycle_type: 'monthly' },
  { id: 2, name: 'Utilities', budgeted_amount: 150, cycle_type: 'monthly' }
];

const TableEnvelope = () => {
  return (
    <Container>
      <section className="py-4">
        <div className="w-full xl:w-11/12 mb-6 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full shadow-xl rounded-lg">
            <div className="rounded-t mb-0 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-between">
                <h3 className="font-semibold text-base text-gray-800 dark:text-white">Envelope List</h3>
                <Link
                  to='/envelopes/create'
                  className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase rounded hover:bg-blue-700 transition-all duration-150'
                >
                  <PlusCircle className='w-4 h-4' /> Create
                </Link>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 dark:text-gray-300 uppercase border-b border-gray-200 dark:border-gray-600">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 dark:text-gray-300 uppercase border-b border-gray-200 dark:border-gray-600">
                      Budgeted Amount
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 dark:text-gray-300 uppercase border-b border-gray-200 dark:border-gray-600">
                      Cycle Type
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-left text-gray-600 dark:text-gray-300 uppercase border-b border-gray-200 dark:border-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {sampleData.map((env) => (
                    <tr key={env.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                      <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white">
                        {env.name}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                        ${env.budgeted_amount}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                        {env.cycle_type}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                        <div className="flex space-x-3">
                          <Link
                            to={`/envelopes/edit/${env.id}`}
                            className="text-blue-300 hover:text-blue-600 inline-flex items-center"
                          >
                            <Pencil className='w-4 h-4 mr-1' /> Edit
                          </Link>
                          <button className='text-red-300 hover:text-red-600 inline-flex items-center'>
                            <Trash2 className='w-4 h-4 mr-1' /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TableEnvelope;
