import { getProductById } from '@/lib/data';
import React from 'react'

export default async function ProductDetailsPage({params}) {
    const {id} = await params;

    const product = await getProductById(id)
    console.log(product)
  return (
  <div className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-6 md:mb-10">
          <ol className="flex items-center space-x-2">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><span>/</span></li>
            <li className="capitalize"><a href="#" className="hover:text-blue-600 transition-colors">{product.category}</a></li>
            <li><span>/</span></li>
            <li className="text-gray-900 font-medium truncate">{product.title}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Left Column: Image Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Main Image (Responsive Aspect Ratio) */}
            <div className="relative w-full aspect-square bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-8 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              {/* Discount Badge on Image */}
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                {product.discountPercentage}% OFF
              </div>
            </div>
            
            {/* Thumbnail Gallery (Simulated for real-world feel) */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <button className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-50 rounded-xl border-2 border-blue-600 p-2">
                <img src={product.thumbnail} alt="Thumbnail" className="w-full h-full object-contain" />
              </button>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="mb-2">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{product.brand}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {product.title}
            </h1>

            {/* Rating & Stock */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm font-bold text-yellow-700">{product.rating}</span>
              </div>
              <a href="#reviews" className="text-sm text-gray-500 hover:text-blue-600 underline decoration-gray-300 underline-offset-4">
                {product.reviews.length} Customer Reviews
              </a>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm font-medium text-gray-700">{product.availabilityStatus} ({product.stock})</span>
              </div>
            </div>

            {/* Price section */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl md:text-5xl font-extrabold text-gray-900">${product.price}</span>
              <span className="text-lg text-gray-400 line-through mb-1">${product.originalPrice}</span>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded shadow-sm text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Shipping</p>
                  <p className="text-sm font-semibold text-gray-900">{product.shippingInformation}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded shadow-sm text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Warranty</p>
                  <p className="text-sm font-semibold text-gray-900">{product.warrantyInformation}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-black text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all active:scale-[0.98] shadow-lg shadow-gray-200 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                  Add to Cart
                </button>
                <button className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-200">
                  Buy Now
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Minimum order quantity: <span className="font-semibold text-gray-900">{product.minimumOrderQuantity} pieces</span>
              </p>
            </div>

          </div>
        </div>

        {/* Specifications & Reviews Section (Bottom) */}
        <div className="mt-16 md:mt-24 border-t border-gray-100 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Specs Table */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Specifications</h3>
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500">SKU</span>
                  <span className="font-medium text-gray-900">{product.sku}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500">Weight</span>
                  <span className="font-medium text-gray-900">{product.weight}g</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500">Dimensions</span>
                  <span className="font-medium text-gray-900">{product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="text-gray-500">Return Policy</span>
                  <span className="font-medium text-gray-900">{product.returnPolicy}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm capitalize">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div id="reviews" className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {product.reviews.map((review, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                        {review.reviewerName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{review.reviewerName}</p>
                        <div className="flex text-yellow-400 text-sm">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
