import '@components/Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3 className="footer-logo text-l">Verde Brew Co.</h3>
          <p className="text-body footer-tagline">
            Sustainable Coffee, Made Simple
          </p>
        </div>

        <address className="footer-contact text-body">
          <p className="text-body">
            123 Greenway Ave, Silver Lake, <br /> Los Angeles, CA 90026
          </p>
          <a href="mailto:hello@verdebrew.co">hello@verdebrew.co</a>
          <a href="tel:+13235550198">(323) 555-0198</a>
        </address>

        <nav className="footer-links text-body">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-links text-body">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">X</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-body">
          Designed & Built by{' '}
          <a
            href="https://www.ryodgie.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit-link"
          >
            Ryodgie Barnatia
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
