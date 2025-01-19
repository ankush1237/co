import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Conso = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing effect
    });
  }, []);

  return (
    <section id="conso" className="min-h-screen bg-red-950 py-20 px-4 border-red-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
          {/* About Conso Image */}
          <div className="relative" data-aos="fade-right">
            <img
              src="https://media.gettyimages.com/id/919297480/vector/red-rubber-stamp-icon-on-transparent-background.jpg?s=612x612&w=gi&k=20&c=xlXUNKpGREXGgNVVTGm0ziQot9CLp--vhD27GbMKENU="
              alt="Artist"
              className="rounded-lg shadow-2xl w-full max-w-[500px] md:max-w-[600px] object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="text-white md:w-1/2" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-center flex justify-center space-x-1"
          style={{ fontFamily: 'Joti One, sans-serif' }} >
            {/* CONSO with stronger red glow */}
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
          </h2>
            <p className="text-2xl md:text-3xl font-semibold text-red-100 items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto explicabo error aperiam! Incidunt temporibus ea officiis recusandae repudiandae asperiores voluptatem, dolor omnis optio atque quisquam facere, earum quos reiciendis in fugiat voluptates repellat? Harum velit repellat sapiente cum dolor? Cumque, quam iure dignissimos cum, quo eaque enim modi quibusdam laboriosam eum ipsum incidunt tempora deserunt omnis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conso;
