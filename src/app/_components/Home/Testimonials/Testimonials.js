'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { LiaStarSolid } from 'react-icons/lia'
import 'swiper/css'
import 'swiper/css/navigation'
import Avatar from '../../../../../Components/Images/avatar.jpg'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa' // add this import at top


const Testimonials = () => {
  const swiperRef = useRef(null)
  const reviews = [
    { name: 'Salam Bin Sultan, Branch Manager, UAE-Based Company', review: '"Our partnership with Techsolutionor has exceeded our expectations. Their innovative solutions and reliable support have been crucial in driving our branchs technology initiatives forward."' },
    { name: 'Shameen Mubarak, Team Leader, Oman-Based Company', review: 'We have been thoroughly impressed with Techsolutionors service. Their expertise in IT solutions and their ability to provide tailored support have been instrumental in enhancing our teams productivity and efficiency.', rating: 5 },
    { name: 'Shakil Ahmad, Owner, UAE-Based Company', review: "I am highly satisfied with the work of Techsolutionor. Their professional approach, combined with their technical skills, has made a significant impact on our business. They are a trusted partner who consistently delivers results.", rating: 5 },
    { name: 'Muhammad Qais, General Manager, LLC Company, UAE', review: "Our experience with Techsolutionor has been exceptional. Their team consistently delivers top-notch solutions that align perfectly with our business needs." },
    { name: "Ghasan Hazam, CEO, LLC Company, UAE", review: "Working with Techsolutionor has been a game-changer for us. Their innovative approach and commitment to excellence have significantly enhanced our IT infrastructure." },
    { name: "Muhammad Naddar, CEO, LLC Company, UAE", review: "I highly recommend Techsolutionor for their outstanding service and technical proficiency. Their team's ability to understand and address our unique requirements has led to successful project outcomes and improved operational efficiency." },
    { name: "Huma Sultan, Department Head, Dubai Consultancy Company", review: "The collaboration with Techsolutionor has been incredibly positive. Their dedication to delivering high-quality IT solutions and their responsiveness to our needs have greatly contributed to the success of our projects." }
  ]

  return (
    <div className="relative hidden md:block">
      <h1 className="text-center text-[38px] md:text-[48px] font-bold mb-12">
        Customer <span className="text-[#43b949]">Reviews</span>
      </h1>
      <div className='absolute left-1/2 -translate-x-1/2 top-[180px] bg-[#41b349] w-[900px] h-[400px] rounded-full blur-3xl opacity-60 z-0 overflow-visible'></div>
      <Swiper
        modules={[Navigation]}
        onSwiper={swiper => (swiperRef.current = swiper)}
        spaceBetween={-100}
        centeredSlides={true}
        slidesPerView={1.3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 1.5, spaceBetween: -150 },
          1200: { slidesPerView: 1.5, spaceBetween: -150 }
        }}
        className="w-full mx-auto"
        style={{ paddingBottom: "80px" }}
        navigation={false}
      >
        {reviews.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col relative items-center justify-center h-full">
              <div className="bg-black rounded-[18px] px-8 pt-16 pb-10 flex flex-col items-center w-[650px] h-[290px] mx-auto shadow-lg relative transition-all duration-300 scale-100 swiper-slide-active:scale-105 swiper-slide-prev:scale-95 swiper-slide-next:scale-95 mt-12">
                {/* Avatar: fix overflow so avatar is fully visible */}
                <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2" style={{ top: '-50px', zIndex: 10 }}>
                  <div className="w-[100px] h-[100px] rounded-full bg-[#e5e5e5] flex items-center justify-center  shadow overflow-hidden">
                    <Image src={Avatar} alt="avatar" className="w-[90px] h-[90px] rounded-full object-cover" width={90} height={90}/>
                  </div>
                </div>
                <div className="mt-2 w-full flex flex-col items-center">
                  <h2 className="text-white text-[18px] font-[500] text-center mb-3">{item.name}</h2>
                  <p className="text-white text-[18px]  text-center mb-4">{item.review}</p>
                  <div className="flex items-center justify-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <LiaStarSolid key={index} className="text-[#fbbf24] text-[28px]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation buttons */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-6 z-10">
          <button
            type="button"
            className="swiper-prev bg-[#43b949] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-[#36913a] transition"
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          >
            <span>&larr;</span>
          </button>
          <button
            type="button"
            className="swiper-next bg-[#43b949] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-[#36913a] transition"
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          >
            <span>&rarr;</span>
          </button>
        </div>
      </Swiper>
    </div>
  )
}

export default Testimonials


// export default Testimonials
