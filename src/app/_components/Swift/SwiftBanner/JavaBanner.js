import React from 'react'
import JavaBg from '../../../../../Components/Images/swiftbg.jpg'

const SwiftBanner = () => {
    return (
        <div
            className='w-full h-[50vh] md:h-[100vh] relative flex items-center justify-center text-white px-5 md:px-0'
            style={{
                backgroundImage: `url(${JavaBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="text-area text-white z-10 w-[550px] md:absolute left-20">
                <h1 className='text-[35px] font-[800] text-[#41b349]'>Swift Fast and Modern iOS Development</h1>
                <p className='text-[16px] leading-[30px] mt-5 text-justify'>Swift Fast and Modern iOS Development
                    Swift is a powerful programming language developed by Apple, designed for building fast, safe, and efficient iOS, macOS, and watchOS applications, offering a seamless coding experience with modern syntax.</p>
            </div>
        </div>
    )
}

export default SwiftBanner
