import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-red-500/20 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="w-24 h-24 text-red-500 animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for seems to have vanished into the digital void. 
          Don't worry, even the most advanced AI can't predict every path.
        </p>

        {/* Suggestions */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">What can you do?</h2>
          <ul className="space-y-3 text-gray-300 text-left">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>Check the URL for any typos</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>Go back to the previous page</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>Visit our homepage to start fresh</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>Use the search functionality (coming soon)</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/features', label: 'Features' },
              { to: '/documentation', label: 'Documentation' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-6 bg-red-500/10 border border-red-500/20 rounded-xl max-w-2xl mx-auto">
          <h4 className="text-lg font-semibold text-red-400 mb-2">Did you know?</h4>
          <p className="text-gray-300">
            The HTTP 404 error was named after room 404 at CERN, where the World Wide Web was born. 
            Just like how Vulcan GPT pushes the boundaries of AI interaction!
          </p>
        </div>
      </div>
    </div>
  );
};