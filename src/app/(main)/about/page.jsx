import React from 'react';

export default function AboutPage() {
  const teamMembers = [
    { 
      name: "Michael Anderson", 
      role: "Founder & CEO", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" 
    },
    { 
      name: "Sarah Jenkins", 
      role: "Head of Design", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80" 
    },
    { 
      name: "David Mitchell", 
      role: "Marketing Director", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80" 
    },
    { 
      name: "Emily Carter", 
      role: "Customer Success", 
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80" 
    },
  ];

  const coreValues = [
    {
      title: "Uncompromising Quality",
      description: "We ensure the highest quality in every product we deliver, sourced from top-tier global manufacturers.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      )
    },
    {
      title: "Customer First",
      description: "Your satisfaction drives us. We provide 24/7 dedicated support to ensure a seamless shopping experience.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path>
        </svg>
      )
    },
    {
      title: "Lightning Delivery",
      description: "Experience fast, reliable shipping directly to your doorstep, keeping you updated every step of the way.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-800">
      
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Redefining Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Shopping Experience
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
            Discover a world of premium products crafted for your lifestyle. We blend quality, affordability, and exceptional service.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80" 
              alt="Our Story" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">The Beginning</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">How It All Started</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              What began as a small vision in a tiny garage in 2020 has now grown into a premium global e-commerce platform. Our founders recognized a massive gap in the market for high-quality products that wouldn't empty your wallet.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              Today, we collaborate with top-tier manufacturers worldwide to curate collections that inspire and elevate your everyday life. We are thrilled to have you on this journey with us.
            </p>
            <div className="flex flex-wrap items-center gap-10 border-t border-gray-200 pt-10">
              <div>
                <h4 className="text-4xl font-extrabold text-gray-900 mb-1">50k+</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div>
                <h4 className="text-4xl font-extrabold text-gray-900 mb-1">1,200+</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Products Sold</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Leadership</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The passionate minds and dedicated professionals working behind the scenes to make your shopping experience flawless.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="w-48 h-48 mb-6 overflow-hidden rounded-full shadow-lg border-4 border-white group-hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
              <p className="text-md text-gray-500 font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=80" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your lifestyle?</h2>
          <p className="text-gray-300 mb-10 text-xl font-light">
            Explore our latest exclusive collections and find exactly what you've been looking for.
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl active:scale-95 transform">
            Start Shopping Now
          </button>
        </div>
      </section>

    </div>
  );
}