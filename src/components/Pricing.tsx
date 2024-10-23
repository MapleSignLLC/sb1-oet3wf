import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Individual',
    price: '99',
    features: [
      'Individual Developer Certificate',
      '1 Year Validity',
      'App Store Distribution',
      'Technical Support',
      'Basic Development Tools',
      'Email Support'
    ]
  },
  {
    name: 'Business',
    price: '299',
    featured: true,
    features: [
      'Organization Developer Certificate',
      '1 Year Validity',
      'Unlimited App Distribution',
      'Priority Technical Support',
      'Advanced Development Tools',
      '24/7 Premium Support',
      'Team Management Console',
      'Extended API Access'
    ]
  },
  {
    name: 'Enterprise',
    price: '999',
    features: [
      'Enterprise Developer Certificate',
      '1 Year Validity',
      'In-House App Distribution',
      'Dedicated Support Manager',
      'Custom Development Tools',
      'On-demand Consultation',
      'Multiple Team Support',
      'Custom Integration Options'
    ]
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm p-8 ${
                plan.featured ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600 ml-2">/year</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold ${
                  plan.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}