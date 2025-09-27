import React from 'react'

const GoogleCards = () => {
    const cards = [
        { title: "Targeted Advertising", desc: "Google Ads offers precise targeting options such as location, demographics, interests, and device types to reach the most relevant audience." },
        { title: "Keyword Bidding", desc: "Manage bids for relevant keywords to rank higher in Google search results and drive more traffic to your site." },
        { title: "Campaign Analytics", desc: "Track detailed performance metrics for each campaign, from impressions and clicks to conversions, to optimize ROI." },
        { title: "Ad Formats", desc: "Google Ads supports multiple formats, including search ads, display ads, video ads, and shopping ads, giving businesses flexibility in their marketing strategies." },
    ]
    const cards2 = [
        {title: "Flexible Budgeting", desc: "With Google Ads, businesses can set their own budgets, only paying when users click on ads, ensuring cost-effectiveness and control."},
        {title: "Instant Results", desc: "Unlike organic SEO, Google Ads provides immediate visibility in search results and other ad placements, leading to faster traffic and engagement."},
        {title: "Advanced Targeting", desc: "Utilize advanced targeting options such as remarketing, interest categories, and custom audiences to connect with users who are most likely to convert."},
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
                    <div
                        key={idx}
                        className={`card w-full md:w-[374px] md:h-[196px] p-5 flex flex-col items-center justify-start`}
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

export default GoogleCards
