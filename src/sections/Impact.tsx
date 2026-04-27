import '@sections/Impact.css'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '@utils/animations'
import impact1 from '@assets/impact/impact-1.webp'
import impact2 from '@assets/impact/impact-2.webp'
import impact3 from '@assets/impact/impact-3.webp'
import impact4 from '@assets/impact/impact-4.webp'

function Impact() {
  return (
    <section className="impact" id="impact">
      <motion.div
        className="impact-collage"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.img
          variants={staggerItem}
          className="collage-img collage-img--1"
          src={impact1}
          alt="Ethically sourced coffee cherries"
        />
        <motion.img
          variants={staggerItem}
          className="collage-img collage-img--2"
          src={impact2}
          alt="Friends enjoying coffee"
        />
        <motion.img
          variants={staggerItem}
          className="collage-img collage-img--3"
          src={impact3}
          alt="Plastic-free cups"
        />
        <motion.img
          variants={staggerItem}
          className="collage-img collage-img--4"
          src={impact4}
          alt="Community gardening"
        />
      </motion.div>

      <div className="impact-body">
        <motion.h2
          className="text-l impact-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Every Sip Makes <br /> a Difference.
        </motion.h2>

        <motion.div
          className="impact-values"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={staggerItem} className="impact-value">
            <h3 className="text-m">Ethically Sourced Beans</h3>
            <p className="text-body">
              We partner directly with farmers who practice fair trade and
              organic cultivation.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="impact-value">
            <h3 className="text-m">Eco-Friendly Materials</h3>
            <p className="text-body">
              100% compostable packaging, reusable options, and plastic-free
              operations.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="impact-value">
            <h3 className="text-m">Community &amp; Impact</h3>
            <p className="text-body">
              Supporting local sustainability projects and giving back with
              every purchase.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact
