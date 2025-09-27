import React from 'react'

const PhpCards = () => {
    const cards = [
        { title: "Ease of Use", desc: "PHP’s syntax is easy to learn and use, making it accessible for beginners while being powerful enough for experienced developers." },
        { title: "Flexibility", desc: "PHP can be used for a wide range of applications, from simple scripts to complex enterprise-level solutions." },
        { title: "Compatibility", desc: "PHP is compatible with almost all web servers, including Apache, Nginx, and IIS, and can be deployed on various platforms." },
        { title: "Frameworks", desc: "Popular PHP frameworks like Laravel, Symfony, and CodeIgniter offer structured development, reducing the time and effort needed to build complex applications." },
    ]
    const cards2 = [
        {title: "Wide Adoption", desc: "PHP is one of the most widely used server-side scripting languages, ensuring a large pool of developers and extensive community support"},
        {title: "Cost-Effective ", desc: "Being open-source, PHP is free to use, making it a cost-effective choice for web development projects."},
        {title: "Rapid Development", desc: "PHP’s ease of use, extensive libraries, and frameworks allow for rapid development cycles, reducing time to market."},
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

export default PhpCards
