import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavbarPages = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar scrolled">
      <div className="navbar-container">
        <Link to="/tsawebmaster/" className="navbar-logo">
        Floraire
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/tsawebmaster/" className="nav-links" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tsawebmaster/menu" className="nav-links" onClick={() => setMenuOpen(false)}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tsawebmaster/approach" className="nav-links" onClick={() => setMenuOpen(false)}>
              Our Approach
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tsawebmaster/contact" className="nav-links" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tsawebmaster/references" className="nav-links" onClick={() => setMenuOpen(false)}>
              References
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarPages;
