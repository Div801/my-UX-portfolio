import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Illustrations from './components/Illustrations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Illustrations />
      <Contact />
      <Footer />

      
    </div>
  )
}

export default App
