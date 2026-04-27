import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@utils/animations'
import './Navbar.css'

function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

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

  const handleLinkClick = () => setIsOpen(false)

  return (
    <motion.nav
      className={`navbar ${isDark ? 'navbar--dark' : 'navbar--light'}`}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <a href="#hero" className="navbar-logo">
        Verde Brew Co.
      </a>

      <ul className={`navbar-links ${isOpen ? 'navbar-links--open' : ''}`}>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#menu" onClick={handleLinkClick}>
            Menu
          </a>
        </li>
        <li>
          <a href="#experience" onClick={handleLinkClick}>
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-cta" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>

      <button
        className={`navbar-hamburger ${isOpen ? 'navbar-hamburger--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </motion.nav>
  )
}

export default Navbar
