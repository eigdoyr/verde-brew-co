import heroBg from '@assets/hero-bg.webp'

function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-tagline">
          At Verde Brew Co., every cup tells a greener story — ethically sourced
          beans, eco-friendly practices, and a commitment to better mornings for
          you and the planet.
        </p>
      </div>

      <h1 className="hero-headline">
        A Greener Way <br /> to Start Your Day
      </h1>
    </section>
  )
}

export default Hero
