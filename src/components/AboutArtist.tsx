import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutArtist = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing effect
    });
  }, []);

  return (
    <section id="abt" className="min-h-screen bg-red-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16" data-aos="fade-up"
        style={{ fontFamily: 'Joti One, sans-serif' }} >
          About Artist
        </h2>

        <div className="flex flex-col justify-center items-center min-h-[400px] md:min-h-[500px] gap-4">
          {/* Artist Image */}
          <div className="relative" data-aos="fade-right">
            <img
              src="https://media.gettyimages.com/id/919297480/vector/red-rubber-stamp-icon-on-transparent-background.jpg?s=612x612&w=gi&k=20&c=xlXUNKpGREXGgNVVTGm0ziQot9CLp--vhD27GbMKENU="
              alt="Artist"
              className="rounded-lg shadow-2xl w-full max-w-md object-cover"
            />
          </div>
          <div>
            <h1 className=' text-6xl font-bold text-red-100'
            style={{ fontFamily: 'Joti One, sans-serif' }} >
              COMING SOON
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArtist;
