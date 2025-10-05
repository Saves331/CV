function About() {
  const about = "ABOUT"

  const aboutCards = [
    {
      title: "School",
      description:
        "I am currently in 8th year of grammar-school Dneperská 1, focusing on technology, programming, and self-development. My school helps me strengthen my foundation in computer science and problem solving, but mainly I learn by myself.",
      highlight: "Education",
    },
    {
      title: "About Me",
      description:
        "I am passionate about coding, fitness, and continuous learning. I enjoy building projects, exploring new tech, and working towards personal growth.",
      highlight: "Personal",
    },
    {
      title: "Goals",
      description:
        "My aim is to build a successful career in tech and keep growing both personally and professionally. I want to work on meaningful projects and contribute to the community.",
      highlight: "Future",
    },
  ]

  return (
    <section className="w-full py-[10vh] px-10 md:px-20 relative  z-[-1]">
      {/* Vertical ABOUT text */}
      <div className="flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 text-7xl text-white z-0 hidden md:flex">
        {about.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>

      {/* Section container */}
      <div className="max-w-[1800px] w-full mx-auto relative z-10">
        {/* Mobile heading */}
        <h1 className="text-6xl text-[#F1F5F9] font-bold py-10 md:hidden text-center">
          About Me
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center items-start">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="min-w-[320px] h-full bg-[#1a1e24] border-2 border-[#2a2f36] max-w-[550px] shadow-[0_0_20px_rgba(251,191,36,0.15)]"
            >
              <div className="flex flex-col items-center p-8 gap-6 text-center h-full">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#fbbf24]">
                  {card.title}
                </h1>
                <h3 className="text-[#e5e7eb] font-medium mt-4 whitespace-pre-line text-xl lg:text-2xl 2xl:text-3xl leading-relaxed">
                  {card.description}
                </h3>
                <h2 className="mt-auto text-2xl lg:text-3xl text-amber-400 font-semibold">
                  {card.highlight}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
