import React from 'react'

const ShopifyCards = () => {
    const cards = [
        { title: "Mobile Optimization", desc: "Shopify stores are fully responsive, ensuring a smooth shopping experience on all devices." },
        { title: "Multi-Channel Selling", desc: "Sell across various platforms, including social media, marketplaces, and in-person with Shopify’s POS system." },
        { title: "Inventory Management", desc: "Shopify provides powerful tools for managing your inventory, including real-time updates, bulk product uploads, and automated reordering." },
        { title: "Customer Support", desc: "Shopify offers 24/7 support, ensuring you have the help you need to keep your store running smoothly." },
    ]
    const cards2 = [
        {title: "Ease of Use", desc: "Shopify’s user-friendly interface makes it easy for anyone to create and manage an online store, regardless of technical expertise."},
        {title: "Scalability", desc: "Whether you're just starting or scaling up, Shopify can grow with your business, offering flexible plans and advanced features."},
        {title: "Security", desc: "Shopify provides SSL certificates and PCI compliance, ensuring your store and customer data are secure."},
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

export default ShopifyCards
