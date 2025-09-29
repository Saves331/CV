import CicmanClicker from '../Img/Cicimania.jpg'

function Projects() {


    const projects = "PROJECTS"

  return (

    <div className='w-full px-20 relative z-0 flex items-center justify-center py-40'>


        <div className=' flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 text-7xl text-white z-0 hidden md:flex'>
            {projects.split("").map((char, index) => (
                 <span key={index}>{char}</span>
            ))}
        </div>


        <div className='text-center max-w-[1800px] w-full'>

        <h1 className='text-6xl text-[#F1F5F9] font-bold py-10 md:hidden'>Project(s)</h1>


              <div className='flex gap-4 flex-col items-center xl:flex-row'>
                      <div className='flex w-full xl:w-1/2 gap-4 h-[65vh] min-w-[364px]'>
                        <div className='bg-amber-400 border-4 h-full w-full bg-cover bg-center'
                             style={{ backgroundImage: `url(${CicmanClicker})` }}>
                                                  </div>
                        
                      </div>



                      <div className='w-full xl:w-1/2 h-[65vh]'>
                        <div className='bg-amber-600 border-4 h-full w-full'></div>

                        </div>
                      </div>
      
        </div>

    </div>

       )
}

export default Projects