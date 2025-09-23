import React from 'react'
import Swift from '../../../../../Components/Images/swift2.png'
import Reactjs from '../../../../../Components/Images/react2.png'
import ht from '../../../../../Components/Images/html2.png'
import Cplus from '../../../../../Components/Images/c2.png'
import Go from '../../../../../Components/Images/go2.png'
import Python from '../../../../../Components/Images/py2.png'
import Techbg from '../../../../../Components/Images/techbg.png'
import RectBg1 from '../../../../../Components/Images/reactangle1.png'
import RectBg2 from '../../../../../Components/Images/reactangle2.png'
import RectBg3 from '../../../../../Components/Images/reactangle3.png'
import RectBg4 from '../../../../../Components/Images/reactangle4.png'
import RectBg5 from '../../../../../Components/Images/reactangle5.png'
import RectBg6 from '../../../../../Components/Images/reactangle6.png'
import Techcard from '../../../../../Components/Images/techcards.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image'

const Technology = () => {
    const techs = [
        { RectBg: RectBg1, bg: Techbg, Image: Swift, title: 'Swift', desc: 'We offer expertise in Swift, a modern and powerful programming language developed by Apple. Its ideal for building applications on iOS, macOS, watchOS, and tvOS. Known for its performance and safety, Swifts intuitive syntax makes it accessible to developers of all levels.' },
        { RectBg: RectBg2, bg: Techbg, Image: Reactjs, title: 'React', desc: 'Our team is proficient in React, a front-end JavaScript library maintained by Meta. This open-source library is perfect for creating dynamic user interfaces for single-page, mobile, and server-rendered applications. React allows us to build scalable and maintainable applications with ease.' },
        { RectBg: RectBg3, bg: Techbg, Image: ht, title: 'HTML', desc: 'We specialize in using HTML5, the core markup language of the web, to structure and present content effectively. With HTML5, we create highly responsive, cross-platform web pages that are both user-friendly and optimized for modern browsers, ensuring a seamless user experience' },
        { RectBg: RectBg4, bg: Techbg, Image: Cplus, title: 'C++', desc: 'Our services include software development in C++, a versatile and object-oriented programming language. We use C++ to build robust applications, ensuring that complex data fields are managed efficiently, making it a great choice for software that requires performance optimization.' },
        { RectBg: RectBg5, bg: Techbg, Image: Go, title: 'Go', desc: 'We leverage the Go programming language, developed by Google, for building fast and scalable applications. Its concurrency model, combined with memory safety and garbage collection, allows us to create high-performance solutions tailored to your business needs.' },
        { RectBg: RectBg6, bg: Techbg, Image: Python, title: 'Python', desc: 'We offer development in Python, a highly readable and versatile programming language. Python’s ability to support multiple programming paradigms and its dynamic nature make it suitable for everything from web development to data analysis, all while maintaining code simplicity.' }

    ]
    return (
        <div>
            <div className="tech-top ">
                <div className="textpart bg-[#262323] w-full h-[107px] flex items-center justify-center">
                    <h1 className='text-white text-[48px] font-[700] text-center'>Technology</h1>
                </div>
                <div className="subtext flex items-center justify-center w-full mt-5 px-5 md:px-0">
                    <p className='text-justify w-[892px] text-[15px] leading-[20px]'>In web development, we focus on leveraging the most effective tools, frameworks, and techniques to create and maintain websites and web applications. Our approach ensures that each project is built with modern practices that enhance both performance and user experience. From front-end to back-end development, we ensure that your web solutions are scalable, secure, and optimized for success.</p>
                </div>
            </div>
            <div className="tect-bottom flex flex-col items-center justify-center ">
                <div className="tect-cards flex flex-wrap gap-5 justify-center px-5 md:px-0 pb-10 mt-10">
                    {techs.map((item, i) => (
                        <div className="card w-[330px] h-[330px] relative rounded-[29px]" style={{boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'}} key={i}>
                            <div className="images-top">
                                <Image src={item.RectBg} alt='Cardbg w-full h-[146px]' width={1000} height={1000} />
                                <Image src={Techcard} className='w-[330px] absolute border h-[146px] top-0 left-0 z-10' width={1000} height={100} />
                            </div>
                            <div className="bottom-data flex flex-col items-center text-center px-5 pb-5">
                                <Image src={item.Image} width={117} height={117} className='-mt-20 -mb-5 w-[117px] h-[117px]' />
                                <h1 className='text-[25px] font-[600]'>{item.title}</h1>
                                <p className='text-[10px] leading-[22.5px]'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="explore-more ">
                    <button className=' gap-2 bg-black text-white h-[40px] w-[160px] flex items-center justify-center text-[15px] font-[500] hover:bg-[#41b349] transition duration-300 ease-in-out cursor-pointer'>Explore More <FaArrowRightLong className='mt-1'/></button>
                </div>
            </div>
        </div>
    )
}

export default Technology
