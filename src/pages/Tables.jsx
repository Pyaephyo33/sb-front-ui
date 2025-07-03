import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Pencil, Trash2, PlusCircle } from 'lucide-react'
import Container from '../components/Container'

const sampleData = [
  {id: 1, name: 'Bus Ticket', type: 'Transportation'},
  {id: 2, name: 'Electricity Bill', type: 'Utilities'},
  {id: 3, name: 'Netflix', type: 'Entertainment'},
];


const Tables = () => {
  const [query, setQuery] = useState('');
  
  const filtered = sampleData.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <Container>
      <section className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Category List</h1>
          <Link
            to="#"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition duration-200"
          >
          <PlusCircle className='w-4 h-4' /> Create Category
        </Link>
        </div>

        <div className="mb-6">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search categories...' className='w-full max-w-sm px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition' />
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full min-w-[500px] table-auto text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold">ID</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Type</th>
                <th className="px-6 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-purple-600 dark:text-purple-400 font-semibold">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex gap-3">
                        <Link to='#' className="text-blue-600 hover:text-blue-800">
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white dark:bg-gray-800">
                  <td colSpan="4" className="px-6 py-6 text-center text-gray-500 dark:text-gray-400">
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  )
}

export default Tables
