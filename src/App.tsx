
import './App.css'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import Dummy from './components/Dummy.tsx'
function App() {
  
  return (

    <div className='h-screen'>
        <NavBar />


    <div className='snap-y snap-mandatory h-screen overflow-y-scroll'>
      
      <section className="h-screen snap-start">
          <Hero />
        </section>
        <section className="h-screen snap-start">
          <Dummy />
        </section>
    </div>
    </div>

      
  )
}

export default App
