import React from 'react';
import { PieChart, CalendarCheck, TrendingUp, PoundSterlingIcon } from 'lucide-react';

const Home = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title & Subtitle */}
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6 animate-fade-in-down">
          Welcome to <span className="text-blue-600 dark:text-blue-400">Smart Budgeting</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
          Your personal AI-powered self-financial planning and budget tracking assistant. Plan smarter. Save better.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
          {[
            {
              icon: <PoundSterlingIcon className="w-8 h-8 text-green-500" />,
              title: "Track Every Expense",
              desc: "Categorize spending automatically and keep control.",
            },
            {
              icon: <PieChart className="w-8 h-8 text-purple-500" />,
              title: "Smart Budgeting",
              desc: "Set limits & envelopes for needs, wants, savings.",
            },
            {
              icon: <CalendarCheck className="w-8 h-8 text-blue-500" />,
              title: "Goal Reminders",
              desc: "Stay on track with personalized savings goals.",
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
              title: "Insightful Reports",
              desc: "Visual breakdowns and financial trends over time.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Demo Animation Box */}
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 w-full max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Live Demo Preview</h2>
          <div className="border border-dashed border-blue-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-300 italic mb-2">💰 Setting your savings goal...</p>
            <p className="text-gray-700 dark:text-gray-300 italic mb-2">📊 Tracking expenses in real time...</p>
            <p className="text-gray-700 dark:text-gray-300 italic">📈 Generating insights & forecasts...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
