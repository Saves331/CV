
import './App.css'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import Dummy from './components/Dummy.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
import Projects from './components/Projects.tsx'
import Contanct from './components/Contanct.tsx'
function App() {
  
  return (

    <div className=''>
        <NavBar />


   
      
        <section className=" bg-[#12151a]" id='hero-section'>
          <Hero />
        </section>

        <section className=' ' id="about-section">
          <About></About>
        </section>


        <section className=" bg-[#12151a]" id='skills-section'>
          <Dummy />
        </section>


        <section className='' id='projects-section'>
          <Projects></Projects>
        </section>


        <section className='h-min-content ' id='contact-section'>

              <div className='h-4/5 p-10 bg-[#090a0b]'>
                <Contanct></Contanct>      
              </div>


              <div className='h-1/5 flex items-center bg-[#030202] p-5'>
                <Footer></Footer>
              </div>
        </section>
        
          

        

        
        
     
    </div>


      
  )
}

export default App
