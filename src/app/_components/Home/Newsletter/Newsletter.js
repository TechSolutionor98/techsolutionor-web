import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full flex justify-center items-center  py-10">
      <div className="w-[1000px] h-[205px]  bg-[#43b949] rounded-[40px] shadow-[0_8px_32px_0_rgba(67,185,73,0.18)] px-6 md:px-0 py-5 flex flex-col items-center">
        <h2 className="text-white  text-[30px] md:text-[30px] font-[700] text-center mb-8 leading-tight">
          Ready To Get Started? Take Your Business<br />
          To The Next Level With Techsolutionor
        </h2>
        <form className="w-full flex flex-col md:flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Enter Your Website url"
            className="w-full md:w-[70%] h-[47px]  px-4 text-[16px] outline-none border-none shadow bg-white text-[#666] font-medium"
            style={{borderRadius: '16px 0 0 16px'}}
          />
          <button
          style={{borderRadius: '0 16px 16px 0'}}
            type="submit"
            className="w-full md:w-[220px] h-[47px]  bg-[#232323] text-white text-[16px] font-semibold transition hover:bg-black"
          >
            Get A Proposal
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
