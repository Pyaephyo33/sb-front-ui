import React from 'react';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">

        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Let’s Chat.
          </h2>
          <p className="text-gray-600 text-lg">
            Want to collaborate, have feedback, or simply say hello? Drop me a message or connect with me on GitHub.
          </p>
          <a
            href="https://github.com/Pyaephyo33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-medium"
          >
            <Github className="w-6 h-6" /> github.com/Pyaephyo33
          </a>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-xl shadow-md p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-all duration-300 shadow hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Map */}
      <div className="max-w-6xl mx-auto mt-16 rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          title="Contact Map"
          className="w-full h-72 md:h-96"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12628.598312695176!2d-0.13368172540116028!3d51.509865050489955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3331e4bd8d%3A0x9eaa5b51e4deaa6f!2sLondon!5e0!3m2!1sen!2suk!4v1689287437382!5m2!1sen!2suk"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
