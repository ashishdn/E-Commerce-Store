'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedProducts({ products }) {
  const productData = products.slice(0, 6);
  // const products = productData
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto  mb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Featured Products
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Discover our exclusive collection of top-rated beauty and cosmetic
          products. Find exactly what you need to upgrade your daily routine!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {productData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Product Image & Discount Badge */}
            <div className="relative bg-gray-50 flex justify-center items-center p-4">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={400}
                className="h-48 w-full object-contain"
              />
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                -{product.discountPercentage}%
              </span>
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col flex-grow">
              {/* Brand & Category */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-indigo-500 uppercase tracking-wider font-semibold">
                  {product.brand}
                </span>
                <span className="flex items-center text-yellow-500 text-sm font-medium">
                  ★ {product.rating}
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                {product.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Price & Stock Status */}
              <div className="flex justify-between items-end mt-auto mb-4">
                <div>
                  <span className="text-2xl font-black text-gray-900">
                    ${product.price}
                  </span>
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                  {product.availabilityStatus}
                </span>
              </div>

              {/* Add to Cart Button */}
              <Link href={`/product/${product.id}`}>
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200">
                See Details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
