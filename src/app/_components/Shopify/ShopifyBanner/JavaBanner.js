import React from 'react'
import JavaBg from '../../../../../Components/Images/shopifybg.avif'

const ShopifyBanner = () => {
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
                <h1 className='text-[25px] font-[700] '>Empowering Your Online Business</h1>
                <p className='text-[15px] leading-[28px] mt-5 text-justify'>Shopify is a versatile e-commerce platform designed to help businesses build, customize, and scale their online stores. With its user-friendly interface and extensive features, Shopify makes it easy to manage products, process payments, and grow your brand globally.</p>
            </div>
        </div>
    )
}

export default ShopifyBanner
