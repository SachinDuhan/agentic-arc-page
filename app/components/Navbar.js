"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
    handleLinkClick();
  };

  return (
    <nav
      id="navbar"
      className={scrolled ? "scrolled" : ""}
      style={
        scrolled
          ? {
              padding: "10px 0",
              background: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
            }
          : {}
      }
    >
      <div className="container">
        <div className="logo-container">
          <div className="logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/svit-logo.png" alt="SVIT Logo" className="svit-logo" />
          </div>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links${menuOpen ? " active" : ""}`}>
          <a href="#home" onClick={(e) => scrollTo(e, "#home")}>Home</a>
          <a href="#about" onClick={(e) => scrollTo(e, "#about")}>About</a>
          <a href="#vision" onClick={(e) => scrollTo(e, "#vision")}>Vision</a>
          <a href="#activities" onClick={(e) => scrollTo(e, "#activities")}>Activities</a>
          <a href="#team" onClick={(e) => scrollTo(e, "#team")}>Team</a>
          <a href="#register" className="btn btn-primary nav-btn" onClick={(e) => scrollTo(e, "#register")}>
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
