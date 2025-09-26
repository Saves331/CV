import { useState } from "react"


function NavBar() {

  const navLinks = [{name: "About", direction: "#about-section"}, 
                    {name: "Skills", direction: "#skills-section"},  
                    {name: "Projects", direction: "#projects-section"},  
                    {name: "Contact", direction: "#contact-section"},  
                  ]
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        <nav className='flex justify-between items-center p-10 bg-[#090a0b]  w-full h-[10vh] fixed top-0 left-0 z-10'>

            <a href="#hero-section" className='text-[#06B6D4] text-5xl font-bold'>ML</a>

            <ul className=' hidden md:flex  gap-10 text-[#F1F5F9] text-2xl justify-center'>

                {navLinks.map((link, index) => (
                  <li key={index} className="">
                    <a href={link.direction}>{link.name}</a>
                  </li>
                ))}


              
      
            </ul>



            <button className="md:hidden text-[#F1F5F9] flex  flex-col gap-3 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                   <span className=" block h-1 w-10 bg-[#ffffff]"></span>
                   <span className=" block h-1 w-10 bg-[#ffffff]"></span>
                   <span className=" block h-1 w-10 bg-[#ffffff]"></span>
                   
            </button>
        </nav>

            <div
              className={`md:hidden flex flex-col items-center gap-6 bg-[#090a0b] text-[#F1F5F9] text-2xl py-6 fixed top-[10vh] left-0 w-full z-10
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
            >
              {navLinks.map((link, index) => (
                <a href={link.direction} key={index} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </div>

    </div>
  )
}

export default NavBar