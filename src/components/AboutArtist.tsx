import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Music, Mic, Award, Users } from 'lucide-react';

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
        <h2 className="text-4xl font-bold text-white text-center mb-16" data-aos="fade-up">
          About Artist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Artist Image */}
          <div className="relative" data-aos="fade-right">
            <img
              src="https://media.gettyimages.com/id/919297480/vector/red-rubber-stamp-icon-on-transparent-background.jpg?s=612x612&w=gi&k=20&c=xlXUNKpGREXGgNVVTGm0ziQot9CLp--vhD27GbMKENU="
              alt="Artist"
              className="rounded-lg shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-900 p-4 rounded-lg shadow-xl">
              <div className="text-white text-center">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Artist Info */}
          <div className="space-y-8">
            <div className="text-white space-y-4" data-aos="fade-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-red-400">Professional Artist & Music Producer</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                With over a decade of experience in music production and performance,
                our artist has collaborated with industry leaders and created
                chart-topping hits that resonate with audiences worldwide.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-red-900/50 p-6 rounded-lg" data-aos="zoom-in">
                <Music className="text-red-400 w-8 h-8 mb-3" />
                <h4 className="text-white font-semibold mb-2">200+ Tracks</h4>
                <p className="text-gray-300 text-sm">Original productions and collaborations</p>
              </div>

              <div className="bg-red-900/50 p-6 rounded-lg" data-aos="zoom-in">
                <Mic className="text-red-400 w-8 h-8 mb-3" />
                <h4 className="text-white font-semibold mb-2">Live Shows</h4>
                <p className="text-gray-300 text-sm">Regular performances at major venues</p>
              </div>

              <div className="bg-red-900/50 p-6 rounded-lg" data-aos="zoom-in">
                <Award className="text-red-400 w-8 h-8 mb-3" />
                <h4 className="text-white font-semibold mb-2">Awards</h4>
                <p className="text-gray-300 text-sm">Multiple industry recognitions</p>
              </div>

              <div className="bg-red-900/50 p-6 rounded-lg" data-aos="zoom-in">
                <Users className="text-red-400 w-8 h-8 mb-3" />
                <h4 className="text-white font-semibold mb-2">Mentorship</h4>
                <p className="text-gray-300 text-sm">Guiding the next generation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArtist;
