import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Nav.css';

function Nav() {
  const [header, setHeader] = useState('transperent');

  const scrolEvent = () => {
    if (window.scrollY < 80) {
      return setHeader('transperent');
    } else if (window.scrollY > 80) {
      return setHeader('header');
    }
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrolEvent);
    return () => window.removeEventListener('scroll', scrolEvent);
  }, []);

  return (
    <header className={header}>
      <h3>BOGI</h3>
      <nav ref={navRef}>
        <a href='/#'>Home</a>
        <a href='/#about'>About Me</a>
        <a href='/#certificate'>Certificate's</a>
        <a href='/#projects'>Projects</a>
        <a href='/#contact'>Contact</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;
