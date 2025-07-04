import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold">
                <span className="text-red-500">Vulcan</span>
                <span className="text-white">GPT</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              An advanced AI framework engineered to explore the frontiers of language model interactions with enhanced capabilities.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-red-500 text-white"
                />
                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/atulhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/atulhack"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:vulcangpt@gmail.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Buy Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/atulhacks/VulcanGPT/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Support</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vulcan GPT by ATUL KUMAR. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Refund Policy
            </Link>
            <Link to="/contact-us" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};