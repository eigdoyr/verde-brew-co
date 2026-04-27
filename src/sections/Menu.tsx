import '@sections/Menu.css'
import { motion } from 'framer-motion'
import { useBackgroundShift } from '@utils/useBackgroundShift'
import { fadeUp, staggerContainer, staggerItem } from '@utils/animations'
import { menuItems } from '@data/menuItems'
import MenuCard from '@components/MenuCard'

function Menu() {
  const { ref } = useBackgroundShift('menu-active')

  return (
    <section className="menu section-padding" id="menu" ref={ref}>
      <motion.h2
        className="text-l menu-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Sustainably Brewed. <br /> Thoughtfully Crafted
      </motion.h2>

      <motion.div
        className="menu-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={staggerItem}>
          <MenuCard {...menuItems[0]} />
        </motion.div>

        <motion.div variants={staggerItem}>
          <MenuCard {...menuItems[1]} />
        </motion.div>

        <motion.div variants={staggerItem} className="menu-text-block">
          <p className="text-body">
            Whether it&apos;s a smooth oat-milk latte, a bold single-origin
            pour-over, or a refreshing cold brew, our menu celebrates flavor
            without compromise
          </p>
        </motion.div>

        <motion.div variants={staggerItem}>
          <MenuCard {...menuItems[2]} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Menu
