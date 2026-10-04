import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gray-50">
      {/* Container mx-auto and Padding for height (No min-h used) */}
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
        
        {/* Responsive Flex Layout: Stack on mobile, side-by-side on large screens */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
              🔥 2026 New Arrivals
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Discover Quality Products for Your Everyday Life
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 sm:px-8 lg:px-0">
              Explore our exclusive collection of electronics, fashion, and lifestyle essentials. We bring the best deals directly to your doorstep.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                href="#products" 
                className="px-8 py-3.5 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 text-center"
              >
                Shop Now
              </Link>
              <Link 
                href="#categories" 
                className="px-8 py-3.5 w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-sm transition-colors duration-300 text-center"
              >
                Explore Categories
              </Link>
            </div>
            
          </div>

          {/* Right Side: Professional Image */}
          <div className="w-full lg:w-1/2">
            {/* Image Container with soft shadow and rounded corners */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1000&q=80" 
                alt="E-commerce shopping bag and boxes" 
                width={1000}
                height={667}
                priority // Priority prop added to load hero image faster
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              {/* Optional Overlay for a premium look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}