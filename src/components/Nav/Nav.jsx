import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
        <a className="nav__link" href="#about__id">About</a>
        <a className="nav__link" href="#contacts__id">Contacts</a>
        <a className="nav__link nav__tours" href="#">Tours</a>
    </nav>
  )
}

export default Nav;
