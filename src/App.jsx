import { useRef } from 'react';
import useSiteMotion from './motion/useSiteMotion';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';
import ServicesSection from './components/ServicesSection/ServicesSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import StructuredData from './components/SEO/StructuredData';
import './App.css'

function App() {
  const mainRef = useRef(null);
  useSiteMotion(mainRef);

  return (
    <>
      <StructuredData />
      <NavigationBar />
      <main ref={mainRef}>
        <Hero />
        <ServicesSection />
        <About />
        <Contact />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App
