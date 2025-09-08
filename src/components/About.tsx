import React from 'react'



function About() {
  return (
    <div className='h-screen pt-[10vh] text-center max-w-[1800px] mx-auto w-full'>
        <h1 className='text-6xl text-[#F1F5F9] font-bold py-10'>About Me</h1>


              <div className='flex gap-4 h-[70vh]'>
                      <div className='flex flex-col w-1/2 gap-4'>
                        <div className='bg-amber-400 border-4 h-1/2 w-full'></div>
                        <div className='bg-amber-400 border-4 h-1/2 w-full'></div>
                      </div>



                      <div className='w-1/2'>
                        <div className='bg-amber-600 border-4 h-full w-full'></div>

                        </div>
                      </div>
      
        
        
    </div>
  )
}

export default About