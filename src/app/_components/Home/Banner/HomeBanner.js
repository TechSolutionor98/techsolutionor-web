"use client"
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import BannerImage from '../../../../../Components/Images/homebanner.png'
import Image from 'next/image';

const HomeBanner = () => {
  // Load the links preset for particles
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div className="relative overflow-hidden ">
      {/* Green Particles Background */}
      <div className="absolute inset-0 h-[40vh] md:h-[100vh] w-full z-[-1] pointer-events-none">
        <Particles
          id="tsparticles"
          className="w-full h-full"
          init={particlesInit}
          options={{
            preset: "links",
            background: { color: "#fff" },
            fullScreen: { enable: false },
            particles: {
              color: { value: "#41B349" },
              links: {
                color: "#41B349",
                enable: true,
                opacity: 0.5,
                width: 1.5,
                distance: 160,
              },
              move: {
                enable: true,
                speed: 2.0,
                direction: "none",
                outModes: { default: "out" },
                random: false,
                straight: false,
                attract: { enable: false }
              },
              number: {
                value: 80,
                density: { enable: true, area: 600 }
              },
              opacity: {
                value: 0.5,
                random: false
              },
              shape: { type: "circle" },
              size: {
                value: 3,
                random: true
              }
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: false }
              },
              modes: {
                repulse: { distance: 2000, duration: 1.2 } // large distance and duration for strong effect
              }
            }
          }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-2 top-10 items-center h-[35vh] -mt-10 md:h-[100vh] px-5 md:px-15 bg-transparent">
        {/* Left Side Text */}
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-[13px] md:text-[60px] font-[700] text-black leading-tight md:text-center">
            Build An <span className='md:bg-[#D9D9D9] md:rounded-[20px] md:px-2 '>Innovative</span> <br className=' hidden md:flex'/>
            And <br className='block md:hidden'/> Better Projects <br className=' hidden md:flex'/>
            With Us
          </h1>
          <p className="text-[#262323] hidden md:block text-[13px] md:text-[18px] max-w-xl leading-[20px]">
            Across the world, we are dedicated to meeting the diverse needs and preferences of our customers.
          </p>
          <p className='md:hidden block text-[#6d6d6d] text-[12px]'>In All Our The World. We <br className='block md:hidden'/> Serve The Needs and <br className='block md:hidden'/> Preferences of Customers.</p>
          <div className="hidden md:flex flex-col items-center h-[81px] w-[200px] md:w-[450px] sm:flex-row justify-between  mt-8 bg-[#262323] py-[10px] px-5 rounded-[40px]">
            <button className=" text-white bg-[#41b349] w-[138px] h-[40px] rounded-full text-[15px] font-semibold transition  hover:text-black hover:bg-white">
              View Services
            </button>
            <hr className='hidden md:block w-[1px] h-[40px] bg-white text-white'/>
            <button className="bg-[#41B349] text-white w-[125] h-[40px] rounded-full text-[15px] font-semibold transition hover:text-black hover:bg-white">
              Get A Quote
            </button>
          </div>

          <div className="flex md:hidden flex-row items-center  h-[60px] w-[200px] md:w-[450px] sm:flex-row justify-between  mt-8 bg-[#262323] py-[10px] px-3 rounded-[40px]">
            <button className=" text-white bg-[#41b349] w-[78px] h-[30px] rounded-full text-[10px] font-semibold transition  hover:text-black hover:bg-white">
              Get POS
            </button>
            <hr className='hidden md:block w-[1px] h-[40px] bg-white text-white'/>
            <button className="bg-[#41B349] text-white w-[90px] h-[30px] rounded-full text-[10px] font-semibold transition hover:text-black hover:bg-white">
              Get A Quote
            </button>
          </div>
        </div>

        {/* Right Side Image with Green Background */}
        <div className=" md:flex justify-center items-center relative md:min-h-[500px] md:mt-0 -mt-5">
          <div className="absolute right-0 top-0 h-[250px] w-[200px] md:h-[500px] md:w-[80%] bg-[#41B349] -mt-15" style={{borderRadius: "0px 0px 50% 50%"}}></div>
          <Image
            src={BannerImage}
            alt="Illustration"
            className="relative z-10 w-[200px] h-[200px] md:w-[460px] md:h-[500px] ml-0 md:ml-30 -mt-10"
            style={{ marginRight: "40px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
// // export default HomeBanner
//     </div>
//   )
// }

// export default HomeBanner
// export default HomeBanner
