import React from 'react'

const Nav_elements = () => {
  return (
<div className="navigation-elements">
  <span className="logo">
    <h1>Horizon Courts</h1>
  </span>

  <nav className="about-section">
    <a href="#about" className="about">About Us</a>
    <a href="#services">Services</a>
    <a href="#coaches">Coaches</a>
    <a href="#events">Events</a>
    <a href="#contact">Contacts</a>
  </nav>

  <button className="book-button">
    Book Now <i className="ri-arrow-right-up-long-line"></i>
  </button>
</div>

  )
}

export default Nav_elements