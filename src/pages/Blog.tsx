 ;

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dental Health Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest dental care tips, news, and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Dental Care</span>
                <span className="mx-2">•</span>
                <span>March 15, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                The Importance of Regular Dental Checkups
              </h3>
              <p className="text-gray-600 mb-4">
                Regular dental checkups are essential for maintaining good oral health and preventing serious dental problems...
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Cosmetic Dentistry</span>
                <span className="mx-2">•</span>
                <span>March 12, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transform Your Smile with Cosmetic Dentistry
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how modern cosmetic dentistry can enhance your smile and boost your confidence...
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Orthodontics</span>
                <span className="mx-2">•</span>
                <span>March 10, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modern Orthodontic Solutions for Adults
              </h3>
              <p className="text-gray-600 mb-4">
                It's never too late to straighten your teeth. Learn about adult orthodontic options...
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 4 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Emergency Care</span>
                <span className="mx-2">•</span>
                <span>March 8, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What to Do in a Dental Emergency
              </h3>
              <p className="text-gray-600 mb-4">
                Be prepared for dental emergencies with these essential tips and guidelines...
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 5 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Preventive Care</span>
                <span className="mx-2">•</span>
                <span>March 5, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Daily Oral Hygiene Routine
              </h3>
              <p className="text-gray-600 mb-4">
                Master the perfect daily oral hygiene routine for optimal dental health...
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>

          {/* Blog Post 6 */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Dental Implants</span>
                <span className="mx-2">•</span>
                <span>March 3, 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Understanding Dental Implants
              </h3>
              <p className="text-gray-600 mb-4">
                Everything you need to know about dental implants and the procedure...
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
