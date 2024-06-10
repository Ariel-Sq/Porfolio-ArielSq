import { useState, useEffect } from "react";
import "../styles/header.css";
import { NavRedes } from "./NavRedes";
import { NavSections } from "./NavSections";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="headerCont">
      <h1 className="tittle">Ariel Sq</h1>
      <nav className="navListSections">
        <NavSections />
      </nav>
      <nav className="navListRedes">
        <NavRedes />
      </nav>
      <div className="menuIcon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`fullScreenMenu ${menuOpen ? "active" : ""}`}>
        <nav className="navListSections">
          <NavSections />
        </nav>
        <nav className="navListRedes">
          <NavRedes />
        </nav>
      </div>
    </header>
  );
};
