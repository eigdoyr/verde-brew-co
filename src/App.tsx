import '@components/Navbar.css'
import Navbar from '@components/Navbar.tsx'
import '@components/Hero.css'
import Hero from './components/Hero'
import '@components/About.css'
import About from '@components/About'
import '@components/Impact.css'
import Impact from '@components/Impact'
import '@components/Menu.css'
import Menu from '@components/Menu'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Menu />
    </main>
  )
}

export default App
