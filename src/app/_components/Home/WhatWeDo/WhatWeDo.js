import Image from 'next/image'
import React from 'react'
import coorprate from '../../../../../Components/Images/coorporative.png'
import goal from '../../../../../Components/Images/goals.png'
import rocket from '../../../../../Components/Images/rocket.png'

const WhatWeDo = () => {
    const cards = [
        {Image: coorprate,title: "Cooperative Staff", desc: "Our team is the cornerstone of our success. Composed of highly skilled professionals, our cooperative staff works collaboratively to deliver top notch tech solutions tailored to meet the unique needs of each client. With a shared commitment to excellence and innovation, we ensure seamless project execution, from initial start to final delivery."},
        {Image: goal,title: "Goals Achiever", desc: "Our team of dedicated professionals is driven by a passion for excellence and a commitment to turning your vision into reality. We set ambitious goals and consistently surpass them through meticulous planning, idea problem solving, and unwavering perseverance. Whether it’s developing cutting-edge software"},
        {Image: rocket,title: "Business Grow", desc: "We provide innovative tech solutions and comprehensive IT services designed to optimize operations, enhance productivity, and drive revenue. Our team of experts leverages the latest technologies and industry best practices to create scalable solutions that adapt to your evolving business needs. "},
    ]
  return (
    <div className='mt-10'>
      <div className="heading bg-[#41b349] w-full h-[110px] flex justify-center items-center text-white font-bold text-[20px] md:text-[30px]">
        <h1 className='text-[30px] md:text-[50px] font-[800] uppercase'>WHAT WE DO</h1>
      </div>
      <div className="cards bg-[#181818] w-full px-0 py-1 text-white mt-5">
        <div className="cards-maping flex flex-col md:flex-row justify-center items-center gap-10 md:gap-3 mt-10 mb-10 px-5 md:px-0">
            {cards.map((item, i)=>(
                <div key={i} className='bg-[#262323] flex flex-col items-center gap-0 w-full  md:w-[350px] h-[400px] md:h-[470px]  pt-5 pb-5 '>
                    <Image src={item.Image} alt="img" width={800} height={800} className='w-[45px] h-[45px] md:w-[45px] md:h-[45px] '/>
                    <h1 className='text-[25px] font-[700] text-center mt-5 '>{item.title}</h1>
                    <p className='text-[14px] md:text-[16px] leading-[30px] font-light text-left mt-3 px-3 md:px-5'>{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  )
}

export default WhatWeDo
