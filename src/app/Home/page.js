import React from 'react'
import HomeBanner from '../_components/Home/Banner/HomeBanner'
import WhatWeDo from '../_components/Home/WhatWeDo/WhatWeDo'
import GoodServices from '../_components/Home/GoodServices/GoodServices'
import ServicesWeOffer from '../_components/Home/ServicesWeOffer/ServicesWeOffer'
import Projects from '../_components/Home/Projects/Projects'
import Technology from '../_components/Home/Technology/Technology'

const HomePage = () => {
  return (
    <div>
      <HomeBanner/>
      <WhatWeDo/>
      <GoodServices/>
      <ServicesWeOffer/>
      <Projects/>
      <Technology/>
    </div>
  )
}

export default HomePage
