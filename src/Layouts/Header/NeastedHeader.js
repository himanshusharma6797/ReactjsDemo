import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import searchIcon from '../../Assets/Svgs/icons8-search.svg'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function NeastedHeader() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
      <nav className="header">
        <Link to="/" className="logo">
          LOGO
        </Link>
        <nav ref={navRef} className='navv'>
          <Navbar />
          <div className='display-f-row-sb nav-search-btn'>
          <img src={searchIcon} className='filter-white' alt='' />
          <button className='navbar-button'>Enrolment</button>
          </div>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </>
  )
}