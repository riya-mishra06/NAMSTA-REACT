import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-6xl">👋</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            About Us
          </h1>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:-translate-y-2">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To deliver the best food experience by connecting you with amazing local restaurants.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:-translate-y-2">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Making food delivery fast, reliable, and accessible to everyone, everywhere.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:-translate-y-2">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              💡
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Our Values
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Quality, speed, and customer satisfaction are at the heart of everything we do.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-12 mb-16 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100 dark:text-blue-200 text-lg">Restaurants</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100 dark:text-blue-200 text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100 dark:text-blue-200 text-lg">Orders Delivered</div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg border border-gray-200 dark:border-gray-700 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-4">
              We started with a simple idea: everyone deserves access to great food without the hassle. 
              What began as a small project has grown into a platform that connects thousands of food lovers 
              with their favorite local restaurants.
            </p>
            <p className="mb-4">
              Our team is passionate about technology, food, and creating exceptional user experiences. 
              We believe that ordering food should be easy, fast, and enjoyable.
            </p>
            <p>
              Today, we're proud to serve communities across the region, partnering with restaurants 
              big and small to bring delicious meals right to your doorstep.
            </p>
          </div>
        </div>

        {/* Team/Profile Section (Outlet) */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Meet Our Team
          </h2>
          <Outlet />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to explore?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Discover amazing restaurants and order your favorite meals today
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Browse Restaurants
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;