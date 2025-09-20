import Image from 'next/image'
import React from 'react'
import Seo from '../../../../../Components/Images/seoservice.png'
import Social from '../../../../../Components/Images/socialservice.png'
import Content from '../../../../../Components/Images/contentservice.png'
import App from '../../../../../Components/Images/appservice.png'
import Graphics from '../../../../../Components/Images/graphicsservice.png'
import Web from '../../../../../Components/Images/webservice.png'
import ServiceBg from '../../../../../Components/Images/servicesbg.png'

const ServicesWeOffer = () => {
    const services = [
        {Image: Seo, title: "Search Engine Optimization"},
        {Image: Social, title: "Social Media Marketing"},
        {Image: Content, title: "Content Writing & Marketing"},
        {Image: App, title: "App Development"},
        {Image: Graphics, title: "Graphics Designing"},
        {Image: Web, title: "Web Development"}
    ]
    
    return (
        <div>
            <div className="uppertext px-5 md:px-0 md:w-[798px] flex flex-col items-center justify-center  mx-auto my-20 gap-5">
                <h1 className='text-[#262323] font-montserrat text-[45px] font-bold flex items-center flex-col w-full justify-center gap-3'>Services <br /> <span className='text-[45px] font-bold bg-[#41B349] border border-[#41B349] rounded-[1px] shadow-[0px_5px_10px_0px_rgba(65,179,73,0.55)] text-white w-[260px] h-[70px] flex items-center justify-center'>We Offer</span></h1>
                <p className='text-justify text-[15px] font-[500] text-[#262323] leading-[28px]'>Our Services Provide Innovation Solutions Tailored To Meet Your Business Needs, Ensuring Efficiency And Growth. We Specialize in Delevring Top-Notch Customer Support, Advanced Technology, And Comprehencive Strategies To Help You Achieve Your Goals.</p>
            </div>
            <div className="lowercards relative">
                <div className="bg-image absolute -z-10">
                    <Image alt='Service' src={ServiceBg} width={650} height={600}/>
                </div>
                <div className="cards z-10 flex fle-col md:flex-row flex-wrap items-center justify-center px-10 gap-10">
                    {services.map((item, i)=>(
                        <div className='service-cards rounded-[20px] flex flex-col w-[320px] h-[320px] items-center justify-center bg-[#fbfbfb] gap-5' style={{boxShadow: '14px 14px 5px -8px rgba(38, 35, 35, 0.23921568627450981)'}}>
                            <Image alt='service-image' src={item.Image} width={62} height={62}/>
                            <h1 className='text-[#41b349] text-[25px] font-[700] text-center leading-[30px]'>{item.title}</h1>
                            <button className='w-[135px] h-[39px] flex items-center justify-center bg-[#262323] text-white text-[15px] font-[500] rounded-[20px] hover:bg-white hover:text-[#262323] transition ease-in-out duration-300' style={{boxShadow:  '0px 5px 10px 0px #CACACA'}}>Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesWeOffer
