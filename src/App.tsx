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
import '@components/Experience.css'
import Experience from '@components/Experience'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Menu />
      <Experience />
    </main>
  )
}

export default App
