import React from 'react'
import GoogleBanner from '../../_components/GoogleAds/GoogleBanner/JavaBanner'
import GoogleFramework from '../../_components/GoogleAds/GoogleFramework/Framework'
import GoogleCards from '../../_components/GoogleAds/GoogleCards/LaravelCards'

const GoogleAds = () => {
  return (
    <div>
      <GoogleBanner/>
      <GoogleFramework/>
      <GoogleCards/>
    </div>
  )
}

export default GoogleAds
