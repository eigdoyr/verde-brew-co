import '@components/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo text-body">
        Verde Brew Co.
      </a>

      <ul className="navbar-links">
        <li>
          <a href="#about" className="text-body">
            About
          </a>
        </li>
        <li>
          <a href="#menu" className="text-body">
            Menu
          </a>
        </li>
        <li>
          <a href="#experience" className="text-body">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-cta text-body">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
