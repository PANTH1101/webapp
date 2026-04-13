import React, { useEffect, useRef, useState } from 'react';

const products = [
  { 
    name: 'Notebooks & Registers', 
    price: 'From ₹20', 
    icon: '📓',
    description: 'Premium quality notebooks for students and professionals'
  },
  { 
    name: 'Pens & Pencils', 
    price: 'From ₹5', 
    icon: '✏️',
    description: 'Wide range of writing instruments'
  },
  { 
    name: 'Files & Folders', 
    price: 'From ₹15', 
    icon: '📁',
    description: 'Organize your documents efficiently'
  },
  { 
    name: 'Markers & Highlighters', 
    price: 'From ₹10', 
    icon: '🖍️',
    description: 'Vibrant colors for all your needs'
  },
  { 
    name: 'Paper & Sheets', 
    price: 'From ₹200', 
    icon: '📄',
    description: 'High-quality printing paper'
  },
  { 
    name: 'Office Supplies', 
    price: 'From ₹10', 
    icon: '📎',
    description: 'Everything for your office'
  },
];

const ProductCard = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon Container */}
      <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 transition-colors">
        <span className="text-3xl">{product.icon}</span>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {product.description}
        </p>
        <p className="text-base font-medium text-gray-900 dark:text-white pt-2">
          {product.price}
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4">
            Our products.
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Premium stationery for every need.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
