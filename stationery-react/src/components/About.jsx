import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div
        ref={sectionRef}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-6">
          Quality you can trust.
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          For years, we've been serving the Idar community with premium stationery products 
          and professional printing services. Our commitment to quality and customer satisfaction 
          has made us the trusted choice for students, professionals, and businesses alike.
        </p>
      </div>
    </section>
  );
};

export default About;
