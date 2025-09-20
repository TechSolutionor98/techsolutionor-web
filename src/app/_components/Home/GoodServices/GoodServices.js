"use client"
import React, { useRef, useEffect, useState } from 'react'
import Comma from '../../../../../Components/Images/comma.png'
import Eclipse from '../../../../../Components/Images/eclipse.png'
import GoodServicess from '../../../../../Components/Images/goodservices.png'
import Image from 'next/image'
import { CiUser } from "react-icons/ci";


const GoodServices = () => {
    const [inView, setInView] = useState(false);
    const barRef = useRef(null);

    const goodservices = [
        {Image: ,title: '', list:['Awareness','Automation','Growth','Success','Achievement','Ease of Access']}
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (!barRef.current) return;
            const rect = barRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setInView(true);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='mt-10'>
            <div className="goodservices-top flex items-start justify-between">
                <div className="comma ml-5 mt-10">
                    <Image src={Comma} alt="img" width={800} height={800} className='w-[40px] h-[40px] md:w-[108px] md:h-[86px] ' />
                </div>
                <div className="info w-[1000px] ">
                    <h1 className='text-center text-[36px] font-[800] text-[#43b44a]'>You Can Depend On Us To Get A <br />
                        <span className='text-black'>Good Services</span>
                    </h1>
                    <p className='text-justify text-black text[16px] font-[500] leading-[25px] mt-5'>TECHSOLUTIONOR was founded to meet the growing need for expert IT advisory services. Our mission is to help you maximize productivity and reach your full potential through cutting-edge technology solutions. We treat our clients like family, finding great satisfaction in supporting you as you achieve your goals. For us, there’s no substitute for personal interaction and a deep understanding of your unique needs. Let us partner with you to drive success and innovation in your business.</p>
                </div>
                <div className="eclipse">
                    <Image src={Eclipse} alt="img" width={800} height={800} className='w-[40px] h-[40px] md:w-[118px] md:h-[298px] ' />
                </div>
            </div>
            <div className="goodservices-med flex flex-col md:flex-row items-start md:items-center px-4 md:px-10 justify-between -mt-20 gap-8">
                <div className="goodservices-med-left w-full md:w-[50%]">
                    <h1 className="text-[28px] font-bold mb-3">Service Experience</h1>
                    <div className="w-full max-w-[600px]">
                        <div className="relative w-full h-[20px] bg-gray-200 rounded overflow-hidden">
                            <div
                                ref={barRef}
                                className="absolute left-0 top-0 h-full bg-[#43b44a] rounded transition-all duration-1000 flex items-center justify-end"
                                style={{
                                    width: inView ? "90%" : "0%",
                                }}
                            >
                                <span className="text-white font-bold pr-4 text-[16px]">{inView && "90%"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="get-in-touch mx-4 flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 gap-4">
                        <div className="left">
                            <h1 className="text-[20px] font-bold mb-0">Get In Touch</h1>
                            <p className="text-[15px] text-black font-normal">Support</p>
                        </div>
                        <button className="flex items-center gap-2 bg-[#232323] hover:bg-[#333] text-white font-semibold px-6 py-3 rounded transition-all duration-200 mt-2 sm:mt-0 text-[14px]">
                            <CiUser size={18} />
                            Services Agent
                        </button>
                    </div>
                </div>
                <div className="goodservices-med-right w-full md:w-auto flex justify-center">
                    <Image src={GoodServicess} alt="img" width={800} height={400} className='w-[220px] h-[220px] md:w-[450px] md:h-[450px] -mt-20' />
                </div>
            </div>
            <div className="good-services-bottom">

            </div>
        </div>
    )
}

export default GoodServices
