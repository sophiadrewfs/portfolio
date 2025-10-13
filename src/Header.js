import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Sophia Drewfs</h1>
      </div>
    </header>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience/Education</a></li>
            <li><a href="#projects">Personal Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
      </>
  );
}

export default Header;