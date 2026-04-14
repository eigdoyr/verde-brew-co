function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo">
        Verde Brew Co.
      </a>

      <ul className="navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact" className="navbar-cta">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
