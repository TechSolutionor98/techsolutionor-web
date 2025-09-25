import React from 'react'

const SwiftCards = () => {
    const cards = [
        { title: "Safety & Performance", desc: "Swift ensures safer code with fewer errors and faster performance." },
        { title: "Modern Syntax", desc: "Clean and concise syntax makes Swift easy to read and write." },
        { title: "Interoperability", desc: "Seamlessly integrates with existing Objective-C code." },
        { title: "Swift Playgrounds", desc: "Interactive learning environment for experimenting with code." },
    ]
    const cards2 = [
        {title: "Efficiency", desc: "Swift accelerates app development with its streamlined syntax."},
        {title: "Safety", desc: "Reduces common programming errors with built-in safety features."},
        {title: "Community Support", desc: "Active community and extensive documentation support rapid learning and problem-solving."},
    ]
    return (
        <div className='w-full h-auto  flex flex-col items-center justify-center gap-5 md:gap-5 '>
            <div className='w-full bg-[#181818] md:h-[258.5px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 py-5 md:py-10 md:justify-between px-5 md:px-20 mt-20' >
                {cards.map((card, idx) => (
                    <div key={idx} className={`card w-full md:w-[277.5px]  md:h-[168.5px] p-5 flex flex-col items-center justify-start  text-white bg-black`} style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                        <h1 className='text-[19px] font-[600] mb-5 text-center'>{card.title}</h1>
                        <p className='text-[15px] font-[400] leading-[28px] text-center'>{card.desc}</p>
                    </div>
                ))}
            </div>
            <div className="buttondiv">
                <button className='w-[141.5px] h-[39px] bg-[#41b349] text-[15px] font-[700] text-white'>Advantages</button>
            </div>
            <div className='w-full  flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 md:justify-between px-5 md:px-20' >
                {cards2.map((card, idx) => (
                    <div key={idx} className={`card w-full md:w-[374px] h md:h-[168.5px] p-5 flex flex-col items-center justify-start  `} style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                        <h1 className='text-[19px] font-[600] mb-5 text-center'>{card.title}</h1>
                        <p className='text-[15px] font-[400] leading-[28px] text-center'>{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SwiftCards
