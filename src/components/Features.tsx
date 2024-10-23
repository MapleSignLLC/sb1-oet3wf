import { Code2, Globe, Zap, Clock, Shield, Gift } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Instant Delivery',
    description: 'Receive your certificate within minutes of purchase'
  },
  {
    icon: Shield,
    title: 'Secure & Verified',
    description: 'All certificates are officially verified by Apple'
  },
  {
    icon: Code2,
    title: 'Developer Support',
    description: '24/7 technical support for implementation'
  },
  {
    icon: Globe,
    title: 'Worldwide Access',
    description: 'Publish apps in any region worldwide'
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Easy-to-follow setup instructions included'
  },
  {
    icon: Gift,
    title: 'Bonus Resources',
    description: 'Free development tools and resources included'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for iOS developers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}