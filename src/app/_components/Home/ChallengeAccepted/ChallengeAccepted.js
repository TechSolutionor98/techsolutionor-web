"use client"
import React from 'react'
import CardsBg from '../../../../../Components/Images/challengecardsbg.png'
import Eclipse from '../../../../../Components/Images/eclipse3.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from 'next/image';
const ChallengeAccepted = () => {
  const challenges = [
    { title: "My Website Isn’t Getting Enough Traffic", desc: "Without consistent website traffic, you’re missing out on valuable visitors, leads, and potential revenue. But don’t worry our custom SEO solutions are designed to get your site back on track. By optimizing your online presence, we help boost your visibility in search engine results, ensuring more people find and visit your site.", list: ['Boost Your Presence In Search Results', 'Capture Targeted Site Traffic ', 'Turn Site Visitors Into Leads And Customers'] },
    { title: "My CPL From Digital Ad Campaigns Is Too High", desc: "Tired of Wasting Dollars on Ad Compaigns? Our paid Ad Experts can help Streamline youe Bidding Strategy And Refine Ad Targeting, So you get the Maximum Impact from your Ads.", list: ['Refine Ad Targeting', 'Engage your Audience Where they Browse Online', 'Maximize Paid Ad Project'] },
    { title: "My Website Isn’t Generating Enough Leads", desc: "Struggling To get Qualified Leads in your Pipeline? Turn up the Dial on your Lead Generation with Digital Marketing Plans, Tailored to your Goals And Budget.", list: ['Fill Up Your Lead Pipeline', 'Reach your Most Valuable Audience ', 'Maximize Conversion Opportunities'] }
  ]
  return (
    <div className='relative mt-20'>
      <h1 className='text-[36px] font-[800] text-center'><span className='text-black uppercase p-[10px] bg-[#d9d9d9] '>CHALLENGE</span> <span className='text-[#41b349]'>ACCEPTED</span></h1>
      <p className='text-center text-[15px] mt-5 text-[#232323]'>Tech Solutionor Solves Your Digital Bottlenecks</p>
      <div className="cards bg-[#262323] w-full h-[500px] mt-20 relative">
        {/* IF Image of stars wll come */}
        <div className="challaenge-cards flex items-center justify-center h-full px-5 md:px-10 gap-5 md:gap-5 ">
          {challenges.map((item, i) => (
            <div key={i} className={`card w-[350px] h-[450px] rounded-[20px] flex flex-col items-start -mt-40  px-7 py-5 gap-2 text-black bg-white`} style={{ backgroundImage: `url(${CardsBg.src})`, backgroundSize: 'cover', boxShadow: ' 0px 7px 8px 0px rgba(0, 0, 0, 0.5)' }}>
              <h1 className='text-[30px] font-[600] leading-[30px] text-center'>{item.title}</h1>
              <p className='text-[15px] mt-3 leading-[20px] '>{item.desc}</p>
              <ul className='list-disc text-[15px] mt-3 leading-[20px] ml-4'>
                {item.list.map((listItem, index) => (
                  <li key={index} className='mb-1'>{listItem}</li>
                ))}
              </ul>
              <p
                className='flex items-center gap-2 cursor-pointer'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Explore More Services <FaLongArrowAltRight className='font-extralight mt-1' />
              </p>
            </div>
          ))}
        </div>
        <div className="eclipse md:block hidden absolute right-0 -bottom-40">
          <Image src={Eclipse} alt="img" width={250} height={250} className=' ' />
          {/* <Image src={Eclipse} alt="img" width={200} height={200} className='w-[40px] h-[40px] md:w-[118px] md:h-[298px] ' /> */}
        </div>

      </div>
    </div>

  )
}

export default ChallengeAccepted
