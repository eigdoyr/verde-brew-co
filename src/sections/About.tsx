import '@sections/About.css'
import { motion } from 'framer-motion'
import { fadeUp, scaleUp, slideInLeft } from '@utils/animations'

function About() {
  return (
    <section className="about section-padding" id="about">
      <motion.p
        className="text-l about-label"
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        A Coffee Shop Rooted in Sustainability
      </motion.p>

      <motion.h2
        className="text-xl about-wordmark"
        variants={scaleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        Verde Brew Co.
      </motion.h2>

      <motion.p
        className="text-body about-description"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        Verde Brew Co. was founded with a simple belief: coffee should taste
        good and do good. From compostable cups and zero-waste operations to
        partnering with fair-trade farmers, we&apos;re shaping a coffee culture
        where sustainability is the standard, not the exception.
      </motion.p>
    </section>
  )
}

export default About
