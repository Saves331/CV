
import './App.css'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import Dummy from './components/Dummy.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
function App() {
  
  return (

    <div className='h-screen'>
        <NavBar />


    <div className='snap-y snap-mandatory h-screen overflow-y-scroll  scroll-behavior:smooth;'>

      <div className=''>
        <section className="h-screen snap-start bg-[#12151a]" id='hero-section'>
          <Hero />
        </section>

        <section className='h-screen snap-start' id="about-section">
          <About></About>
        </section>


        <section className="h-screen snap-start" id='skills-section'>
          <Dummy />
        </section>

        
          <Footer>

        </Footer>

        

        
        
      </div>
      
      
        
        

        

    </div>
    </div>

      
  )
}

export default App
