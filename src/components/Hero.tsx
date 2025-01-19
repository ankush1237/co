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
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }} // Darken the video for better visibility of text
      >
        <source
          src={bg} // Use the imported video reference
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-border-200">
            <span className="ml-2 text-5xl md:text-7xl lg:text-7xl font-bold text-white">
              <span className="text-red-700">CONSO</span>NITE
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit obcaecati iusto excepturi placeat asperiores eius ratione ab ipsum blanditiis atque harum quo quis vero soluta quos, impedit omnis fugiat reiciendis tempore dignissimos illum, sit doloribus veniam? Quibusdam perferendis fugiat, officia iste tempora temporibus voluptates?
          </p>
          <button
            onClick={handleScroll} // Handle click to scroll
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            data-aos="fade-up" // AOS animation for the button
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
