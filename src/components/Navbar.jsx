import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1><Link to="/">FLYAway-Realms</Link></h1>
      </div>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery}
          onChange={handleSearchChange} 
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flights">Flights</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
