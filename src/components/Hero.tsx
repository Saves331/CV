import React from 'react'
import avatar from '../Img/avatar.png'
function Hero() {

    const person = {name: "Martin", profession: "Developer", avatar: avatar}
  return (
    <div className='w-400 h-200 m-auto flex justify-between items-center'>
       <div className="text-8xl text-[#F1F5F9]">
            <h1 className="">Hi! I am {person.name}.</h1>
            <h1 className=""><span className='text-[#06B6D4]'>React</span> {person.profession}</h1>
        </div>

        <div>
            <img src={person.avatar} alt="avatar" className='h-100 w-100 rounded-full'/>
        </div>
    </div>
  )
}

export default Hero