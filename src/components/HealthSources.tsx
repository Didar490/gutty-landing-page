import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const HealthSources = () => {
  const sources = [
    {
      category: "Global Health Organizations",
      items: [
        {
          name: "World Health Organization - Healthy Diet",
          description: "Global dietary recommendations and guidelines",
          url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
        }
      ]
    },
    {
      category: "Fiber and Digestive Health",
      items: [
        {
          name: "American Gastroenterological Association",
          description: "Medical guidelines on fiber intake and digestive health",
          url: "https://gastro.org/"
        },
        {
          name: "Journal of Nutrition - Fiber Research",
          description: "Peer-reviewed research on dietary fiber benefits",
          url: "https://academic.oup.com/jn"
        }
      ]
    },
    {
      category: "Inflammation and Antioxidants",
      items: [
        {
          name: "Harvard School of Public Health",
          description: "Research on anti-inflammatory foods and antioxidants",
          url: "https://www.hsph.harvard.edu/nutritionsource/anti-inflammatory-diet/"
        },
        {
          name: "American Heart Association",
          description: "Guidelines on heart-healthy and anti-inflammatory nutrition",
          url: "https://www.heart.org/en/healthy-living/healthy-eating"
        }
      ]
    },
    {
      category: "Gut Health & Microbiome",
      items: [
        {
          name: "Mayo Clinic - Probiotics",
          description: "Medical information on probiotics and digestive health",
          url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/probiotics/art-20045285"
        },
        {
          name: "NIH - Gut Microbiome",
          description: "National Institutes of Health research on gut microbiome",
          url: "https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works"
        },
        {
          name: "Harvard Health - Gut-Brain Connection",
          description: "Research on the connection between gut health and mental wellness",
          url: "https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection"
        }
      ]
    },
    {
      category: "Dietary Guidelines",
      items: [
        {
          name: "2020-2025 Dietary Guidelines for Americans",
          description: "Official dietary recommendations from USDA and HHS",
          url: "https://www.dietaryguidelines.gov/"
        },
        {
          name: "Academy of Nutrition and Dietetics",
          description: "Evidence-based nutrition recommendations",
          url: "https://www.eatright.org/"
        }
      ]
    }
  ];

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
              Health Sources
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Trusted medical organizations and research institutions backing our recommendations
            </p>
          </div>

          {/* Sources Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg space-y-12">
            
            {sources.map((category, categoryIndex) => (
              <section key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.items.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="border border-health-200 rounded-xl p-6 hover:border-health-300 transition-colors duration-200">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-health-700 mb-2">
                            {source.name}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {source.description}
                          </p>
                          <a 
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-health-600 hover:text-health-700 text-sm font-medium break-all"
                          >
                            {source.url}
                          </a>
                        </div>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 text-health-600 hover:text-health-700 hover:bg-health-50 rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Important Disclaimer */}
            <section className="border-t border-health-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Important Disclaimer
              </h2>
              <div className="bg-health-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  The information provided in Gutty is for educational purposes only and is not intended 
                  to replace professional medical advice, diagnosis, or treatment. Always consult with 
                  qualified healthcare providers regarding your specific health needs.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Last Updated: January 2024
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSources; 