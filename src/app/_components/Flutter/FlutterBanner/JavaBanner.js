import React from 'react'
import JavaBg from '../../../../../Components/Images/flutter.webp'

const FlutterBanner = () => {
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
            {/* <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="text-area text-white z-10 w-[550px] md:absolute left-20">
                <h1 className='text-[25px] font-[700] '>Powering Interactive Web Experiences</h1>
                <p className='text-[15px] leading-[28px] mt-5 text-justify'>JavaScript is the core of modern web development, enabling dynamic and interactive features across websites. It’s essential for creating responsive, user-friendly interfaces and powering real-time updates and animations</p>
            </div> */}
        </div>
    )
}

export default FlutterBanner
