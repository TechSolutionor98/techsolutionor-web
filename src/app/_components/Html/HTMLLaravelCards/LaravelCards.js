import React from 'react'

const HtmlCards = () => {
    const cards = [
        { title: "Structure", desc: "HTML provides a clear structure to web content, using elements like headers, paragraphs, lists, and tables to organize information logically and coherently." },
        { title: "Semantics", desc: "HTML5 introduced new semantic elements such as header, footer, article, and section, which improve the clarity and accessibility of web content." },
        { title: "Accessibility", desc: "Proper use of HTML tags and attributes enhances the accessibility of web content, making it usable for people with disabilities." },
        { title: "SEO-Friendly", desc: "HTML tags help search engines understand the content and structure of a webpage, which is essential for search engine optimization (SEO)." },
    ]
    const cards2 = [
        {title: "Elements and Tags", desc: "HTML consists of various elements and tags, each serving a specific purpose, from creating headings and paragraphs."},
        {title: "Forms", desc: "HTML provides a robust set of tags for creating forms, enabling user input and interaction with web applications."},
        {title: "Links and Navigation", desc: "The 'a' tag is used to create hyperlinks, enabling easy navigation between different web pages and resources."},
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

export default HtmlCards
