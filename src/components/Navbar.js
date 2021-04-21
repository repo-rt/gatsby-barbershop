import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav class="main-nav">
      <button class="main-nav__toggle">Open Menu</button>
      <div class="main-nav__wrapper">
        <ul class="main-nav__list site-list" role="menu">
          <li
            class="site-list__item site-list__item--active"
            aria-label="Home"
            role="presentation"
          >
            <Link to="/" role="menuitem">
              Home
            </Link>
          </li>
          <li class="site-list__item" role="presentation" aria-label="About">
            <Link to="/about" role="menuitem">
              About
            </Link>
          </li>
          <li class="site-list__item" role="presentation" aria-label="Services">
            <Link to="/services/services" role="menuitem">
              Services
            </Link>
          </li>
          <li class="site-list__item" role="presentation" aria-label="News">
            <Link to="/news" role="menuitem">
              News
            </Link>
          </li>
          <li class="site-list__item" role="presentation" aria-label="Gallery">
            <Link to="/gallery" role="menuitem">
              Gallery
            </Link>
          </li>
          <li class="site-list__item" role="presentation" aria-label="News">
            <Link to="/news">News</Link>
          </li>
          <li class="site-list__item" role="presentation" aria-label="Contacts">
            <Link to="/contact" role="menuitem">
              Contacts
            </Link>
          </li>
        </ul>
        <ul class="main-nav__list user-list">
          <li class="user-list__item" role="presentation" aria-label="Login">
            <Link to="/user/login" class="user-list__login" role="menuitem">
              Log In
            </Link>
          </li>
          <span>|</span>
          <li
            class="main-nav__list user-list"
            role="presentation"
            aria-label="Register"
          >
            <Link
              to="/user/register"
              class="user-list__register"
              role="menuitem"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
