import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    affiliation: 'vnit',
    idType: 'vnit-id',
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const points = [];
    for (let i = 0; i < 80; i++) {
      for (let j = 0; j < 30; j++) {
        points.push({ x: i * 30 - 600, y: j * 30 });
      }
    }
    setGrid(points);

    AOS.init({
      offset: 10,
      duration: 10,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('form-section').getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    document.getElementById('form-section').addEventListener('mousemove', handleMouseMove);
    return () => {
      document.getElementById('form-section')?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form Submitted Successfully!');
  };

  return (
    <section id="form-section" className="min-h-screen flex items-center justify-center bg-red-950 relative overflow-hidden">
      {/* Grid Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {grid.map((point, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-red-500/30"
            style={{
              left: point.x,
              top: point.y,
            }}
            animate={{
              scale: [
                1,
                ((Math.abs(mousePosition.x - point.x) ** 2 + Math.abs(mousePosition.y - point.y) ** 2) < 10000) ? 2 : 1
              ],
              opacity: [
                0.3,
                ((Math.abs(mousePosition.x - point.x) ** 2 + Math.abs(mousePosition.y - point.y) ** 2) < 10000) ? 0.8 : 0.3
              ],
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Form */}
      <div
        className="bg-red-900 text-white p-8 rounded-lg shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-2xl relative z-10"
        data-aos="fade-up"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center"
        style={{ fontFamily: 'Joti One, sans-serif' }} >
          BOOK NOW
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium text-red-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 sm:p-3 border border-red-600 rounded-md bg-red-800 text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-red-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 sm:p-3 border border-red-600 rounded-md bg-red-800 text-white"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm sm:text-base font-medium text-red-300"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-2 sm:p-3 border border-red-600 rounded-md bg-red-800 text-white"
              required
            />
          </div>

          {/* Affiliation */}
          <div>
            <label
              htmlFor="affiliation"
              className="block text-sm sm:text-base font-medium text-red-300"
            >
              Affiliation
            </label>
            <select
              id="affiliation"
              name="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-red-600 rounded-md bg-red-800 text-white"
            >
              <option value="vnit">VNIT</option>
              <option value="non-vnit">Non-VNIT</option>
            </select>
          </div>

          {/* ID Type */}
          <div>
            <label
              htmlFor="idType"
              className="block text-sm sm:text-base font-medium text-red-300"
            >
              ID Type
            </label>
            <select
              id="idType"
              name="idType"
              value={formData.idType}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-red-600 rounded-md bg-red-800 text-white"
            >
              <option value="vnit-id">VNIT ID</option>
              <option value="aadharcard">Aadhar Card</option>
              <option value="pancard">PAN Card</option>
              <option value="passport">Passport</option>
              <option value="driving-license">Driving License</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
          style={{ fontFamily: 'Joti One, sans-serif' }} 
            type="submit"
            className="bg-red-600 text-white py-3 px-6 sm:py-3 sm:px-8 rounded-md hover:bg-red-700 transition-colors"
          >
            Submit
          </button>
          <button
          style={{ fontFamily: 'Joti One, sans-serif' }} 
            type="payment"
            className="bg-red-600 text-white py-3 px-6 sm:py-3 sm:px-8 rounded-md hover:bg-red-700 transition-colors"
          >
            Pay here
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
