import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Adeola Johnson',
      role: 'Student in Lagos',
      content: 'I went from zero to having basic conversations in 2 months! The games make learning fun, not like regular school.',
      rating: 5,
      image: '👩🏾‍🎓',
      country: '🇳🇬 Nigeria'
    },
    {
      name: 'Kwame Mensah',
      role: 'Business Owner',
      content: 'Learning Yoruba helped me connect better with my Nigerian clients. The business vocabulary section was especially useful.',
      rating: 5,
      image: '👨🏾‍💼',
      country: '🇬🇭 Ghana'
    },
    {
      name: 'Chioma Eze',
      role: 'Mother of Two',
      content: 'My kids love the character animations! We learn together as a family. Best investment in our cultural education.',
      rating: 5,
      image: '👩🏾‍👧‍👦',
      country: '🇺🇸 USA'
    },
    {
      name: 'David Smith',
      role: 'Travel Enthusiast',
      content: 'Visiting Nigeria was 10x better after using Lingobud. I could greet people, order food, and even bargain in markets!',
      rating: 4,
      image: '🧳',
      country: '🇬🇧 UK'
    },
    {
      name: 'Fatima Ahmed',
      role: 'University Student',
      content: 'The progress tracking kept me motivated. Seeing my streak grow each day made me want to learn more.',
      rating: 5,
      image: '📚',
      country: '🇳🇬 Nigeria'
    },
    {
      name: 'Oluwaseun Adeyemi',
      role: 'Yoruba Heritage Learner',
      content: 'As someone born abroad, Lingobud helped me connect with my roots. The cultural lessons are priceless.',
      rating: 5,
      image: '🌍',
      country: '🇨🇦 Canada'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
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
            <span className="text-sm font-medium text-[#E1B300]">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Language Learners Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our community says about their Yoruba learning journey with Lingobud.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.country}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E1B300] to-amber-500 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9★</div>
              <div className="text-sm opacity-90">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
        </motion.div>

        {/* App Store Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">What Users Say in Reviews</h3>
            <p className="text-gray-600">Real reviews from app stores</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600">⭐</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">"Best language app I've used!"</div>
                  <div className="text-sm text-gray-600 mt-1">The gamification actually works. I look forward to my daily lessons.</div>
                  <div className="text-xs text-gray-500 mt-2">- Samuel, App Store Review</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600">🎮</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">"Makes learning addictive"</div>
                  <div className="text-sm text-gray-600 mt-1">The streak system keeps me coming back. 45 days and counting!</div>
                  <div className="text-xs text-gray-500 mt-2">- Bimpe, Google Play</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">💬</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">"Real conversations possible"</div>
                  <div className="text-sm text-gray-600 mt-1">After 3 months, I could have basic conversations with my Yoruba friends.</div>
                  <div className="text-xs text-gray-500 mt-2">- Tunde, App Store</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">"Perfect for families"</div>
                  <div className="text-sm text-gray-600 mt-1">My kids and I learn together. Great bonding activity.</div>
                  <div className="text-xs text-gray-500 mt-2">- Grace, Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Learning Community?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the next success story. Start your Yoruba journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-8 py-3 bg-gradient-to-r from-[#E1B300] to-amber-500 text-white font-bold rounded-full hover:shadow-lg transition-shadow"
            >
              Get Your Access Key
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-[#E1B300] text-[#E1B300] font-bold rounded-full hover:bg-[#E1B300]/10 transition-colors"
            >
              Read More Reviews
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}