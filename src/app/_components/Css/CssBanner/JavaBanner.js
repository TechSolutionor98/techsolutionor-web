import React from 'react'
import JavaBg from '../../../../../Components/Images/cssbg.avif'

const CssBanner = () => {
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
            <div className="absolute inset-0 bg-black/80 z-0"></div>
            <div className="text-area text-white z-10 text-center w-full p-10">
                <h1 className='text-[48px] font-[800] text-[#41b349]'>Designing Beautiful
Responsive Websites</h1>
                <p className='text-[24px] font-[700] leading-[28px] mt-5 text-center'>CSS (Cascading Style Sheets) is the foundation of modern web design, allowing developers to create visually stunning, fully responsive, and user-friendly websites across all devices.</p>
            </div>
        </div>
    )
}

export default CssBanner
