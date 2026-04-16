import { MenuItem } from '@data/menuItems'

function MenuCard({ image, name, price, description }: MenuItem) {
  return (
    <div className="menu-item">
      <div className="menu-img-wrap">
        <img src={image} alt={name} />
      </div>
      <div className="menu-info">
        <span className="text-body menu-name">{name}</span>
        <span className="text-body menu-price">{price}</span>
      </div>
      <p className="text-body menu-desc">{description}</p>
    </div>
  )
}

export default MenuCard
