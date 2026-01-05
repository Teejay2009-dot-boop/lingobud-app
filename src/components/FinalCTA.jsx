import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#E1B300] via-amber-500 to-orange-500">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Speaking Yoruba
            <span className="block text-white/90">Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Join <span className="font-bold">10,000+</span> learners who are already having conversations in Yoruba.
          </p>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <div className="font-bold mb-2">Instant Access</div>
              <div className="text-sm text-white/80">Get your access key immediately after payment</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">🎮</div>
              <div className="font-bold mb-2">Learn Through Play</div>
              <div className="text-sm text-white/80">Games and interactive lessons make learning fun</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <div className="font-bold mb-2">Use Anywhere</div>
              <div className="text-sm text-white/80">Learn on phone, tablet, or computer</div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-10 py-4 bg-white text-[#E1B300] font-bold rounded-full hover:bg-gray-100 hover:shadow-2xl transition-all text-lg shadow-lg transform hover:-translate-y-1"
            >
              🚀 Get Access Key Now
            </a>
            
            <a
              href="#"
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
            >
              📱 Download App First
            </a>
          </div>
          
          <div className="text-center mt-6 text-white/80 text-sm">
            No credit card needed for free version • 30-day money back guarantee
          </div>
        </motion.div>

        {/* Email Waitlist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Get Early Updates
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Join our waitlist for new features and exclusive offers
            </p>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">🎉</div>
                <div className="text-xl font-bold text-green-600 mb-2">Successfully Joined!</div>
                <p className="text-gray-600">You'll receive updates and special offers soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E1B300] focus:border-transparent outline-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-[#E1B300] to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    'Join Waitlist for Updates'
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white/80">
            <div>
              <div className="text-2xl mb-2">🔒</div>
              <div className="font-medium">Secure Payment</div>
            </div>
            <div>
              <div className="text-2xl mb-2">📞</div>
              <div className="font-medium">24/7 Support</div>
            </div>
            <div>
              <div className="text-2xl mb-2">↩️</div>
              <div className="font-medium">30-Day Refund</div>
            </div>
            <div>
              <div className="text-2xl mb-2">⭐</div>
              <div className="font-medium">4.9/5 Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}