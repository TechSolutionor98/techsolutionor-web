import React from 'react'

const MagentoCards = () => {
    const cards = [
        { title: "Customizable Storefronts", desc: "Magento offers highly customizable themes and layouts, enabling businesses to create unique storefronts tailored to their brand identity." },
        { title: "Robust Inventory Management", desc: "Advanced inventory management features allow businesses to manage stock across multiple warehouses and channels seamlessly." },
        { title: "Scalability", desc: "Magento is designed to scale with business growth, handling large product catalogs and traffic spikes during promotions." },
        { title: "Third-Party Integrations", desc: "Magento integrates effortlessly with payment gateways, shipping providers, and marketing platforms to ensure smooth business operations." },
    ]
    const cards2 = [
        {title: "SEO-Friendly", desc: "Magento is built with SEO in mind, offering tools and features to optimize product pages, meta tags, and URLs for search engines."},
        {title: "Mobile Commerce Ready", desc: "Magento provides mobile-responsive designs and functionalities, ensuring an optimized shopping experience across devices."},
        {title: "Strong Developer Community", desc: "A large community of Magento developers and contributors, ensuring continuous updates, tutorials, and support."},
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

export default MagentoCards
