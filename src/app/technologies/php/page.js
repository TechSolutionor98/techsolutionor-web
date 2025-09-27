import React from 'react'
import PhpBanner from '../../_components/Php/PhpLaravelBanner/LaravelBanner'
import PhpFramework from '../../_components/Php/PhpFramework/Framework'
import PhpCards from '../../_components/Php/PhpLaravelCards/LaravelCards'
// import PhpBanner from '../../_components/Html/HTMLLaravelBanner/LaravelBanner'

const PhpPage = () => {
  return (
    <div>
      <PhpBanner/>
      <PhpFramework/>
      <PhpCards/>
    </div>
  )
}

export default PhpPage
