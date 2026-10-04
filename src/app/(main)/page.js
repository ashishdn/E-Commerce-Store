import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import getProducts from '@/lib/data'
import React from 'react'

export default async function Home() {
  const productData = await getProducts()
  return (
    <div>
      <Hero></Hero>
      <FeaturedProducts productData={productData}></FeaturedProducts>
    </div>
  )
}
