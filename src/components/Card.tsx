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
   <div className="flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center items-start mx-auto max-w-[1800px] w-full">
    {techStack.map((tech, index) => (
      <div
        key={index}
        className={`
          h-full bg-[#1a1e24] border-2 border-[#2a2f36] max-w-[550px] shadow-[0_0_20px_rgba(59,130,246,0.15)]
          ${index === 2 ? "lg:col-span-2 lg:justify-self-center xl:col-span-1" : ""}
        `}
      >
        <div className="flex flex-col items-center p-5 gap-3 text-center h-full">
          <div className="p-5 h-2/5 flex items-center">
            <img src={tech.logo} alt={tech.logo} className="max-h-60 max-w-70" />
          </div>

          <div className="h-2/5">
            <h1 className="text-5xl font-bold text-[#e5e7eb]">{tech.name}</h1>
            <h3 className="text-[#9ca3af] font-semibold mt-5 whitespace-pre-line text-2xl 2xl:text-3xl">
              {tech.description}
            </h3>
          </div>

          <h2
            className={`mt-auto text-4xl ${
              tech.skillLevel === 2 ? "text-orange-400" : ""
            } ${tech.skillLevel === 3 ? "text-yellow-400" : ""}`}
          >
            Skill level: {tech.skillLevel}/5
          </h2>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Card