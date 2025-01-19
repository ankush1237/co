import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutArtist from './components/AboutArtist';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  const [showMenu, setShowMenu] = useState(false); // For mobile menu state

  // Toggle menu visibility on small screens
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="min-h-screen bg-red-950">
      <Navbar showMenu={showMenu} toggleMenu={toggleMenu} />
      <Hero />
      <AboutArtist />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
