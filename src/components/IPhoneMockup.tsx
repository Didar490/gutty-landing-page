import { Activity, Heart, TrendingUp } from 'lucide-react';

const IPhoneMockup = () => {
  return (
    <div className="relative mx-auto w-72 h-[580px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      {/* iPhone Frame */}
      <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] p-1">
          <div className="w-full h-full bg-health-gradient rounded-[2.25rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-3 text-sm font-medium text-gray-700">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-gray-700 rounded-sm"></div>
                <div className="w-1 h-2 bg-gray-700 rounded-sm"></div>
              </div>
            </div>
            
            {/* App Content */}
            <div className="px-6 py-4 space-y-6">
              {/* Header */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Good Morning!</h2>
                <p className="text-gray-600">How are you feeling today?</p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/80 rounded-xl p-3 text-center">
                  <Heart className="w-5 h-5 text-health-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">7.2</div>
                  <div className="text-xs text-gray-600">Wellness</div>
                </div>
                <div className="bg-white/80 rounded-xl p-3 text-center">
                  <Activity className="w-5 h-5 text-health-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">12</div>
                  <div className="text-xs text-gray-600">Symptoms</div>
                </div>
                <div className="bg-white/80 rounded-xl p-3 text-center">
                  <TrendingUp className="w-5 h-5 text-health-600 mx-auto mb-1" />
                  <div className="text-sm font-semibold text-gray-900">85%</div>
                  <div className="text-xs text-gray-600">Better</div>
                </div>
              </div>
              
              {/* Progress Card */}
              <div className="bg-white/90 rounded-2xl p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Today's Progress</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Hydration</span>
                    <span className="text-sm font-medium text-health-700">8/8 glasses</span>
                  </div>
                  <div className="w-full bg-health-200 rounded-full h-2">
                    <div className="bg-wellness-gradient h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="text-center">
                <button className="bg-wellness-gradient text-white px-8 py-3 rounded-xl font-medium shadow-lg">
                  Log Symptoms
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
      </div>
      
      {/* Floating Gutty Icons */}
      {/* Top Left - Avocado */}
      <div className="absolute -top-8 -left-12 w-16 h-16 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300">
        <img src="/Gutty Icons/avocado.png" alt="Avocado" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Top Right - Strawberry */}
      <div className="absolute -top-6 -right-10 w-12 h-12 animate-float opacity-75 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '1s' }}>
        <img src="/Gutty Icons/strawberry.png" alt="Strawberry" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Middle Left - Carrot */}
      <div className="absolute top-20 -left-16 w-14 h-14 animate-float opacity-70 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '2s' }}>
        <img src="/Gutty Icons/carrot.png" alt="Carrot" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Middle Right - Blueberries */}
      <div className="absolute top-32 -right-14 w-10 h-10 animate-float opacity-85 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '3s' }}>
        <img src="/Gutty Icons/blueberries.png" alt="Blueberries" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Bottom Left - Salad */}
      <div className="absolute bottom-20 -left-14 w-18 h-18 animate-float opacity-75 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '4s' }}>
        <img src="/Gutty Icons/salad.png" alt="Salad" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Bottom Right - Lemon */}
      <div className="absolute bottom-16 -right-12 w-12 h-12 animate-float opacity-80 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '5s' }}>
        <img src="/Gutty Icons/lemon.png" alt="Lemon" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Far Left - Leaf */}
      <div className="absolute top-40 -left-20 w-8 h-8 animate-float opacity-60 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '6s' }}>
        <img src="/Gutty Icons/leaf.png" alt="Leaf" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Far Right - Coconut */}
      <div className="absolute top-60 -right-18 w-14 h-14 animate-float opacity-70 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '7s' }}>
        <img src="/Gutty Icons/coconut.png" alt="Coconut" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Bottom Center - Kefir */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 translate-x-8 w-10 h-10 animate-float opacity-75 hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '8s' }}>
        <img src="/Gutty Icons/kefir.png" alt="Kefir" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      
      {/* Original floating elements for subtle background effect */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-health-300/30 rounded-full animate-float"></div>
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-health-400/25 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default IPhoneMockup; 