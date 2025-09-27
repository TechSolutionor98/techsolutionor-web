import React from 'react'
import LaravelIcon from '../../../../../Components/Images/magentoicon.png'
import Image from 'next/image'

const MagentoFramework = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:h-[262px] mt-10'>
            <div className="left-image basis-[40%] flex items-center justify-center ">
                <Image src={LaravelIcon} alt="Laravel Icon" width={1000} height={1000} className='w-[300px] h-[200px] md:w-[436px] md:h-[262px]' />
            </div>
            <div className="text-area basis-[60%] flex flex-col justify-between h-full py-5 px-5 gap-6 md:gap-0 md:px-0 md:pr-30">
                <h1 className='text-[20px] font-[700] leading-[24px]'>Powerful and Flexible E-Commerce Platform
                </h1>
                <p className='text-[15px] leading-[28px] md:mt-5 text-justify'>Introduction to Magento as a leading eCommerce platform, known for its scalability, flexibility, and ability to create tailored online shopping experiences. Mention Magento’s support for multiple storefronts, various payment methods, and its global presence in online retail.

                </p>
                <button className='text-[15px] font-[700] bg-[#41b349] w-[150px] h-[39px] text-white' style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>Key Features</button>
            </div>

        </div>
    )
}

export default MagentoFramework
