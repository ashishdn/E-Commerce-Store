import FeaturedProducts from '@/components/home/FeaturedProducts'
import ProductSection from '@/components/product/ProductSection'
import getProducts from '@/lib/data'
import React from 'react'

export default async function ProductPage() {
      const productData = await getProducts()
    
  return (
    <div>
      <ProductSection products={productData}></ProductSection>
    </div>
  )
}
