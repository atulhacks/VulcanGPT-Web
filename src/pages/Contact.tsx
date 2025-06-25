import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Twitter, 
  MessageCircle, 
  Send, 
  MapPin, 
  Clock,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      description: 'Send us an email for general inquiries',
      contact: 'contact@vulcangpt.dev',
      action: 'mailto:contact@vulcangpt.dev'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      description: 'Report issues or contribute to the project',
      contact: '@atulhacks',
      action: 'https://github.com/atulhacks/VulcanGPT'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Discord',
      description: 'Join our community for real-time support',
      contact: 'Vulcan GPT Community',
      action: 'https://discord.gg/fR35HeHD'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: 'Twitter',
      description: 'Follow us for updates and announcements',
      contact: '@atulhack',
      action: 'https://twitter.com/atulhack'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Vulcan GPT?',
      answer: 'Download the repository from GitHub and run the installation script for your operating system. Check our documentation for detailed instructions.'
    },
    {
      question: 'Do I need API keys to use Vulcan GPT?',
      answer: 'API keys are only required for cloud-based models. You can use local models without any API keys for complete offline functionality.'
    },
    {
      question: 'Is Vulcan GPT free to use?',
      answer: 'Yes, Vulcan GPT is completely free and open source under the MIT license. You only pay for API usage if you choose to use cloud-based models.'
    },
    {
      question: 'What are the system requirements?',
      answer: 'Python 3.8+, 8GB RAM minimum (16GB+ recommended for local models), and modern multi-core CPU. GPU is optional but recommended for larger models.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about Vulcan GPT? Need support? Want to contribute? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-medium">{method.contact}</span>
                  {method.action.startsWith('http') && (
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-400">Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="contribution">Contribution</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-medium text-white">Location</div>
                      <div className="text-gray-400">Global (Remote)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-medium text-white">Response Time</div>
                      <div className="text-gray-400">Usually within 24 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <div className="text-gray-400">contact@vulcangpt.dev</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-white font-medium py-2 hover:text-red-400 transition-colors duration-200">
                        {faq.question}
                        <span className="ml-2 transform group-open:rotate-180 transition-transform duration-200">
                          ▼
                        </span>
                      </summary>
                      <div className="mt-2 text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait! Download Vulcan GPT today and start exploring the future of AI interactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/atulhacks/VulcanGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              Download Now
            </a>
            <a
              href="/documentation"
              className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};