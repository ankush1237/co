import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section id="con">
    <footer className="bg-black text-white py-8 mt-16"> {/* Added mt-16 for margin-top */}
      <div className="container mx-auto px-4 flex flex-wrap justify-around items-start max-w-7xl">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <img src="data:image/png;base64,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" alt="E-Cell Logo" className="max-w-[150px] h-auto mx-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700"
          style={{ fontFamily: 'Joti One, sans-serif' }} >CONSORTIUM'25</h3>
          <p className="text-sm">
            Consortium, the Annual<br />
            Entrepreneurship Summit<br />
            and Management Fest of<br />
            VNIT, Nagpur
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700"
          style={{ fontFamily: 'Joti One, sans-serif' }} >QUICK LINKS</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:underline">STARTUP CONCLAVE</a></li>
            <li><a href="#" className="hover:underline">STARTUP EXPO</a></li>
            <li><a href="#" className="hover:underline">MERCHANDISE</a></li>
            <li><a href="#" className="hover:underline">NEO</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-left">
          <h3 className="text-2xl font-bold mb-2 text-red-700"
          style={{ fontFamily: 'Joti One, sans-serif' }} >CONTACT US</h3>
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
          <h3 className="text-2xl font-bold mb-2 text-red-700"
          style={{ fontFamily: 'Joti One, sans-serif' }} >FOLLOW US</h3>
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
          <h3 className="text-2xl font-bold mb-2 text-red-700"
          style={{ fontFamily: 'Joti One, sans-serif' }} >VISIT US</h3>
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