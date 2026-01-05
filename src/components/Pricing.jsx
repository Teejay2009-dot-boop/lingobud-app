import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Try basic features to get started',
      color: 'from-gray-400 to-gray-500',
      features: [
        'Limited daily lessons',
        'Basic vocabulary games',
        'Progress tracking',
        'Email support'
      ],
      missingFeatures: [
        'No access key needed',
        'Limited content access',
        'No premium games',
        'No analytics'
      ],
      cta: 'Start Learning Free',
      popular: false,
      externalLink: '#'
    },
    {
      name: 'Basic',
      price: '$4.99',
      period: 'per month',
      description: 'Most popular for serious learners',
      color: 'from-[#E1B300] to-amber-500',
      features: [
        'All daily lessons',
        'Full vocabulary library',
        'Progress analytics',
        'Priority support',
        'Access key provided',
        'Sync across devices'
      ],
      missingFeatures: [],
      cta: 'Get Access Key',
      popular: true,
      externalLink: 'https://your-payment-site.com/basic' // Your external link
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      description: 'Maximum learning potential',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Basic',
        'Custom practice sessions',
        'Advanced analytics',
        '24/7 priority support',
        'Early access to features',
        'Monthly progress reports',
        'Custom learning paths'
      ],
      missingFeatures: [],
      cta: 'Get Premium Access',
      popular: false,
      externalLink: 'https://your-payment-site.com/premium' // Your external link
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E1B300]/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#E1B300] rounded-full"></span>
            <span className="text-sm font-medium text-[#E1B300]">Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant access to Yoruba lessons. After payment, you'll receive an access key to unlock the app.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#E1B300] to-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`bg-white rounded-2xl border-2 h-full ${
                plan.popular ? 'border-[#E1B300] shadow-xl' : 'border-gray-200'
              }`}>
                <div className="p-8">
                  {/* Plan Name & Price */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.price !== '$0' && (
                        <span className="text-gray-500 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Missing Features for Free plan */}
                    {plan.missingFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 opacity-50">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a 
                    href={plan.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-xl text-center font-bold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#E1B300] to-amber-500 text-white hover:shadow-lg'
                        : plan.name === 'Free'
                        ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-lg'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

                {/* Access Key Note */}
                {plan.price !== '$0' && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50 rounded-b-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E1B300]/10 flex items-center justify-center">
                        <span className="text-[#E1B300] text-sm">🔑</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Access Key Included</div>
                        <div className="text-xs text-gray-600">Use in the Lingobud app after payment</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Process Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#E1B300]/5 to-amber-500/5 rounded-2xl p-8 border border-[#E1B300]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Access Keys Work</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#E1B300] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold text-gray-900 mb-2">Choose Plan</h4>
                <p className="text-gray-600 text-sm">Select Basic or Premium plan above</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#E1B300] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-bold text-gray-900 mb-2">Complete Payment</h4>
                <p className="text-gray-600 text-sm">You'll be redirected to our secure payment partner</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#E1B300] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold text-gray-900 mb-2">Get Access Key</h4>
                <p className="text-gray-600 text-sm">Receive key via email, use it in the Lingobud app</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="text-gray-500 text-sm mb-6">Secure Payment • 30-Day Money Back • Cancel Anytime</div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-gray-700">🔒 SSL Secure</div>
            <div className="text-gray-700">💳 Credit/Debit Cards</div>
            <div className="text-gray-700">📱 Mobile Money</div>
            <div className="text-gray-700">🏦 Bank Transfer</div>
          </div>
        </div>
      </div>
    </section>
  );
}