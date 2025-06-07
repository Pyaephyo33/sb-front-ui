import React from "react";
import { Link } from "react-router-dom";
import { Pencil, PlusCircle, Trash } from "lucide-react";
import Container from "../../components/Container";

const dummyGoals = [
  {
    id: 1,
    title: "Emergency Fund",
    targetAmount: 5000,
    currentSaved: 1200,
    targetDate: "2025-12-31",
  },
  {
    id: 2,
    title: "Vacation in Japan",
    targetAmount: 3000,
    currentSaved: 850,
    targetDate: "2026-06-15",
  },
  {
    id: 3,
    title: "Gaming Desktop",
    targetAmount: 3000,
    currentSaved: 850,
    targetDate: "2026-06-15",
  },
  {
    id: 4,
    title: "Hoodie",
    targetAmount: 3000,
    currentSaved: 850,
    targetDate: "2026-06-15",
  },
  {
    id: 5,
    title: "Shoe",
    targetAmount: 3000,
    currentSaved: 850,
    targetDate: "2026-06-15",
  },
];

const ListSavingsGoals = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Savings Goals</h1>
        <Link
          to="/savings-goals/create"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-200"
        >
          <PlusCircle size={20} /> Create Goal
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyGoals.map((goal) => (
          <div
            key={goal.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {goal.title}
              </h2>
              <div className="flex gap-2">
                <button className="text-gray-500 hover:text-blue-600">
                  <Pencil size={18} />
                </button>
                <button className="text-gray-500 hover:text-red-600">
                  <Trash size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold text-gray-500 dark:text-gray-400">Target:</span>{" "}
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  ${goal.targetAmount.toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-500 dark:text-gray-400">Saved:</span>{" "}
                <span className="text-green-600 dark:text-green-400 font-medium">
                  ${goal.currentSaved.toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-500 dark:text-gray-400">Target Date:</span>{" "}
                <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                  {goal.targetDate}
                </span>
              </p>
            </div>


            <div className="mt-4 h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-300"
                style={{
                  width: `${(goal.currentSaved / goal.targetAmount) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ListSavingsGoals;
