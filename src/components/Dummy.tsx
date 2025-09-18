import Card from './Card'

function Dummy() {
/* 
    const boxes = [1,2,3] */
    const skills = "SKILLS"

  return (
    <div className='w-full py-[10vh] flex justify-around items-center px-15 relative'>

        
        <div className='flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 text-8xl text-white  z-0 hidden sm:flex'>
            {skills.split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
        </div>

      

        <div className=" max-w-[1800px] w-full gap-4">
        
            <Card></Card>
          
        </div>


        
        
    </div>
  )
}

export default Dummy