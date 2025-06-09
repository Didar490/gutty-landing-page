import { Button } from "@/components/ui/button";
import { Activity, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";

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
      icon: BookOpen,
      title: "Expert Sources",
      description: "Access trusted medical organizations and research from WHO, Mayo Clinic, Harvard, and leading gastroenterology institutions."
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
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

              <div className="flex justify-center sm:justify-start">
                <Link to="/sources">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-health-600 hover:text-health-700 hover:bg-health-50 px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Expert Sources
                  </Button>
                </Link>
              </div>
            </div>

            {/* App Screenshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <img 
                  src="/page1.png" 
                  alt="Gutty App Screenshot" 
                  className="w-80 h-auto rounded-2xl shadow-2xl"
                />
              </div>
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

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
              <Link 
                to="/privacy" 
                className="hover:text-health-700 transition-colors duration-200 underline"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <span>© 2024 Gutty. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 