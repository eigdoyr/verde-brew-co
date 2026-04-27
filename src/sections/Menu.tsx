import { menuItems } from '@data/menuItems'
import MenuCard from '@components/MenuCard'
import '@sections/Menu.css'

function Menu() {
  return (
    <section className="menu section-padding" id="menu">
      <h2 className="text-l menu-heading">
        Sustainably Brewed. <br /> Thoughtfully Crafted
      </h2>

      <div className="menu-grid">
        <MenuCard {...menuItems[0]} />
        <MenuCard {...menuItems[1]} />

        <div className="menu-text-block">
          <p className="text-body">
            Whether it&apos;s a smooth oat-milk latte, a bold single-origin
            pour-over, or a refreshing cold brew, our menu celebrates flavor
            without compromise
          </p>
        </div>

        <MenuCard {...menuItems[2]} />
      </div>
    </section>
  )
}

export default Menu
