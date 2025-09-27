import React from 'react'
import ShopifyBanner from '../../_components/Shopify/ShopifyBanner/JavaBanner'
import ShopifyFramework from '../../_components/Shopify/ShopifyFramework/Framework'
import ShopifyCards from '../../_components/Shopify/JsCards/LaravelCards'

const Shopify = () => {
  return (
    <div>
      <ShopifyBanner/>
      <ShopifyFramework/>
      <ShopifyCards/>
    </div>
  )
}

export default Shopify
