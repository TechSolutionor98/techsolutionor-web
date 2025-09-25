import React from 'react'

const PythonCards = () => {
    const cards = [
        { title: "Interpreted Language", desc: "Python code is executed line by line, simplifying the debugging and development processes by allowing immediate feedback and quick iterations." },
        { title: "Dynamic Typing", desc: "Variables in Python are dynamically typed, meaning you don’t have to declare their type explicitly." },
        { title: "High-Level Language", desc: "Python abstracts many of the complex details of the computer’s hardware, allowing developers to focus on programming logic." },
        { title: "Integration Capabilities", desc: "Python can easily integrate with other languages and technologies, such as Java, .NET, and APIs, making it a versatile tool for various applications." },
    ]
    const cards2 = [
        {title: "Rapid Development", desc: "Python’s simplicity and extensive libraries allow for rapid development and prototyping."},
        {title: "Versatility", desc: "From web applications and desktop software to data science and artificial intelligence, Python can be used for virtually any type of software development."},
        {title: "Strong Community", desc: "A large and supportive community means a wealth of resources, tutorials, and third-party modules are readily available."},
    ]
    return (
        <div className='w-full h-auto  flex flex-col items-center justify-center gap-5 md:gap-5 '>
            <div className='w-full bg-[#181818] md:h-[333px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 py-5 md:py-0 md:justify-between px-5 md:px-20 mt-20' >
                {cards.map((card, idx) => (
                    <div key={idx} className={`card w-full md:w-[277.5px]  md:h-[252px] p-5 flex flex-col items-center justify-start  text-white bg-black`} style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                        <h1 className='text-[19px] font-[600] mb-5 text-center'>{card.title}</h1>
                        <p className='text-[15px] font-[400] leading-[28px] text-center'>{card.desc}</p>
                    </div>
                ))}
            </div>
            <div className="buttondiv">
                <button className='w-[141.5px] h-[39px] bg-[#41b349] text-[15px] font-[700] text-white'>Advantages</button>
            </div>
            <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-5 md:gap-2 md:justify-between px-5 md:px-20">

                {cards2.map((card, idx) => (
                   <div
  key={idx}
  className="card w-full md:w-[374px] p-5 flex flex-col items-center justify-start"
  style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}
>

                        <h1 className='text-[19px] font-[600] mb-5 text-center'>{card.title}</h1>
                        <p className='text-[15px] font-[400] leading-[28px] text-center'>{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PythonCards
