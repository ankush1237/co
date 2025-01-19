import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-full'
      } h-screen w-[75%] bg-red-950 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex justify-between text-white flex-col`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Ankush Kulkarni</h1>
            <h1 className="text-sm text-red-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <button
                onClick={() => handleSmoothScroll('home')}
                className="text-white hover:text-red-500 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll('abt')}
                className="text-white hover:text-red-500 transition-colors"
              >
                About us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll('con')}
                className="text-white hover:text-red-500 transition-colors"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>&copy; 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
