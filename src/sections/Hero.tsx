import '@sections/Hero.css'
import heroBg from '@assets/hero/hero-bg.webp'
import { motion } from 'framer-motion'
import { scaleUp, fadeUp, slideInLeft, slideInRight } from '@utils/animations'

function Hero() {
  return (
    <motion.section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      variants={scaleUp}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-body hero-tagline">
          At Verde Brew Co., every cup tells a greener story — ethically sourced
          beans, eco-friendly practices, and a commitment to better mornings for
          you and the planet.
        </p>
      </motion.div>

      <motion.h1
        className="text-xl hero-headline"
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="hero-line"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          A Greener Way
        </motion.span>
        <motion.span
          className="hero-line"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          to Start Your Day
        </motion.span>
      </motion.h1>
    </motion.section>
  )
}

export default Hero
