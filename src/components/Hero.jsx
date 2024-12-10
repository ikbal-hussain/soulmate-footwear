import React from 'react';

 function Hero() {
  return (
    <div className="relative bg-gray-900 h-[60vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Soulmate Exclusive Footwear
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Discover your perfect pair from our exclusive collection of premium sportswear and athletic shoes.
        </p>
        <div className="mt-10">
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;