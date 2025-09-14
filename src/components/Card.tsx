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
        {logo: ReactImg, name: "React", description: "I have a basic knowledge of this javascript library, where I can use core hooks like: useState, useEffect.\nI can use arrays aswell", skillLevel: 2},

        {logo: TailwindImg, name: "Tailwind CSS", description: "I am able to create responsive and modern designs using this CSS framework. I can use utility classes to style components effectively.", skillLevel: 2},

        {logo: HTMLCSSImg, name: "HTML & CSS", description: "I have a solid understanding of HTML5 and CSS3, including Flexbox, Grid, and responsive design principles.", skillLevel: 3},
    ]

  return (
    <div className='flex gap-5'>
        {techStack.map((tech, index) => (
            <div key={index} className="w-1/3 h-[100%] bg-[#1a1e24] border-2 border-[#2a2f36] shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <div className='flex flex-col items-center p-5 gap-3 text-center h-full'>

                    <div className='p-5'>
                        <img src={tech.logo} alt={tech.logo} className='h-60'/>
                    </div>
                    

                    <h1 className='text-5xl font-bold text-[#e5e7eb]'>{tech.name}</h1>

                    <h3 className='text-[#9ca3af] font-semibold text-3xl mt-5 whitespace-pre-line'>{tech.description}</h3>

                    <h2 className={`mt-auto text-4xl ${tech.skillLevel === 2 ? "text-orange-400" : " "}
                                                     ${tech.skillLevel === 3 ? "text-yellow-400" : " "}`}>Skill level: {tech.skillLevel}/5</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card