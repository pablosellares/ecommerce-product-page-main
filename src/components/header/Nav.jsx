import { useState } from "react";

import iconMenu from "../../assets/icon-menu.svg";
import iconClose from "../../assets/icon-close.svg";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      {isMobileMenuOpen ? (
        <div className="nav-backdrop" onClick={toggleMobileMenu}></div>
      ) : (
        ""
      )}

      <div className="nav-container">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <img
            src={`${isMobileMenuOpen ? `${iconClose}` : `${iconMenu}`}`}
            alt=""
          />
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
