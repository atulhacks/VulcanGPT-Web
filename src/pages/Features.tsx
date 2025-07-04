import React, { useState } from 'react';
import { 
  Cpu, 
  Shield, 
  Search, 
  Github, 
  Download, 
  Terminal, 
  Zap, 
  Globe,
  Lock,
  Code,
  Database,
  Settings,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';

export const Features: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const features = [
    {
      id: 1,
      icon: <Cpu className="w-8 h-8" />,
      title: 'Local Models Support',
      description: 'Run AI models locally without API keys using llama-cpp-python. No internet connection required, with full control over model parameters and execution.',
      category: 'core',
      badge: 'Featured',
      badgeColor: 'bg-yellow-500',
      highlights: ['Offline-Ready', 'Privacy-Focused', 'Customizable'],
      codeExample: 'python VulcanGPT.py --local-model'
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Model Support',
      description: 'Use multiple LLM providers (DeepSeek, OpenAI, Anthropic, OpenRouter) with a single unified interface.',
      category: 'core',
      badge: 'Popular',
      badgeColor: 'bg-blue-500',
      highlights: ['DeepSeek', 'OpenAI', 'Anthropic', 'OpenRouter']
    },
    {
      id: 3,
      icon: <Shield className="w-8 h-8" />,
      title: 'Enhanced Security',
      description: 'End-to-end encryption, API key rotation, and secure mode for private conversations.',
      category: 'security',
      badge: 'Secure',
      badgeColor: 'bg-green-500',
      highlights: ['E2E Encryption', 'Key Rotation', 'Secure Storage']
    },
    {
      id: 4,
      icon: <Github className="w-8 h-8" />,
      title: 'GitHub Integration',
      description: 'GitHub integration for repository management and issue creation, plus document analysis.',
      category: 'integration',
      badge: 'New',
      badgeColor: 'bg-purple-500',
      highlights: ['Repo Management', 'Issue Creation', 'Document Analysis']
    },
    {
      id: 5,
      icon: <Search className="w-8 h-8" />,
      title: 'Real-time Web Search',
      description: 'Search the web using Brave Search API with fallback mechanisms for offline use.',
      category: 'advanced',
      badge: 'Advanced',
      badgeColor: 'bg-orange-500',
      highlights: ['Brave Search', 'Real-time', 'Offline Fallback']
    },
    {
      id: 6,
      icon: <Terminal className="w-8 h-8" />,
      title: 'Advanced System Prompts',
      description: 'Create, manage, and switch between different system prompts for various use cases.',
      category: 'core',
      highlights: ['Custom Prompts', 'Easy Switching', 'Use Case Specific']
    },
    {
      id: 7,
      icon: <Download className="w-8 h-8" />,
      title: 'Conversation Export',
      description: 'Export your conversations to markdown, PDF, or HTML formats for easy sharing and reference.',
      category: 'advanced',
      highlights: ['Multiple Formats', 'Easy Sharing', 'Reference']
    },
    {
      id: 8,
      icon: <Code className="w-8 h-8" />,
      title: 'Command System',
      description: 'Powerful command system for controlling the application and accessing advanced features.',
      category: 'advanced',
      badge: 'New',
      badgeColor: 'bg-red-500',
      highlights: ['Powerful Commands', 'Easy Control', 'Advanced Features']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Features', count: features.length },
    { id: 'core', label: 'Core Features', count: features.filter(f => f.category === 'core').length },
    { id: 'advanced', label: 'Advanced', count: features.filter(f => f.category === 'advanced').length },
    { id: 'security', label: 'Security', count: features.filter(f => f.category === 'security').length },
    { id: 'integration', label: 'Integrations', count: features.filter(f => f.category === 'integration').length }
  ];

  const filteredFeatures = activeFilter === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeFilter);

  const stats = [
    { icon: <Zap className="w-6 h-6" />, value: '8+', label: 'Core Features' },
    { icon: <Database className="w-6 h-6" />, value: '4+', label: 'AI Providers' },
    { icon: <Settings className="w-6 h-6" />, value: '20+', label: 'Configuration Options' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Powerful Capabilities
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Explore <span className="text-red-500">Features</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced capabilities that make Vulcan GPT the most comprehensive AI framework for developers and researchers
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl">
                <div className="text-red-500 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
                <span className="ml-2 px-2 py-1 bg-black/30 rounded-full text-xs">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="group relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 ${feature.badgeColor} text-white text-xs font-medium rounded-full`}>
                      {feature.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Highlights */}
                {feature.highlights && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {/* Code Example */}
                {feature.codeExample && (
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400 border border-gray-700">
                    {feature.codeExample}
                  </div>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Vulcan GPT?
            </h2>
            <p className="text-xl text-gray-400">
              See how we compare to other AI frameworks
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-6 text-white font-semibold">Feature</th>
                  <th className="text-center p-6 text-red-500 font-semibold">Vulcan GPT</th>
                  <th className="text-center p-6 text-gray-400 font-semibold">Other Frameworks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Local Model Support', vulcan: true, others: false },
                  { feature: 'Multi-Provider Support', vulcan: true, others: 'Limited' },
                  { feature: 'Real-time Web Search', vulcan: true, others: false },
                  { feature: 'GitHub Integration', vulcan: true, others: false },
                  { feature: 'Advanced Security', vulcan: true, others: 'Basic' },
                  { feature: 'Open Source', vulcan: true, others: 'Varies' },
                  { feature: 'Easy Installation', vulcan: true, others: 'Complex' },
                  { feature: 'Command System', vulcan: true, others: false }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800/50">
                    <td className="p-6 text-gray-300">{row.feature}</td>
                    <td className="p-6 text-center">
                      {row.vulcan === true ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-red-500">{row.vulcan}</span>
                      )}
                    </td>
                    <td className="p-6 text-center text-gray-400">
                      {row.others === true ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : row.others === false ? (
                        <span className="text-red-500">✗</span>
                      ) : (
                        row.others
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Download Vulcan GPT today and start exploring the future of AI interactions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/atulhacks/VulcanGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </a>
            <a
              href="/documentation"
              className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <Star className="w-5 h-5 mr-2" />
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};