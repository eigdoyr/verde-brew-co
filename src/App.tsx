import '@components/Navbar.css'
import Navbar from '@components/Navbar.tsx'
import '@components/Hero.css'
import Hero from './components/Hero'
import '@components/About.css'
import About from '@components/About'
import '@components/Impact.css'
import Impact from '@components/Impact'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Impact />
    </main>
  )
}

export default App
