import '@sections/Menu.css'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '@utils/animations'
import { menuItems } from '@data/menuItems'
import MenuCard from '@components/MenuCard'
import { useBackgroundShift } from '@utils/useBackgroundShift'

function Menu() {
  const { ref } = useBackgroundShift('menu-active', 0.05)
  const carouselRef = useRef<HTMLDivElement>(null)

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

      {/* Desktop grid */}
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

      {/* Mobile carousel */}
      <div className="menu-carousel-wrap section-padding">
        <p className="text-body menu-carousel-text">
          Whether it&apos;s a smooth oat-milk latte, a bold single-origin
          pour-over, or a refreshing cold brew, our menu celebrates flavor
          without compromise
        </p>
        <motion.div
          className="menu-carousel"
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -600 }}
          dragElastic={0.1}
        >
          {menuItems.map((item) => (
            <div className="menu-carousel-item" key={item.id}>
              <MenuCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
