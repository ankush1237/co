import React, { useEffect } from 'react';
import bg from '../assets/bg.mp4'; // Import the video file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  const handleScroll = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.3) contrast(1.2)' }} // Adjust brightness and contrast
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div data-aos="fade-up">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-center flex justify-center space-x-1"
            style={{ fontFamily: 'Joti One, sans-serif' }} // Apply the custom font to the entire CONSONITE text
          >
            {/* CONSO with stronger red glow */}
            {['C', 'O', 'N', 'S', 'O'].map((letter, index) => (
              <span
                key={index}
                className="relative cursor-pointer text-red-600 transition-transform transform group hover:scale-110 hover:text-shadow-red"
              >
                {letter}
              </span>
            ))}
            {/* NITE in white with lighter glow */}
            {['N', 'I', 'T', 'E'].map((letter, index) => (
              <span
                key={index}
                className="relative cursor-pointer text-white transition-transform transform group hover:scale-110 hover:text-shadow-white"
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit obcaecati iusto excepturi placeat asperiores eius ratione ab ipsum blanditiis atque harum quo quis vero soluta quos, impedit omnis fugiat reiciendis tempore dignissimos illum, sit doloribus veniam? Quibusdam perferendis fugiat, officia iste tempora temporibus voluptates?
          </p>
          <button
            onClick={handleScroll} // Handle click to scroll
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            data-aos="fade-up" // AOS animation for the button
            style={{ fontFamily: 'Joti One, sans-serif' }} 
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
