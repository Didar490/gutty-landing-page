import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-health-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-health-700 hover:text-health-800 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Your health data belongs to you. We've designed our app with privacy at its core.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg space-y-12">
            
            {/* Our Privacy-First Approach */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                Our Privacy-First Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Gutty, we believe your health data belongs to you. We've designed our app with privacy at its core: minimal data collection, secure cloud storage, no third-party sharing, and complete user control over your information.
              </p>
            </section>

            {/* What We Collect */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                What We Collect
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We only collect what's essential: your email for secure sign-in, optional dietary preferences you choose to share, and food analysis data when you take photos of meals for nutritional insights.
              </p>
            </section>

            {/* What We DON'T Collect */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                What We DON'T Collect
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We never track your location, monitor your communications, access your browsing history, or collect unnecessary personal data. We only collect what you explicitly choose to share.
              </p>
            </section>

            {/* Secure Data Storage */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                Secure Data Storage
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your data is stored securely on Supabase, a privacy-focused cloud platform with enterprise-grade security, bank-level encryption, and SOC 2 certification. Advanced security policies ensure only you can access your data.
              </p>
            </section>

            {/* Photo Processing */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                Photo Processing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you take photos of meals, they are analyzed by AI to provide nutritional insights and then immediately discarded. We do not permanently store your food photos.
              </p>
            </section>

            {/* No Third-Party Sharing */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                No Third-Party Sharing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We never share your data with advertisers, marketers, data brokers, or third parties. We don't sell, rent, or monetize your personal information. We don't create advertising profiles or track your behavior.
              </p>
            </section>

            {/* Your Complete Control */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                Your Complete Control
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                You can view all your data, update your preferences, delete your account and all data with one tap, or export your information at any time. You have complete control over your information.
              </p>
            </section>

            {/* AI Processing */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                AI Processing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We use OpenAI's services for food analysis. Photos are processed temporarily and immediately discarded. OpenAI does not store your images after processing.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                Data Security
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                All data is encrypted both in transit and at rest using industry-standard protocols. We use row-level security policies and maintain strict access controls to protect your information.
              </p>
            </section>

            {/* Our Privacy Promise */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                Our Privacy Promise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We promise to never share your data with third parties for marketing, always prioritize your privacy and security, be transparent about our practices, and give you complete control over your information.
              </p>
            </section>

            {/* Your Health, Your Privacy, Your Choice */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-wellness-gradient bg-clip-text text-transparent">
                Your Health, Your Privacy, Your Choice
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Gutty, we believe your health journey is personal and private. Our app empowers you with insights while keeping your data secure and never sharing it with third parties.
              </p>
            </section>

            {/* Contact */}
            <section className="border-t border-health-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions or Concerns?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contact us: <a href="mailto:didar490@gmail.com" className="text-health-600 hover:text-health-700 font-medium underline">didar490@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 