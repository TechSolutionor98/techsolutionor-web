import React from 'react'

const MetaCards = () => {
    const cards = [
        { title: "Social Connectivity", desc: "Meta’s platforms (such as Facebook, Instagram, and WhatsApp) offer seamless ways for people to connect, share, and communicate globally." },
        { title: "Metaverse Development", desc: "Meta is at the forefront of creating immersive digital environments through VR and AR, paving the way for the metaverse." },
        { title: "Business Tools and Advertising", desc: "Meta provides businesses with powerful marketing tools, ad targeting, and analytics to grow their brands and reach the right audiences." },
        { title: "Innovation in VR and AR", desc: "Through Meta Quest and other innovations, the company is leading the charge in transforming how people experience the digital world." },
    ]
    const cards2 = [
        {title: "Global Reach", desc: "Laravel’s expressive syntax allows developers to write code that is both elegant and easy to understand."},
        {title: "Innovative Technologies", desc: "With advancements in VR and AR, Meta is reshaping how people engage with the digital world."},
        {title: "Support for Creators and Businesses", desc: "Meta offers an ecosystem of tools for content creators, entrepreneurs, and businesses to thrive in the digital economy."},
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

export default MetaCards
