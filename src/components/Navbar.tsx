import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`navbar ${isDark ? 'navbar--dark' : 'navbar--light'}`}>
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
