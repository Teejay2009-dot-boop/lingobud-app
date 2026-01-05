import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the access key system work?',
      answer: 'After you purchase a Basic or Premium plan, you\'ll receive a unique access key via email. Simply enter this key in the Lingobud app to unlock all premium features. The key is linked to your account and works across all your devices.',
      category: 'Access & Accounts'
    },
    {
      question: 'What\'s included in the free version?',
      answer: 'The free version includes limited daily lessons, basic vocabulary games, and progress tracking. It\'s perfect for trying out the app and learning basic greetings and common phrases.',
      category: 'Features'
    },
    {
      question: 'Can I use the app on multiple devices?',
      answer: 'Yes! Your access key works on up to 3 devices. Simply log in with the same account on your phone, tablet, and computer. Your progress syncs automatically across all devices.',
      category: 'Technical'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards (Visa, MasterCard), mobile money, and bank transfers for Nigerian customers. All payments are processed securely through our payment partners.',
      category: 'Payment'
    },
    {
      question: 'How long does it take to receive my access key?',
      answer: 'Access keys are delivered instantly via email after successful payment. If you don\'t see it within 5 minutes, please check your spam folder or contact our support team.',
      category: 'Access & Accounts'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel anytime. If you cancel, you\'ll continue to have access until the end of your billing period. After that, your account will revert to the free version.',
      category: 'Payment'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with Lingobud within the first 30 days, contact our support team for a full refund.',
      category: 'Payment'
    },
    {
      question: 'Do I need internet to use the app?',
      answer: 'Some features require internet connection (like downloading new lessons or syncing progress), but most games and practice exercises can be used offline once downloaded.',
      category: 'Technical'
    },
    {
      question: 'Is Lingobud suitable for complete beginners?',
      answer: 'Absolutely! We start with basic greetings and common phrases, gradually building up to more complex conversations. The app adapts to your learning pace.',
      category: 'Learning'
    },
    {
      question: 'How is Lingobud different from other language apps?',
      answer: 'Lingobud focuses specifically on Yoruba language and culture. We combine modern gamification with traditional teaching methods, cultural stories, and real-life conversation practice.',
      category: 'Learning'
    },
    {
      question: 'Can children use Lingobud?',
      answer: 'Yes! Lingobud is family-friendly. The games, animations, and simple interface make it perfect for children aged 8 and above. Parents can monitor progress through family accounts.',
      category: 'Features'
    },
    {
      question: 'What if I forget my access key?',
      answer: 'You can always retrieve your access key by visiting your account dashboard on our website or contacting support. We\'ll resend it to your registered email address.',
      category: 'Access & Accounts'
    }
  ];

  const categories = ['All', 'Access & Accounts', 'Payment', 'Technical', 'Features', 'Learning'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#E1B300]/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#E1B300] rounded-full"></span>
            <span className="text-sm font-medium text-[#E1B300]">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about Lingobud and the access key system.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#E1B300] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#E1B300]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#E1B300] text-sm">?</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-lg">{faq.question}</h3>
                    <div className="mt-1">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <div className="flex gap-4">
                    <div className="w-8 flex-shrink-0"></div> {/* Spacer for alignment */}
                    <div className="text-gray-700">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-[#E1B300]/5 to-amber-500/5 rounded-2xl p-8 border border-[#E1B300]/20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#E1B300] text-white flex items-center justify-center text-xl mx-auto mb-4">📧</div>
                <div className="font-bold text-gray-900 mb-2">Email Support</div>
                <div className="text-gray-600 text-sm">support@lingobud.com</div>
                <div className="text-gray-500 text-xs mt-1">Response within 24 hours</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#E1B300] text-white flex items-center justify-center text-xl mx-auto mb-4">💬</div>
                <div className="font-bold text-gray-900 mb-2">Live Chat</div>
                <div className="text-gray-600 text-sm">Available in app</div>
                <div className="text-gray-500 text-xs mt-1">Mon-Fri, 9AM-6PM WAT</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#E1B300] text-white flex items-center justify-center text-xl mx-auto mb-4">📚</div>
                <div className="font-bold text-gray-900 mb-2">Help Center</div>
                <div className="text-gray-600 text-sm">Documentation & Guides</div>
                <div className="text-gray-500 text-xs mt-1">Step-by-step tutorials</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@lingobud.com"
                className="px-6 py-3 bg-[#E1B300] text-white font-bold rounded-full hover:bg-amber-600 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="#pricing"
                className="px-6 py-3 border-2 border-[#E1B300] text-[#E1B300] font-bold rounded-full hover:bg-[#E1B300]/10 transition-colors"
              >
                Back to Pricing
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#E1B300]">💡</span>
              Quick Tips for New Users
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">1</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Start with Free Version</div>
                  <div className="text-sm text-gray-600">Try basic features before upgrading</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-sm">2</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Save Your Access Key</div>
                  <div className="text-sm text-gray-600">Keep it safe like a password</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 text-sm">3</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Practice Daily</div>
                  <div className="text-sm text-gray-600">Consistency is key to language learning</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-600 text-sm">4</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Use Multiple Devices</div>
                  <div className="text-sm text-gray-600">Sync progress across phone, tablet, computer</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}