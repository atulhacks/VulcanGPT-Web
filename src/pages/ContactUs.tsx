import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Building
} from 'lucide-react';

export const ContactUs: React.FC = () => {
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
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Vulcan GPT Contact Form
      `);
      
      const mailtoLink = `mailto:vulcangpt@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Contact <span className="text-red-500">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for any questions, support, or business inquiries
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated on 04-07-2025 08:39:30
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Legal Entity */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <Building className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Legal Entity</h3>
                      <p className="text-gray-300">
                        <strong>Merchant Legal entity name:</strong> ATUL KUMAR
                      </p>
                    </div>
                  </div>
                </div>

                {/* Registered Address */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Registered Address</h3>
                      <p className="text-gray-300">
                        C-20/L, Hakikat Rai Marg,<br />
                        Railway Colony, Jungpura,<br />
                        Delhi, PIN: 110014
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operational Address */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Operational Address</h3>
                      <p className="text-gray-300">
                        C-20/L, Hakikat Rai Marg,<br />
                        Railway Colony, Jungpura,<br />
                        Delhi, PIN: 110014
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-red-500" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Telephone</h3>
                        <a href="tel:8219836693" className="text-red-400 hover:text-red-300">
                          8219836693
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-red-500" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                        <a href="mailto:vulcangpt@gmail.com" className="text-red-400 hover:text-red-300">
                          vulcangpt@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Clock className="w-6 h-6 text-red-500" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Response Time</h3>
                        <p className="text-gray-300">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-400">Email client opened! Your message will be sent to vulcangpt@gmail.com</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-400">Failed to open email client. Please send an email directly to vulcangpt@gmail.com</span>
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
                    <option value="billing">Billing & Payment</option>
                    <option value="refund">Refund Request</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
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
                      Opening Email Client...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-400 text-sm">
                    <strong>Note:</strong> This form will open your default email client with the message pre-filled. 
                    The email will be sent to <strong>vulcangpt@gmail.com</strong>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};