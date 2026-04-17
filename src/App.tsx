import '@components/Navbar.css'
import Navbar from '@components/Navbar.tsx'
import '@sections/Hero.css'
import Hero from '@sections/Hero'
import '@sections/About.css'
import About from '@sections/About'
import '@sections/Impact.css'
import Impact from '@sections/Impact'
import '@sections/Menu.css'
import Menu from '@sections/Menu'
import '@sections/Experience.css'
import Experience from '@sections/Experience'
import '@sections/Movement.css'
import Movement from '@sections/Movement'
import './components/Footer.css'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Menu />
      <Experience />
      <Movement />
      <Footer />
    </main>
  )
}

export default App
