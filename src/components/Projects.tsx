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

                <a href="https://cicman-clicker.netlify.app/" target='_blank' className='flex w-full xl:w-1/2 gap-4 h-[75vh] min-w-[364px] bg-black relative text-white border-4'>
                                     
                                     <img src={CicmanClicker} alt="CicmanClicker" className='absolute inset-0 w-full h-full object-cover'/>

                                     <div className="absolute inset-0 bg-black/50"></div>
                      
                        <div className='relative flex justify-center items-center w-full h-full'>
                             

                              <h1 className='text-4xl font-bold lg:text-6xl'>
                                Cicman-Clicker
                              </h1>
                        </div>
                </a>
   

                
                      <div className='w-full xl:w-1/2 h-[75vh] min-w-[364px]'>
                        <a href="https://expensetrackrr-app.netlify.app/" target='_blank' className='bg-gray-800 border-4 border-white h-full w-full flex justify-center items-center flex-col cursor-pointer'>

                          

                            <h1 className='text-4xl font-bold lg:text-5xl text-white p-10'>
                              Expense Tracker
                            </h1>


                       </a>
                            
                        </div>
                 
                      
                        
                
                        
                             
                      </div>
      
        </div>

    </div>

       )
}

export default Projects