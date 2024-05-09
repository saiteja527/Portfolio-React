import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Hero from '../src/Components/Hero/Hero'
import About from '../src/Components/About/About'
import Services from '../src/Components/Services/Services'
import MyWork from '../src/Components/MyWork/MyWork'
import Contact from '../src/Components/Contact/Contact'
import Footer from '../src/Components/Footer/Footer'
import Skills from './Components/Skills/Skills'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
