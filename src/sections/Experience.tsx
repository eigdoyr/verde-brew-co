import '@sections/Experience.css'
import { motion } from 'framer-motion'
import { fadeUp, slideInLeft, slideInRight } from '@utils/animations'
import exp1 from '@assets/experience/experience-1.webp'
import exp2 from '@assets/experience/experience-2.webp'

function Experience() {
  return (
    <section className="experience section-padding" id="experience">
      <motion.h2
        className="text-l experience-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        More Than Coffee. <br /> A Lifestyle
      </motion.h2>

      <div className="experience-images">
        <motion.img
          className="experience-img-main"
          src={exp1}
          alt="Verde Brew Co. interior"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.img
          className="experience-img-secondary"
          src={exp2}
          alt="Friends enjoying coffee"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.p
          className="text-body experience-desc"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Step into Verde Brew Co. and experience a space designed to slow you
          down. Natural light, recycled interiors, and community-centered events
          make us more than just a coffee stop — we&apos;re a hub for conscious
          living.
        </motion.p>
      </div>
    </section>
  )
}

export default Experience
