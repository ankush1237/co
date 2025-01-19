import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section id="con">
    <footer className="bg-black text-white py-8 mt-16"> {/* Added mt-16 for margin-top */}
      <div className="container mx-auto px-4 flex flex-wrap justify-around items-start max-w-7xl">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <img src="" alt="E-Cell Logo" className="max-w-[150px] h-auto mx-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700">CONSORTIUM'23</h3>
          <p className="text-sm">
            Consortium, the Annual<br />
            Entrepreneurship Summit<br />
            and Management Fest of<br />
            VNIT, Nagpur
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700">QUICK LINKS</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:underline">STARTUP CONCLAVE</a></li>
            <li><a href="#" className="hover:underline">STARTUP EXPO</a></li>
            <li><a href="#" className="hover:underline">MERCHANDISE</a></li>
            <li><a href="#" className="hover:underline">NEO</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700">CONTACT US</h3>
          <p className="text-sm">
            For Queries & Communications:<br />
            <a href="mailto:team_ecell@vnit.ac.in" className="hover:underline">team_ecell@vnit.ac.in</a>
          </p>
          <p className="text-sm">
            For Association and Sponsorship:<br />
            <a href="mailto:corporateaffairs@ecellvnit.co.in" className="hover:underline">corporateaffairs@ecellvnit.co.in</a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700">FOLLOW US</h3>
          <ul className="text-sm flex flex-col space-y-4">
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700">VISIT US</h3>
          <p className="text-sm">
            E-Cell office, 1st Floor VNIT Canteen, Visvesvaraya National<br />
            Institute Of Technology, South Ambazari Road,<br />
            Abhyankar Nagar, Nagpur-440010
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">Copyright: <span className="font-bold text-blue-500">E-CELL VNIT</span></p>
      </div>
    </footer></section>
  );

};

export default Footer;