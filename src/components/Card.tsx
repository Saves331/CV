import React from 'react'
import ReactImg from '../Img/React.png'
import TailwindImg from '../Img/Tailwind.png'
import HTMLCSSImg from '../Img/HTMLCSS.png'

function Card() {


    interface Tech {
        logo: string;
        name: string;
        description: string;
        skillLevel: number;
    }

    const techStack: Tech[] = [
        {logo: ReactImg, name: "React", description: "A basic knowledge of this javascript library, where I can use basic hooks: useState, useEffect. I can use arrays aswell", skillLevel: 2},

        {logo: TailwindImg, name: "Tailwind CSS", description: "I am able to create responsive and modern designs using this CSS framework. I can use utility classes to style components effectively.", skillLevel: 2},

        {logo: HTMLCSSImg, name: "HTML & CSS", description: "I have a solid understanding of HTML5 and CSS3, including Flexbox, Grid, and responsive design principles.", skillLevel: 3},
    ]

  return (
    <div className='flex gap-5'>
        {techStack.map((tech, index) => (
            <div key={index} className="w-1/3 h-[100%] bg-fuchsia-700 border-2">
                <div className='flex flex-col items-center p-5 gap-3 text-center'>

                    <div className='p-5'>
                        <img src={tech.logo} alt={tech.logo} className='h-60'/>
                    </div>
                    

                    <h1 className='text-5xl font-bold text-white'>{tech.name}</h1>

                    <h3 className='text-white font-semibold text-3xl mt-5'>{tech.description}</h3>

                    <h2>Skill level: {tech.skillLevel}/5</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card