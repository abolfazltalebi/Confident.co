const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Confident.co</h1>
        <p className="text-xl text-gray-600">Empowering individuals to build confidence and achieve their goals</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At Confident.co, we believe that confidence is the foundation of success. Our platform provides 
          the tools, resources, and community support needed to help individuals develop the confidence 
          they need to pursue their dreams and achieve their full potential.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Personalized confidence-building programs
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Expert guidance and mentorship
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Community support and networking
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Progress tracking and analytics
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Thousands of users have transformed their lives through our platform.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600">Our team consists of certified coaches and confidence experts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
