import React from 'react'

const CssCards = () => {
    const cards = [
        { title: "Responsive Design", desc: "CSS enables the creation of websites that adapt gracefully to various screen sizes and resolutions, ensuring an optimal user experience." },
        { title: "Advanced Styling", desc: "From animations to gradients and custom fonts, CSS allows for deep customization to make websites unique and visually engaging." },
        { title: "Cross-Browser Compatibility", desc: "Ensures that websites look consistent across different browsers, improving accessibility for all users." },
        { title: "Grid and Flexbox Layouts", desc: "CSS offers powerful layout tools like Flexbox and Grid, making complex designs easier to implement and maintain." },
    ]
    const cards2 = [
        {title: "Efficiency", desc: "CSS allows developers to separate content from design, reducing redundancy and improving site management."},
        {title: "Consistency", desc: "By using CSS stylesheets, developers ensure uniformity in design across multiple pages and platforms."},
        {title: "Community Support", desc: "A vast community of developers regularly contributes to CSS resources and updates, ensuring continued innovation."},
    ]
    return (
        <div className='w-full h-auto  flex flex-col items-center justify-center gap-5 md:gap-5 '>
            <div className='w-full bg-[#181818] md:h-[305px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 py-5 md:py-0 md:justify-between px-5 md:px-20 mt-20' >
                {cards.map((card, idx) => (
                    <div key={idx} className={`card w-full md:w-[277.5px]  md:h-[225px] p-5 flex flex-col items-center justify-start  text-white bg-black`} style={{ boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' }}>
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

export default CssCards
