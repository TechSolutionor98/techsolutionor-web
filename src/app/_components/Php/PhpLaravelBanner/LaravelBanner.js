import React from 'react'
import LaravelBg from '../../../../../Components/Images/phpbg.jpg'

const PhpBanner = () => {
  return (
    <div className='w-full h-[50vh] md:h-[100vh] relative flex items-center justify-center text-white px-5 md:px-0' style={{ backgroundImage: `url(${LaravelBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-area flex flex-col w-[550px] md:absolute left-20 bottom-20">
        {/* <h1 className='text-[35px] font-[700] leading-[42px]'>Elegant Web Applications <br className='hidden md:block' /> with <br className='block md:hidden' /> PHP</h1> */}
        <p className='text-[15px] leading-[28px] mt-5 text-justify'>PHP is a powerful server-side scripting language used to build dynamic websites and applications, offering flexibility, scalability, and seamless database integration for robust web solutions.</p>
      </div>
    </div>
  )
}

export default PhpBanner
