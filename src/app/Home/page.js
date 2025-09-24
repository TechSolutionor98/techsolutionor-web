import React from 'react'
import HomeBanner from '../_components/Home/Banner/HomeBanner'
import WhatWeDo from '../_components/Home/WhatWeDo/WhatWeDo'
import GoodServices from '../_components/Home/GoodServices/GoodServices'
import ServicesWeOffer from '../_components/Home/ServicesWeOffer/ServicesWeOffer'
import Projects from '../_components/Home/Projects/Projects'
import Technology from '../_components/Home/Technology/Technology'
import Newsletter from '../_components/Home/Newsletter/Newsletter'
import Testimonials from '../_components/Home/Testimonials/Testimonials'
import ChallengeAccepted from '../_components/Home/ChallengeAccepted/ChallengeAccepted'
import Counter from '../_components/Home/Counter/Counter'

const HomePage = () => {
  return (
    <div>
      <HomeBanner/>
      <WhatWeDo/>
      <GoodServices/>
      <ServicesWeOffer/>
      <Projects/>
      <Technology/>
      <Newsletter/>
      <Testimonials/>
      <ChallengeAccepted/>
      <Counter/>
    </div>
  )
}

export default HomePage
