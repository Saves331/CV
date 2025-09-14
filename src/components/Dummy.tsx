import Card from './Card'

function Dummy() {
/* 
    const boxes = [1,2,3] */
    const skills = "SKILLS"

  return (
    <div className='h-[100vh] w-full  snap-start pt-[10vh] flex justify-around items-center relative px-15'>

        
        <div className=' flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 text-8xl text-white  z-0 hidden sm:flex pt-[10vh]'>
            {skills.split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
        </div>

        {/* <div className="flex max-w-[1800px] w-full h-[60vh] gap-4">
          {boxes.map((box) => {
            return <div key={box} className="w-1/3 h-[100%] bg-fuchsia-700 border-2"></div>
          })}
        </div> */}


        <div className="flex max-w-[1800px] w-full h-[60vh] gap-4">
        
            <Card></Card>
          
        </div>


        
        
    </div>
  )
}

export default Dummy