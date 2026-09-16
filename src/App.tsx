import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Engineering from './components/Engineering'
import OpenSource from './components/OpenSource'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Engineering />
        <Projects />
        <OpenSource />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App