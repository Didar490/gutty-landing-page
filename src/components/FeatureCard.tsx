import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string | ReactNode;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-health-100 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-health-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-600 leading-relaxed">{description}</div>
    </div>
  );
};

export default FeatureCard; 