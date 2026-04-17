import menu1 from '@assets/menu/menu-1.webp'
import menu2 from '@assets/menu/menu-2.webp'
import menu3 from '@assets/menu/menu-3.webp'

export interface MenuItem {
  id: number
  image: string
  name: string
  price: string
  description: string
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    image: menu1,
    name: 'oat-milk latte',
    price: '$5.50',
    description:
      'Creamy oat milk perfectly blended with our ethically sourced espresso for a smooth, comforting cup.',
  },
  {
    id: 2,
    image: menu2,
    name: 'pour-over coffee',
    price: '$6.00',
    description:
      'A carefully brewed single-origin pour-over highlighting the rich, complex flavors of sustainably sourced beans.',
  },
  {
    id: 3,
    image: menu3,
    name: 'cold brew',
    price: '$5.00',
    description:
      'Slow-steeped cold brew coffee, smooth and invigorating, served over ice for a crisp, refreshing taste.',
  },
]
