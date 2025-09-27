import React from 'react'
import WpBanner from '../../_components/Wp/WpLaravelBanner/LaravelBanner'
import WpFramework from '../../_components/Wp/WpFramework/Framework'
import WpCards from '../../_components/Wp/WpLaravelCards/LaravelCards'

const page = () => {
  return (
    <div>
      <WpBanner/>
      <WpFramework/>
      <WpCards/>
    </div>
  )
}

export default page
