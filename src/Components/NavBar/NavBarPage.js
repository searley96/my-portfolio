import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";

function NavBarPage() {
  return (
    <>
      
      <nav className="navbar-container">
      <ScrollLink to="about" smooth={true} duration={500} className="about">
        Siv Earley
      </ScrollLink>
      <div className="nav-links">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="contact"
        >
          Contact
        </ScrollLink>
        <ScrollLink to="code" smooth={true} duration={500} className="code">
          Code
        </ScrollLink>
        <ScrollLink to="ux" smooth={true} duration={500} className="code">
          UX
        </ScrollLink>
        </div>
      </nav>
    </>
  );
}

export default NavBarPage;
