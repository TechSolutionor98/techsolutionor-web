import React from 'react'
import ASPNet from '../../../../../Components/Images/aspdotnet.svg'
import Image from 'next/image'

const DotNetAsp = () => {
    return (
        <div className='w-full my-20'>
            <h1 className='text-center text-[36px] font-[500]'>ASP.NET</h1>
            <div className="botom-part flex items-center justify-center gap-10 md:gap-20 mt-10 flex-col md:flex-row px-5 md:px-20">
                <div className="left-asp">
                    <Image alt='ASP DOT NET' src={ASPNet} width={1000} height={1000} className='' />
                </div>
                <div className="right-asp flex flex-col items-start gap-5 ">
                    <h1 className='text-[36px] font-[500] leading-[38px]'>Build web apps fast with one stack</h1>
                    <p className='text-[16px] font-[300] leading-[33px]'>ASP.NET Core comes with everything you need to build web apps including Blazor, a web UI framework for quickly creating fast, secure, and robust web apps that run anywhere.</p>
                    <button className='bg-[#fde851] w-[153px] h-[49px] flex items-center justify-center text-black hover:text-white duration-300 transition ease-in-out text-[14px] font-[700]'>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default DotNetAsp
