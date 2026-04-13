import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-4">
            Visit us.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We're here to help with all your stationery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Phone
              </h3>
              <a
                href="tel:+919925461184"
                className="text-2xl text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +91 99254 61184
              </a>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Address
              </h3>
              <p className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed">
                Gokuldham Landmark, 36<br />
                Himatnagar - Idar State Highway Rd<br />
                Idar, Gujarat 383430
              </p>
            </div>

            {/* WhatsApp */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/919925461184?text=Hello,%20I%20want%20to%20know%20about%20your%20stationery%20and%20xerox%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
              >
                Chat with us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg h-96 transition-colors">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.928034649455!2d72.99830878847523!3d23.82221575539212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395da3ee6e586195%3A0x3efea107537423c5!2sShree%20Swami%20Stationery%20and%20Xerox!5e0!3m2!1sen!2sin!4v1776107001047!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
