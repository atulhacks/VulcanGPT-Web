import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export const TermsConditions: React.FC = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      content: "By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates."
    },
    {
      title: "User Responsibilities",
      content: "To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account."
    },
    {
      title: "Disclaimer of Warranties",
      content: "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law."
    },
    {
      title: "Use at Your Own Risk",
      content: "Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements."
    },
    {
      title: "Intellectual Property",
      content: "The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents."
    },
    {
      title: "Prohibited Uses",
      content: "You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you."
    },
    {
      title: "Third Party Links",
      content: "You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites."
    },
    {
      title: "Payment Terms",
      content: "You agree to pay us the charges associated with availing the Services. You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services."
    },
    {
      title: "Refund Policy",
      content: "You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, than this would make you ineligible for a refund."
    },
    {
      title: "Force Majeure",
      content: "Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event."
    },
    {
      title: "Governing Law",
      content: "These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India. All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Jungpura, Delhi."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Legal Document
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Terms & <span className="text-red-500">Conditions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated on 04-07-2025 08:40:14
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-red-500 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Binding Agreement</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms and Conditions, along with privacy policy or other terms ("Terms") constitute a binding agreement by and between <strong>ATUL KUMAR</strong>, ("Website Owner" or "we" or "us" or "our") and you ("you" or "your") and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, "Services").
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notice</h3>
                <p className="text-gray-300">
                  All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website. By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Questions?</h3>
                <p className="text-gray-300 mb-3">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="space-y-1 text-gray-300">
                  <p><strong>Email:</strong> vulcangpt@gmail.com</p>
                  <p><strong>Phone:</strong> 8219836693</p>
                  <p><strong>Address:</strong> C-20/L, Hakikat Rai Marg, Railway Colony, Jungpura, Delhi, PIN: 110014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};