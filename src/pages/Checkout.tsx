import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Shield, 
  Lock, 
  CheckCircle, 
  AlertCircle,
  Loader,
  ArrowLeft,
  Star,
  Download
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
}

export const Checkout: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  const products: Product[] = [
    {
      id: 'vulcan-basic',
      name: 'Vulcan GPT Basic',
      description: 'Essential AI features for individual users',
      price: 250,
      originalPrice: 499,
      features: [
        'Access to cloud models',
        'Basic web search',
        'Standard support',
        '100 queries/day',
        'Email support'
      ]
    },
    {
      id: 'vulcan-pro',
      name: 'Vulcan GPT Pro',
      description: 'Advanced features for power users',
      price: 750,
      originalPrice: 1299,
      popular: true,
      features: [
        'All Basic features',
        'Local models support',
        'Advanced web search',
        'GitHub integration',
        'Unlimited queries',
        'Priority support',
        'Custom prompts'
      ]
    },
    {
      id: 'vulcan-enterprise',
      name: 'Vulcan GPT Enterprise',
      description: 'Complete solution for businesses',
      price: 1400,
      originalPrice: 2499,
      features: [
        'All Pro features',
        'Team collaboration',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Training sessions'
      ]
    }
  ];

  useEffect(() => {
    // Load Cashfree SDK
    const script = document.createElement('script');
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const initiateCashfreePayment = async () => {
    if (!selectedProduct) return;

    setIsProcessing(true);
    setPaymentStatus('processing');

    try {
      // In a real implementation, you would call your backend to create a Cashfree order
      // This is a simulation of the payment process
      
      // Simulate API call to create order
      const orderData = {
        order_id: `ORDER_${Date.now()}`,
        order_amount: selectedProduct.price,
        order_currency: 'INR',
        customer_details: {
          customer_id: `CUST_${Date.now()}`,
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone
        },
        order_meta: {
          return_url: `${window.location.origin}/payment-success`,
          notify_url: `${window.location.origin}/api/payment-webhook`
        }
      };

      // Simulate payment processing
      setTimeout(() => {
        // Simulate successful payment
        setPaymentStatus('success');
        setIsProcessing(false);
      }, 3000);

      // In real implementation, you would use Cashfree SDK like this:
      /*
      const cashfree = new Cashfree({
        mode: 'sandbox' // or 'production'
      });

      const checkoutOptions = {
        paymentSessionId: 'session_id_from_backend',
        returnUrl: `${window.location.origin}/payment-success`
      };

      cashfree.checkout(checkoutOptions);
      */

    } catch (error) {
      console.error('Payment failed:', error);
      setPaymentStatus('error');
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct || !customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Please fill all required fields and select a product');
      return;
    }
    initiateCashfreePayment();
  };

  if (paymentStatus === 'success') {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-green-500/10 border border-green-500/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
          <p className="text-gray-300 mb-6">
            Thank you for your purchase. You will receive an email with download instructions shortly.
          </p>
          <div className="space-y-3">
            <button className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200">
              <Download className="w-5 h-5 inline mr-2" />
              Download Vulcan GPT
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full px-6 py-3 border border-gray-600 hover:border-red-500 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 mb-6">
              <CreditCard className="w-4 h-4 mr-2" />
              Secure Checkout
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Choose Your <span className="text-red-500">Plan</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect Vulcan GPT plan for your needs and start your AI journey today
            </p>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Selection */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Select Your Plan</h2>
              
              <div className="space-y-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`relative border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedProduct?.id === product.id
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                        <p className="text-gray-400">{product.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">₹{product.price}</div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">₹{product.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {selectedProduct?.id === product.id && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Payment Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Information */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Customer Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                {selectedProduct && (
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{selectedProduct.name}</span>
                        <span className="text-white">₹{selectedProduct.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">GST (18%)</span>
                        <span className="text-white">₹{Math.round(selectedProduct.price * 0.18)}</span>
                      </div>
                      <div className="border-t border-gray-700 pt-3">
                        <div className="flex justify-between text-lg font-semibold">
                          <span className="text-white">Total</span>
                          <span className="text-red-400">₹{selectedProduct.price + Math.round(selectedProduct.price * 0.18)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Button */}
                <button
                  type="submit"
                  disabled={!selectedProduct || isProcessing}
                  className="w-full flex items-center justify-center px-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {isProcessing ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin mr-2" />
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      Proceed to Payment
                    </>
                  )}
                </button>

                {/* Security Notice */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-green-400 font-medium">Secure Payment</p>
                      <p className="text-gray-300 text-sm">
                        Your payment is secured by Cashfree with 256-bit SSL encryption
                      </p>
                    </div>
                  </div>
                </div>
              </form>

              {paymentStatus === 'error' && (
                <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-red-400 font-medium">Payment Failed</p>
                      <p className="text-gray-300 text-sm">
                        There was an error processing your payment. Please try again.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};