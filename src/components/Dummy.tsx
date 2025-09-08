

function Dummy() {

    const boxes = [1,2,3]

  return (
    <div className='h-[100vh] w-full bg-amber-600 snap-start pt-[10vh] flex justify-around items-center'>
        {boxes.map((box) => {
            return <div key={box} className="w-90 h-120 bg-fuchsia-700 border-2"></div>
        })}
        
    </div>
  )
}

export default Dummy