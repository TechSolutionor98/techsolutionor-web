import React from 'react'
import Swift from '../../../../../Components/Images/swift2.png'
import Reactjs from '../../../../../Components/Images/react2.png'
import ht from '../../../../../Components/Images/html2.png'
import Cplus from '../../../../../Components/Images/c2.png'
import Go from '../../../../../Components/Images/go2.png'
import Python from '../../../../../Components/Images/py2.png'
import Techbg from '../../../../../Components/Images/techbg.png'

const Technology = () => {
    const techs = [
        {bg: Techbg, Image: Swift, title: 'Swift', desc: 'We offer expertise in Swift, a modern and powerful programming language developed by Apple. Its ideal for building applications on iOS, macOS, watchOS, and tvOS. Known for its performance and safety, Swifts intuitive syntax makes it accessible to developers of all levels.'},
        {bg: Techbg, Image: Reactjs, title: 'React', desc: 'Our team is proficient in React, a front-end JavaScript library maintained by Meta. This open-source library is perfect for creating dynamic user interfaces for single-page, mobile, and server-rendered applications. React allows us to build scalable and maintainable applications with ease.'},
        {bg: Techbg, Image: ht, title: 'HTML', desc: 'We specialize in using HTML5, the core markup language of the web, to structure and present content effectively. With HTML5, we create highly responsive, cross-platform web pages that are both user-friendly and optimized for modern browsers, ensuring a seamless user experience'},
        {bg: Techbg, Image: Cplus, title: 'C++', desc: 'Our services include software development in C++, a versatile and object-oriented programming language. We use C++ to build robust applications, ensuring that complex data fields are managed efficiently, making it a great choice for software that requires performance optimization.'},
        {bg: Techbg, Image: Go, title: 'Go', desc: 'We leverage the Go programming language, developed by Google, for building fast and scalable applications. Its concurrency model, combined with memory safety and garbage collection, allows us to create high-performance solutions tailored to your business needs.'},
        {bg: Techbg, Image: Python, title: 'Python', desc: 'We offer development in Python, a highly readable and versatile programming language. Python’s ability to support multiple programming paradigms and its dynamic nature make it suitable for everything from web development to data analysis, all while maintaining code simplicity.'}

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
            <div className="tect-bottom">
                
            </div>
        </div>
    )
}

export default Technology
