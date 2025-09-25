import React from 'react'
import PythonBanner from '../../_components/Python/PythonLaravelBanner/LaravelBanner'
import PythonFramework from '../../_components/Python/PythonFramework/Framework'
import PythonCards from '../../_components/Python/PythonLaravelCards/LaravelCards'

const page = () => {
  return (
    <div>
      <PythonBanner/>
      <PythonFramework/>
      <PythonCards/>
    </div>
  )
}

export default page
