import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Target, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";
import IPhoneMockup from "./IPhoneMockup";

const Hero = () => {
  const features = [
    {
      icon: Activity,
      title: "Smart Tracking",
      description: "Monitor symptoms, meals, and mood with our intuitive daily tracker designed for gut health insights."
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "Get customized nutrition and lifestyle recommendations based on your unique digestive profile."
    },
    {
      icon: Shield,
      title: "Evidence-Based",
      description: "All recommendations backed by the latest research in gastroenterology and nutritional science."
    }
  ];

  return (
    <div className="min-h-screen bg-health-gradient relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-health-200/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-health-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-health-400/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left animate-fade-in-up">
              <Badge className="mb-6 bg-health-100 text-health-800 border-health-200 hover:bg-health-200 transition-colors">
                <Heart className="w-4 h-4 mr-2" />
                Trusted by 50,000+ Users
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="block bg-wellness-gradient bg-clip-text text-transparent">
                  Gut Health
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Take control of your digestive wellness with personalized insights, 
                expert guidance, and science-backed recommendations tailored just for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-wellness-gradient hover:opacity-90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-health-400 text-health-700 hover:bg-health-50 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-health-500 rounded-full"></div>
                  <span>No subscription required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-health-500 rounded-full"></div>
                  <span>Privacy-first approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-health-500 rounded-full"></div>
                  <span>Expert-validated content</span>
                </div>
              </div>
            </div>

            {/* iPhone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <IPhoneMockup />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 200}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-health-700 mb-2">50K+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-health-700 mb-2">94%</div>
                <div className="text-gray-600">Symptom Improvement</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-health-700 mb-2">4.8★</div>
                <div className="text-gray-600">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-health-700 mb-2">30+</div>
                <div className="text-gray-600">Expert Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 