import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Code, 
  Search, 
  Github,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { TerminalWindow } from '../components/TerminalWindow';

export const Home: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Multi-Model Support',
      description: 'Support for DeepSeek, OpenAI, Anthropic, and local models',
      badge: 'Popular'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enhanced Security',
      description: 'End-to-end encryption and secure API key management',
      badge: 'Secure'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Real-time Web Search',
      description: 'Integrated web search with Brave Search API',
      badge: 'New'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Local Models',
      description: 'Run AI models locally without API keys',
      badge: 'Featured'
    }
  ];

  const stats = [
    { icon: <Download className="w-6 h-6" />, value: '10K+', label: 'Downloads' },
    { icon: <Star className="w-6 h-6" />, value: '2.5K+', label: 'GitHub Stars' },
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Community Members' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                  <Zap className="w-4 h-4 mr-2" />
                  Version 1.0.0 Available
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-red-500">Vulcan</span>
                <span className="text-white">GPT</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                An advanced AI framework engineered to explore the frontiers of 
                <span className="text-red-400 font-semibold"> language model interactions</span> with enhanced capabilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://github.com/atulhacks/VulcanGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get Started
                </a>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-red-500/10"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Explore Features
                </Link>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Python 3.8+', 'MIT License', 'Cross-Platform', 'Open Source'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2 text-red-500">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Terminal */}
            <div className="lg:pl-8">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover what makes Vulcan GPT the most advanced AI framework for developers and researchers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full border border-red-500/30">
                    {feature.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View All Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Installation Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Quick Installation
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get up and running in minutes with our automated installation scripts
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Automatic dependency installation',
                  'Virtual environment setup',
                  'Local models support',
                  'Cross-platform compatibility'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/documentation"
                className="inline-flex items-center px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Installation Guide
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <div className="text-green-400 font-mono text-sm space-y-2">
                <div># Windows</div>
                <div className="text-white">run.bat</div>
                <div className="mt-4"># Linux / macOS</div>
                <div className="text-white">chmod +x run.sh</div>
                <div className="text-white">./run.sh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Vulcan GPT?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers and researchers who are already using Vulcan GPT to push the boundaries of AI interactions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/atulhacks/VulcanGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              Get Started on GitHub
            </a>
            <Link
              to="/documentation"
              className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Read Documentation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};