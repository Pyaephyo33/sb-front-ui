import React from 'react';
import {
  PieChart,
  CalendarCheck,
  TrendingUp,
  PoundSterlingIcon,
  BarChart3,
  LineChart,
} from 'lucide-react';

const highlights = [
  {
    icon: <PoundSterlingIcon className="w-8 h-8 text-green-500" />,
    title: 'Track Every Expense',
    desc: 'Categorize spending automatically and keep control.',
  },
  {
    icon: <PieChart className="w-8 h-8 text-purple-500" />,
    title: 'Smart Budgeting',
    desc: 'Set limits & envelopes for needs, wants, savings.',
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-blue-500" />,
    title: 'Goal Reminders',
    desc: 'Stay on track with personalized savings goals.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    title: 'Insightful Reports',
    desc: 'Visual breakdowns and financial trends over time.',
  },
];

const pricingPlans = [
  {
    title: 'Open Source',
    price: 'Free',
    desc: 'Self-hosted. Community-driven. Full access to source code and core features.',
    features: ['Full source access', 'Basic budgeting tools', 'Community support'],
  },
  {
    title: 'Distribution',
    price: '£30/month',
    desc: 'Perfect for small financial teams and SaaS distribution. Easily deploy & customize.',
    features: ['All open source features', 'Custom branding', 'Email reporting', 'Deployment support'],
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    desc: 'Advanced solutions for financial institutions, analytics firms, and banks.',
    features: ['Dedicated support', 'Multi-org control', 'Custom APIs', 'Security compliance'],
  },
];

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center group">
    <span className="relative inline-block group-hover:text-blue-600 transition duration-300">
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
      {children}
    </span>
  </h2>
);

const Home = () => {
  return (
    <div className="transition-all duration-500">

      {/* Hero Section */}
      <section id='home' className="py-24 bg-gradient-to-r from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6 animate-fade-in-down">
            Welcome to <span className="text-blue-600 dark:text-blue-400">Smart Budgeting</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Your personal AI-powered self-financial planning and budget tracking assistant. Plan smarter. Save better.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Why Choose <span className="text-blue-600 dark:text-blue-400">Smart Budgeting?</span></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='how-it-works' className="py-24 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>How It <span className="text-blue-600 dark:text-blue-400">Works</span></SectionTitle>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
              <BarChart3 className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-800 dark:text-white">1. Input Your Data</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Manually or automatically sync your income, expenses, and financial goals.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
              <LineChart className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-800 dark:text-white">2. Real-Time Analysis</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Our engine categorizes and visualizes your spending trends live.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
              <TrendingUp className="w-10 h-10 text-orange-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-800 dark:text-white">3. Predict & Improve</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Get smart suggestions and projections for savings and future expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle>About <span className="text-blue-600 dark:text-blue-400">SB</span></SectionTitle>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Smart Budgeting (SB) is a modern, intelligent financial companion built for individuals and organizations
            to manage their money efficiently. Our system provides AI-powered insights, dynamic visualizations,
            and budgeting tools that adapt to your lifestyle. Whether you're a student, a startup, or an enterprise,
            SB empowers you with clarity, foresight, and control over your finances.
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section id='demo' className="py-24 bg-gradient-to-r from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionTitle>See it in <span className="text-blue-600 dark:text-blue-400">Action</span></SectionTitle>
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 w-full max-w-4xl mx-auto animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Live Demo Preview</h3>
            <div className="border border-dashed border-blue-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
              <p className="text-gray-700 dark:text-gray-300 italic mb-2">💰 Setting your savings goal...</p>
              <p className="text-gray-700 dark:text-gray-300 italic mb-2">📊 Tracking expenses in real time...</p>
              <p className="text-gray-700 dark:text-gray-300 italic">📈 Generating insights & forecasts...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionTitle>Flexible <span className="text-blue-600 dark:text-blue-400">Pricing</span> for Every Stage</SectionTitle>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg animate-fade-in-up">
            Whether you're starting out solo or scaling across organizations, Smart Budgeting supports you.
            Open source for developers, distribution-ready for startups, and full enterprise support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left animate-fade-in-up"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{plan.title}</h3>
                <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">{plan.price}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{plan.desc}</p>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                  {plan.price === 'Free' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
