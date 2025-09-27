import React from 'react'
import LaravelIcon from '../../../../../Components/Images/fluttericon.png'
import Image from 'next/image'

const FlutterFramework = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:h-[302px] mt-10'>
            <div className="left-image basis-[40%] flex items-center justify-center ">
                <Image src={LaravelIcon} alt="Laravel Icon" width={1000} height={1000} className='w-[200px] h-[200px] md:w-[436px] md:h-[213px]'/>
            </div>
            <div className="text-area basis-[60%] flex flex-col justify-between h-full py-5 px-5 gap-6 md:gap-5 md:px-0 md:pr-30">
                <h1 className='text-[20px] font-[700] leading-[24px]'>Building Seamless Multi-Platform Applications</h1>
                <p className='text-[15px] leading-[28px] md:mt-5 text-justify'>Flutter is a comprehensive framework designed to develop natively compiled applications for mobile, web, and desktop, all from a single codebase. It empowers developers to create visually stunning, high-performance, and fully customized applications, ensuring a seamless user experience across different platforms. Flutter stands out for its ability to streamline development, making it efficient while maintaining design quality and performance.
</p>
                <button className='text-[15px] font-[700] bg-[#41b349] w-[150px] h-[39px] text-white' style={{boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)"}}>Key Features</button>
            </div>

        </div>
    )
}

export default FlutterFramework
