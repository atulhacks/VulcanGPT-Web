import React from 'react';
import { User, Github, Twitter, Mail, ExternalLink, Award, Code, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const achievements = [
    { icon: <Code className="w-6 h-6" />, title: '10+ Years', description: 'Software Development' },
    { icon: <Award className="w-6 h-6" />, title: '50+ Projects', description: 'Open Source Contributions' },
    { icon: <Heart className="w-6 h-6" />, title: '1000+', description: 'Community Members' },
  ];

  const skills = [
    'Python', 'AI/ML', 'Natural Language Processing', 'API Development',
    'CLI Applications', 'System Architecture', 'Open Source', 'Community Building'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="text-red-500">Vulcan GPT</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about the vision, technology, and the passionate developer behind this revolutionary AI framework
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Vulcan GPT was born from a simple yet powerful vision: to democratize access to advanced AI capabilities 
                while maintaining complete user control and privacy. We believe that AI should be accessible, transparent, 
                and unrestricted.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our framework bridges the gap between cutting-edge cloud-based models and local AI solutions, 
                giving users the flexibility to choose their preferred approach based on their specific needs, 
                privacy requirements, and computational resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <div className="text-red-500 mb-2 flex justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-xl font-bold text-white">{achievement.title}</div>
                    <div className="text-sm text-gray-400">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-transparent p-8 rounded-2xl border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-white">Privacy First</div>
                    <div className="text-gray-400">Your data stays yours, always</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-white">Open Source</div>
                    <div className="text-gray-400">Transparent and community-driven</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-white">Innovation</div>
                    <div className="text-gray-400">Pushing the boundaries of AI interaction</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-white">Accessibility</div>
                    <div className="text-gray-400">AI for everyone, regardless of resources</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet the Developer
            </h2>
            <p className="text-xl text-gray-400">
              The mind behind Vulcan GPT
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Atul Hack"
                  className="w-full h-full object-cover rounded-full border-4 border-red-500/50"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/20 to-transparent"></div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Atul Hack</h3>
              <p className="text-xl text-red-400 mb-6">AI Engineer & Python Developer</p>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Passionate about pushing the boundaries of AI and language models. With a background in computer science 
                and natural language processing, I created Vulcan GPT to provide a powerful, unrestricted framework for 
                AI interactions that puts users in complete control.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My journey in AI began over a decade ago, and I've witnessed the incredible evolution of language models. 
                Vulcan GPT represents my vision of what AI interaction should be: powerful, flexible, and accessible to everyone.
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/atulhacks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/atulhack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@vulcangpt.dev"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400">
              Built with modern technologies for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Core Language',
                technologies: ['Python 3.8+', 'AsyncIO', 'Type Hints', 'Dataclasses']
              },
              {
                category: 'AI & ML',
                technologies: ['llama-cpp-python', 'Transformers', 'OpenAI API', 'Anthropic API']
              },
              {
                category: 'Web & APIs',
                technologies: ['FastAPI', 'Requests', 'WebSockets', 'REST APIs']
              },
              {
                category: 'Security',
                technologies: ['Cryptography', 'JWT', 'API Key Rotation', 'Secure Storage']
              },
              {
                category: 'Development',
                technologies: ['Git', 'GitHub Actions', 'Docker', 'Virtual Environments']
              },
              {
                category: 'Documentation',
                technologies: ['Markdown', 'Sphinx', 'Type Annotations', 'Examples']
              }
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <li key={tech} className="text-gray-400 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a growing community of developers, researchers, and AI enthusiasts who are shaping the future of AI interaction
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/fR35HeHD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <User className="w-5 h-5 mr-2" />
              Join Discord
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://github.com/atulhacks/VulcanGPT/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub Discussions
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};