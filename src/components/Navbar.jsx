  
import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js';

const Navbar = () => {
  const [darkMode, setDarkMode, toggleDarkMode] = useDarkMode(false);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
