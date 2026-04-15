import '@components/Navbar.css'
import Navbar from '@components/Navbar.tsx'
import '@components/Hero.css'
import Hero from './components/Hero'
import '@components/About.css'
import About from '@components/About'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
