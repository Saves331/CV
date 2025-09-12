import React from 'react'

function Projects() {


    const projects = "PROJECTS"

  return (

    <div className='h-screen py-[10vh] w-full px-15 relative z-0 flex items-center justify-center sm:pt-[20vh] pb-[10vh]'>


        <div className=' flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 text-8xl text-white pt-[10vh]  z-0 hidden sm:flex'>
            {projects.split("").map((char, index) => (
                 <span key={index}>{char}</span>
            ))}
        </div>


        <div className='text-center max-w-[1800px] w-full'>

        <h1 className='text-6xl text-[#F1F5F9] font-bold py-10 sm:hidden'>About Me</h1>


              <div className='flex gap-4 h-[65vh]'>
                      <div className='flex flex-col w-1/2 gap-4'>
                        <div className='bg-amber-400 border-4 h-full w-full'></div>
                      
                      </div>



                      <div className='w-1/2'>
                        <div className='bg-amber-600 border-4 h-full w-full'></div>

                        </div>
                      </div>
      
        </div>

    </div>

       )
}

export default Projects