import React from 'react'
import LaravelBg from '../../../../../Components/Images/wordpressbg.jpg'

const WpBanner = () => {
  return (
    <div className='w-full h-[50vh] md:h-[85vh] relative flex items-center justify-center text-white px-5 md:px-0' style={{ backgroundImage: `url(${LaravelBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-area flex flex-col w-[550px] md:absolute left-20">
        <button className='w-[216px] h-[37px] flex items-center justify-center bg-[#41b349] text-[13px] font-[600]'>WordPress Development</button>
        <h1 className='text-[35px] font-[700] leading-[42px] mt-5'>Versatile and User-Friendly Web Solutions</h1>
        <p className='text-[15px] leading-[28px] mt-5 text-justify'>WordPress is the leading content management system, offering unparalleled flexibility and ease of use. It’s the perfect choice for creating dynamic websites, from personal blogs to enterprise-level platforms.</p>
      </div>
    </div>
  )
}

export default WpBanner
