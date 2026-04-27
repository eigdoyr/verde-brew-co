import { Navbar, Footer } from '@components/index'
import {
  Hero,
  About,
  Impact,
  Menu,
  Experience,
  Movement,
} from '@sections/index'

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
