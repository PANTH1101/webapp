import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Small Headline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 font-medium">
          Shree Swami Stationery and Xerox
        </p>

        {/* Large Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
          Quality stationery.
          <br />
          Delivered.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Your trusted partner for premium stationery, printing, and binding services in Idar, Gujarat.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProducts}
            className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            Explore products
          </button>
          <a
            href="https://wa.me/919925461184?text=Hello,%20I%20want%20to%20know%20about%20your%20stationery%20and%20xerox%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Contact us →
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
