



function About() {

  const about = "ABOUT"


  return (
    <div className='w-full px-10 md:px-20 relative z-0 flex items-center justify-center'>

        <div className=' flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 text-7xl text-white pt-[10vh]  z-0 hidden md:flex'>

     
          {about.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}

   
  
        
  
        </div>

        <div className='text-center max-w-[1800px] w-full'>

        <h1 className='text-6xl text-[#F1F5F9] font-bold py-10 md:hidden'>About Me</h1>


              <div className='flex gap-4 min-h-[75vh] flex-col-reverse'>
                      <div className='flex flex-col h-1/2 gap-5'>
                        <div className='bg-amber-400 border-4 min-h-[500px]'></div>
                        <div className='bg-amber-400 border-4 min-h-[500px] h-1/2'></div>
                      </div>



                      <div className='h-1/2'>
                        <div className='bg-amber-600 border-4 h-full min-h-[500px]'></div>

                        </div>
                      </div>
      
        </div>
        
        
    </div>
  )
}

export default About