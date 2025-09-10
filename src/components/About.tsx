import React from 'react'



function About() {

  const text = "ABOUT"

  return (
    <div className='h-screen py-[10vh] w-full px-15 relative z-0'>

        <div className='flex flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 px-2 text-8xl text-white  z-0'>
  {text.split("").map((char, index) => (
    <span key={index}>{char}</span>
  ))}
</div>

        <div className='text-center max-w-[1800px] mx-auto'>

        <h1 className='text-6xl text-[#F1F5F9] font-bold py-10'>About Me</h1>


              <div className='flex gap-4 h-[65vh]'>
                      <div className='flex flex-col w-1/2 gap-4'>
                        <div className='bg-amber-400 border-4 h-1/2 w-full'></div>
                        <div className='bg-amber-400 border-4 h-1/2 w-full'></div>
                      </div>



                      <div className='w-1/2'>
                        <div className='bg-amber-600 border-4 h-full w-full'></div>

                        </div>
                      </div>
      
        </div>
        
        
    </div>
  )
}

export default About