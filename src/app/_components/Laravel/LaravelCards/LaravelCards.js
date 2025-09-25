import React from 'react'

const JsCards = () => {
    const cards = [
        { title: "Client-Side Scripting", desc: "JavaScript executes directly in the browser, allowing for instant interaction with users without server-side delays." },
        { title: "Event Handling", desc: "JavaScript can respond to user actions like clicks, hovers, and key presses, making web pages more dynamic and responsive." },
        { title: "DOM Manipulation", desc: "JavaScript provides powerful methods to manipulate the Document Object Model (DOM), allowing for dynamic content updates and complex animations." },
        { title: "Integration with APIs", desc: "JavaScript can seamlessly integrate with third-party APIs, enabling features like Google Maps, social media feeds, and payment gateways." },
    ]
    const cards2 = [
        {title: "Versatility", desc: "JavaScript can be used across different platforms, from web and mobile apps to server-side scripting."},
        {title: "Community and Resources", desc: "A vast community of developers, along with numerous tutorials, libraries, and frameworks, makes JavaScript a continuously evolving and supported language."},
        {title: "Performance", desc: "JavaScript’s asynchronous capabilities enhance performance, reducing page load times and providing smooth user experiences."},
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

export default JsCards
