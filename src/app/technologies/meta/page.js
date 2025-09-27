import React from 'react'
import MetaBanner from '../../_components/Meta/MetaBanner/JavaBanner'
import MetaFramework from '../../_components/Meta/MetaFramework/Framework'
import MetaCards from '../../_components/Meta/MetaCards/LaravelCards'

const MetaPage = () => {
  return (
    <div>
      <MetaBanner/>
      <MetaFramework/>
      <MetaCards/>
    </div>
  )
}

export default MetaPage
