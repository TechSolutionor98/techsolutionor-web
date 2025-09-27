import React from 'react'
import HTMLBanner from '../../_components/Html/HTMLLaravelBanner/LaravelBanner'
import HtmlFramework from '../../_components/Html/HTMLFramework/Framework'
import HtmlCards from '../../_components/Html/HTMLLaravelCards/LaravelCards'

const HtmlPage = () => {
  return (
    <div>
      <HTMLBanner/>
      <HtmlFramework/>
      <HtmlCards/>
    </div>
  )
}

export default HtmlPage
