import React from 'react'

const FlutterCards = () => {
    const cards = [
        { title: "Single Codebase", desc: "Write once and deploy universally. Flutter allows sharing a single codebase across all platforms, reducing development time and effort." },
        { title: "Rich Widget Library", desc: "Flutter provides a wide range of customizable widgets, which help in building native interfaces in minutes." },
        { title: "Hot Reload", desc: "Offers the ability to make changes in the code and see them immediately reflected in the app, speeding up the development cycle." },
        { title: "Performance", desc: "High-performance app experience as Flutter’s widgets incorporate all critical platform differences such as scrolling, navigation, icons, and fonts." },
    ]
    const cards2 = [
        {title: "Design Flexibility", desc: "Flutter’s layered architecture gives complete control over the UI, allowing for exquisite and intricate designs."},
        {title: "Community and Support", desc: "Flutter is supported by a strong community of developers and organizations, providing robust documentation, forums, and third-party plugins."},
        {title: "Integration and Scalability", desc: "Easy integration with existing code and support for an array of Firebase services make Flutter scalable for complex applications."},
    ]
    return (
        <div className='w-full h-auto  flex flex-col items-center justify-center gap-5 md:gap-5 '>
            <div className='w-full bg-[#181818] md:h-[305px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 py-5 md:py-0 md:justify-between px-5 md:px-20 mt-20' >
                {cards.map((card, idx) => (
                    <div key={idx} className={`card w-full md:w-[277.5px]  md:h-[224px] p-5 flex flex-col items-center justify-start  text-white bg-black`} style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
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

export default FlutterCards
