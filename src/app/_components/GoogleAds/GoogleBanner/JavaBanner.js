import React from 'react'
import JavaBg from '../../../../../Components/Images/googleadsbg.webp'

const GoogleBanner = () => {
    return (
        <div
            className='w-full h-[50vh] md:h-[70vh] relative flex items-center justify-center text-white px-5 md:px-0'
            style={{
                backgroundImage: `url(${JavaBg.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#e8f4f2', // Change this to match your image's main color
            }}
        >
            {/* Content here */}
        </div>
    )
}

export default GoogleBanner
