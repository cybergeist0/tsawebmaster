import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link
import { DarkModeContext } from "../context/DarkModeContext";
import "../styles/Footer.css";

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <footer className="footer-container">
      <div className="footer-section footer-links">
        <h4>Links</h4>
        <p><Link to="/tsawebmaster/">Homepage</Link></p>
        <p><Link to="/tsawebmaster/menu">Menu</Link></p>
        <p><Link to="/tsawebmaster/approach">Our Approach</Link></p>
        <p><Link to="/tsawebmaster/contact">Contact</Link></p>
        <p><Link to="/tsawebmaster/references">References</Link></p>
      </div>
      <div className="footer-section footer-info">
        <h4>TSA tsawebmaster</h4>
        <p>Satej Gandre</p>
        <p>Independence HS</p>
        <p>Copyright © 2025</p>
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
