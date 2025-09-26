
import avatar from '../Img/avatar.png'

function Hero() {
  const person = { name: "Martin", profession: "Developer", avatar: avatar }

  return (
    <div className="snap-start h-screen flex flex-col min-[875px]:flex-row min-[875px]:justify-between justify-center gap-5 items-center px-10 pt-[10vh] container">
      {/* Left side: Text */}
      <div className="flex text-6xl lg:text-[6rem] text-[#F1F5F9] min-[875px]:w-1/2 flex-col text-center">
        <h1>Hi! I am {person.name}.</h1>
        <h1>
          And this is my <span className="text-[#06B6D4]">CV</span>   
        </h1>
      </div>

      {/* Right side: Avatar */}
      <div className='flex justify-center min-[875px]:w-1/2'>
        <img
          src={person.avatar}
          alt="avatar"
          className="w-64 h-64 lg:w-[25rem] lg:h-[25rem] rounded-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
