import Image from 'next/image'
import React from 'react'
import Eclipse from '../../../../../Components/Images/eclipse2.png'

const Projects = () => {
    return (
        <div className='relative'>
            <Image alt='Projects' src={Eclipse} width={160} height={300} className='absolute -left-10 h-[300px]' />
            <div className="projects-top flex flex-col items-center justify-center mt-10">
                <div className="text-area w-[950px]">
                    <h1 className='text-center text-[45px] font-[700] text-[#262323]'>PROJECTS</h1>
                    <p className='text-[15px] font-[500] mt-5'>We Successfully Completed A Project That Enhanced Our Client’s Data Analysis Capabilities, Resulting In A 30% In Operational Efficiency. Additionally, We Implemented An AI-Driven Customer Support System, Reducing Response Times By 40% And Significantly Improving Customer Satisfaction.</p>
                    <div className="companies">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
