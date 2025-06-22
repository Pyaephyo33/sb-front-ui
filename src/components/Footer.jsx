import React from 'react';

const Footer = () => {
  return (
    <div className="text-gray-800">
      {/* Wave SVG Top */}
      <div className="relative -mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#000b76"  
            fillOpacity="1"
            d="M0,32L34.3,74.7C68.6,117,137,203,206,240C274.3,277,343,267,411,245.3C480,224,549,192,617,165.3C685.7,139,754,117,823,112C891.4,107,960,117,1029,138.7C1097.1,160,1166,192,1234,170.7C1302.9,149,1371,75,1406,37.3L1440,0L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-[#000b76] text-white shadow-inner px-6 pt-4 pb-6">
        <div className="max-w-screen-xl mx-auto sm:flex justify-between space-y-8 sm:space-y-0">
          {/* Menu */}
          <div className="sm:w-1/4">
            <h4 className="uppercase font-bold text-white mb-4 text-sm">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-indigo-300 transition">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-300 transition">Services</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">Products</a></li>
              <li><a href="#pricing" className="hover:text-indigo-300 transition">Pricing</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="sm:w-2/4 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white mb-4">SB</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Smart financial planning made simple and intuitive. We're here to empower your money management journey.
            </p>
          </div>

          {/* Contact */}
          <div className="sm:w-1/4">
            <h4 className="uppercase font-bold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-300 transition">Bristol, United Kingdom</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition">support@sb.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-500 mt-6 pt-4 text-sm text-center text-gray-300">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
          © {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
