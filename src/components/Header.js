import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header class="page-header">
      <div class="page-header__wrapper">
        <Link to="/" class="page-header__logo">
          <img
            src=""
            alt="Gatsby Barbershop"
            className="page-header__logo-image"
            width="80"
            height="80"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
