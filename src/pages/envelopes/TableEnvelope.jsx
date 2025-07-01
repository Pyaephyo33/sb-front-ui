import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, PlusCircle, Trash2, Search } from 'lucide-react';
import Container from '../../components/Container';

const sampleData = [
  { id: 1, name: 'Groceries', budgeted_amount: 300, cycle_type: 'monthly' },
  { id: 2, name: 'Utilities', budgeted_amount: 150, cycle_type: 'monthly' },
  { id: 3, name: 'Entertainment', budgeted_amount: 120, cycle_type: 'monthly' },
  { id: 4, name: 'Transport', budgeted_amount: 80, cycle_type: 'weekly' },
];

const TableEnvelope = () => {
  const [search, setSearch] = useState('');

  const filteredData = sampleData.filter(env =>
    env.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <section className="py-4">
        <div className="w-full xl:w-11/12 mb-6 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full shadow-xl rounded-lg">
            
            {/* Header */}
            <div className="rounded-t px-4 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between md:items-center gap-4">
              <h3 className="font-semibold text-base text-gray-800 dark:text-white">
                Envelope List
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
                {/* Search Box */}
                <div className="relative w-full md:w-64">
                  <Search className="absolute top-3 left-3 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search envelopes..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300"
                  />
                </div>

                {/* Create Button */}
                <Link
                  to="/envelopes/create"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase rounded hover:bg-blue-700 transition-all duration-150"
                >
                  <PlusCircle className="w-4 h-4" /> Create
                </Link>
              </div>
            </div>

            {/* Envelope Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {filteredData.length > 0 ? (
                filteredData.map((env) => (
                  <div
                    key={env.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                        {env.name}
                      </h2>
                      <div className="flex gap-2">
                        <Link
                          to={`/envelopes/edit/${env.id}`}
                          className="text-blue-500 hover:text-blue-700"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button className="text-red-500 hover:text-red-700" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="font-semibold text-gray-500 dark:text-gray-400">Budgeted:</span>{' '}
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          £{env.budgeted_amount.toLocaleString()}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold text-gray-500 dark:text-gray-400">Cycle:</span>{' '}
                        <span className="text-yellow-600 dark:text-yellow-400 font-medium capitalize">
                          {env.cycle_type}
                        </span>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 dark:text-gray-400 italic">
                  No envelopes found.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </Container>
  );
};

export default TableEnvelope;
