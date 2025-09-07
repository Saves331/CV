import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className='flex justify-between items-center p-10 bg-[#12151a]'>

            <a href="#" className='text-[#06B6D4] text-5xl font-bold'>ML</a>

            <ul className='flex gap-10 text-[#F1F5F9] text-2xl justify-center'>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar