import React from 'react';
import { RefreshCw, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
  const policies = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Immediate Cancellation",
      description: "Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.",
      type: "info"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Perishable Items",
      description: "ATUL KUMAR does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.",
      type: "warning"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Damaged or Defective Items",
      description: "In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within Only same day days of receipt of the products.",
      type: "error"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Product Expectations",
      description: "In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within Only same day days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.",
      type: "info"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Warranty Items",
      description: "In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the ATUL KUMAR, it'll take 1-2 Days days for the refund to be processed to the end customer.",
      type: "success"
    }
  ];

  const getCardStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500/10 border-green-500/20';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/20';
      case 'error':
        return 'bg-red-500/10 border-red-500/20';
      default:
        return 'bg-blue-500/10 border-blue-500/20';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-500';
      case 'warning':
        return 'text-yellow-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 mb-6">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refund Policy
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Cancellation & <span className="text-red-500">Refund Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in helping our customers and have a liberal cancellation policy
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated on 04-07-2025 08:41:15
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <RefreshCw className="w-8 h-8 text-red-500 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
                <p className="text-gray-300 leading-relaxed">
                  <strong>ATUL KUMAR</strong> believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy, we aim to provide fair and transparent refund processes for all our customers.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {policies.map((policy, index) => (
              <div key={index} className={`border rounded-xl p-6 ${getCardStyle(policy.type)}`}>
                <div className="flex items-start space-x-4">
                  <div className={`${getIconColor(policy.type)} mt-1`}>
                    {policy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {policy.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Refund Timeline */}
          <div className="mt-12 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Refund Processing Timeline</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Request Submission</h4>
                <p className="text-gray-400 text-sm">Submit your refund request within the specified timeframe</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Review Process</h4>
                <p className="text-gray-400 text-sm">Our team reviews your request and verifies the details</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Refund Processing</h4>
                <p className="text-gray-400 text-sm">Approved refunds are processed within 1-2 days</p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-12 space-y-6">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notice</h3>
                  <p className="text-gray-300">
                    Please note that refund eligibility depends on the nature of the product/service and the timing of your request. We encourage customers to contact our support team immediately if they have any concerns about their purchase.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Need Help?</h3>
                  <p className="text-gray-300 mb-3">
                    If you have any questions about our refund policy or need to request a refund, please contact us:
                  </p>
                  <div className="space-y-1 text-gray-300">
                    <p><strong>Email:</strong> vulcangpt@gmail.com</p>
                    <p><strong>Phone:</strong> 8219836693</p>
                    <p><strong>Response Time:</strong> Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};