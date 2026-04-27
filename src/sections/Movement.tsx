import '@sections/Movement.css'
import { motion } from 'framer-motion'
import { fadeUp, slideInLeft, fadeIn } from '@utils/animations'
import movement1 from '@assets/movement/movement-1.webp'

function Movement() {
  return (
    <section className="movement section-padding" id="contact">
      <div className="movement-content">
        <motion.h2
          className="text-xl movement-heading"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Be Part of the Movement
        </motion.h2>

        <div className="movement-right">
          <motion.p
            className="text-body movement-desc"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Good coffee should never cost the Earth. Join our community of
            eco-conscious coffee lovers and be the first to know about new
            brews, events, and sustainability initiatives
          </motion.p>

          <motion.img
            loading="lazy"
            className="movement-img"
            src={movement1}
            alt="Community of coffee lovers"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  )
}

export default Movement
