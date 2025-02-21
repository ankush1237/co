import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ showMenu, toggleMenu }) => {
  // Smooth scrolling function to scroll to specific sections
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close the mobile menu after clicking a link
    if (showMenu) {
      toggleMenu();
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleSmoothScroll('home')} 
            className="flex items-center"
            style={{ fontFamily: 'Joti One, sans-serif' }}
          >
            <span className="ml-2 text-3xl font-bold text-white">
              <span className="text-red-600">CONSO</span>NITE
            </span>
          </button>

          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden text-white z-50" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {showMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              style={{ fontFamily: 'Joti One, sans-serif' }} 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => handleSmoothScroll('home')}
            >
              Home
            </button>
            <button
              style={{ fontFamily: 'Joti One, sans-serif' }} 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => handleSmoothScroll('conso')}
            >
              CONSONITE
            </button>
            <button
              style={{ fontFamily: 'Joti One, sans-serif' }} 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => handleSmoothScroll('abt')}
            >
              Artist
            </button>
            <button
              style={{ fontFamily: 'Joti One, sans-serif' }} 
              className="text-white hover:text-red-500 transition-colors"
              onClick={() => handleSmoothScroll('con')}
            >
              Contact Us
            </button>
            <button
              style={{ fontFamily: 'Joti One, sans-serif' }} 
              onClick={() => handleSmoothScroll('form-section')}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-[75%] bg-black/90 h-screen transition-transform duration-300 md:hidden flex flex-col pt-20 px-8 text-white space-y-6`}
      >
        <button
          className="text-white hover:text-red-500 transition-colors"
          onClick={() => handleSmoothScroll('home')}
          style={{ fontFamily: 'Joti One, sans-serif' }}
        >
          Home
        </button>
        <button
          className="text-white hover:text-red-500 transition-colors"
          onClick={() => handleSmoothScroll('abt')}
          style={{ fontFamily: 'Joti One, sans-serif' }}
        >
          Artist
        </button>
        <button
          className="text-white hover:text-red-500 transition-colors"
          onClick={() => handleSmoothScroll('conso')}
          style={{ fontFamily: 'Joti One, sans-serif' }}
        >
          CONSONITE
        </button>
        <button
          className="text-white hover:text-red-500 transition-colors"
          onClick={() => handleSmoothScroll('con')}
          style={{ fontFamily: 'Joti One, sans-serif' }}
        >
          Contact Us
        </button>
        <button
          onClick={() => handleSmoothScroll('form-section')}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
          style={{ fontFamily: 'Joti One, sans-serif' }}
        >
          Book Now
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;