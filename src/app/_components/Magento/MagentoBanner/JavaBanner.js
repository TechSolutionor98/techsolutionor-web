import React from 'react'
import JavaBg from '../../../../../Components/Images/magentobg.jpg'

const MagentoBanner = () => {
    return (
        <div
            className='w-full h-[50vh] md:h-[70vh] relative flex items-center justify-center text-white px-5 md:px-0'
            style={{
                backgroundImage: `url(${JavaBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="text-area text-white z-10 w-full md:px-10 text-center">
                <h1 className='text-[30px] md:text-[48px] font-[800] '>Empowering E-Commerce Innovation</h1>
                <p className='text-[18px] md:text-[21px] leading-[40px] mt-5 '>Magento is a leading platform for building scalable, secure, and highly customizable online stores, making it the go-to solution for businesses aiming to create dynamic and innovative e-commerce experiences</p>
            </div>
        </div>
    )
}

export default MagentoBanner
