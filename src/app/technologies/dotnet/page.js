import React from 'react'
import Netanner from '../../_components/DotNet/NetBanner/JavaBanner'
import DotNetAsp from '../../_components/DotNet/DotNetAsp/DotNetAsp'
import CaseStudy from '../../_components/DotNet/CaseStudy/CaseStudy'
import DotNetAspCore from '../../_components/DotNet/DotNetAspCore/DotNetAsp'
import LearnAsp from '../../_components/DotNet/LearnAsp/LearnAsp'
import SecureApps from '../../_components/DotNet/SecureApps/SecureApps'

const DotNet = () => {
  return (
    <div>
      <Netanner/>
      <DotNetAsp/>
      <CaseStudy/>
      <DotNetAspCore/>
      <LearnAsp/>
      <SecureApps/>
    </div>
  )
}

export default DotNet
