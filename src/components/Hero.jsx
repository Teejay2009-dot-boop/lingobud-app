import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import adunke from '../assets/adunke_reading.png'

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const yorubaWords = ['Ẹ káàbọ̀', 'Ṣé dáadáa ni?', 'Mo nífẹ̀ẹ́ rẹ', 'Jẹ́ a kọ́ èdè', 'Orin kíkọ'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % yorubaWords.length);
    }, 3000); // Increased from 2000 to 3000ms
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-[#FFE4CC] to-[#FFF5EB] pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-16">
          
          {/* IMAGE SECTION */}
          <div className="lg:w-1/2 relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-lg">
              {/* Main Image with SLOW entrance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, // Slower (was 0.8)
                  type: "spring", 
                  stiffness: 80, // Softer spring
                  damping: 15,
                  delay: 0.2 // Slight delay
                }}
                className="relative z-20"
              >
                <div className="relative">
                  {/* Speech bubble with SLOW pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ 
                      duration: 3.5, // Much slower pulse (was 2)
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 bg-white p-3 md:p-4 rounded-2xl shadow-xl z-30"
                  >
                    <div className="text-base md:text-lg font-bold text-[#E1B300]">Ẹ káàbọ̀!</div>
                    <div className="text-xs md:text-sm text-gray-600">Welcome!</div>
                  </motion.div>
                  
                  {/* Your Adunke image */}
                  <img 
                    src={adunke} 
                    alt="Adunke Reading Yoruba" 
                    className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[550px] object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Floating Learning Elements - SLOWER */}
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 5, // Much slower (was 3)
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 md:top-10 left-2 md:left-4 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10 border-2 border-[#E1B300]"
              >
                <div className="text-lg md:text-xl">📚</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -35, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ 
                  duration: 6, // Slower (was 4)
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8 // More delay between elements
                }}
                className="absolute top-32 md:top-40 right-2 md:right-4 w-14 h-14 md:w-16 md:h-16 bg-[#E1B300] rounded-2xl shadow-xl flex items-center justify-center z-10"
              >
                <div className="text-xl md:text-2xl text-white">🎮</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 15, 0]
                }}
                transition={{ 
                  duration: 4.5, // Slower (was 2.5)
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-32 md:bottom-40 left-4 md:left-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-[#E1B300]"
              >
                <div className="text-base md:text-lg">🌟</div>
              </motion.div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-40 h-40 md:w-64 md:h-64 bg-[#E1B300]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 -left-10 md:-left-20 w-32 h-32 md:w-48 md:h-48 bg-[#E1B300]/10 rounded-full blur-3xl"></div>
              
              {/* Animated floating text elements - SLOWER */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 4, // Slower (was 2)
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-24 md:bottom-32 right-4 md:right-10 bg-white/80 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg z-10"
              >
                <span className="text-xs font-bold text-[#E1B300]">Fun & Easy!</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                  duration: 5, // Slower (was 2.5)
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                className="absolute top-24 md:top-32 left-6 md:left-8 bg-white/80 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg z-10"
              >
                <span className="text-xs font-bold text-[#E1B300]">Cultural Stories</span>
              </motion.div>
            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
            {/* Animated Badge - SLOWER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, // Slower (was 0.5)
                delay: 0.3
              }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#E1B300] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Learn Yoruba the Fun Way!</span>
            </motion.div>

            {/* Main Heading - SLOWER STAGGER */}
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, // Slower (was 0.6)
                delay: 0.4,
                ease: "easeOut"
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Speak Yoruba
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 0.8 // Delayed color reveal
                }}
                className="text-[#E1B300]"
              >
                Like a Native
              </motion.span>
            </motion.h1>

            {/* Animated Yoruba Word - SLOWER */}
            <motion.div
              key={currentWord}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ 
                duration: 0.8, // Smooth transition
                ease: "easeInOut"
              }}
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 h-12"
            >
              "{yorubaWords[currentWord]}"
            </motion.div>

            {/* Description - SLOWER */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 1.2, // Slower (was 0.6)
                delay: 0.7,
                ease: "easeIn"
              }}
              className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Master the beautiful Yoruba language through interactive games, 
              cultural stories, and real conversations. Perfect for beginners 
              and advanced learners.
            </motion.p>

            {/* CTA Buttons - SLOWER STAGGER */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, // Slower
                delay: 0.9,
                ease: "easeOut"
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#E1B300] text-white font-bold rounded-full hover:bg-[#B89100] transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Start Learning Free
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-[#E1B300] text-[#E1B300] font-bold rounded-full hover:bg-[#E1B300]/10 transition-all text-lg"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Quick Stats - SLOWER STAGGER */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 1.2, // Slower
                delay: 1.2
              }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12"
            >
              {[
                { number: '10K+', label: 'Active Learners' },
                { number: '95%', label: 'Satisfaction' },
                { number: '24/7', label: 'AI Practice' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 1.4 + (idx * 0.2) // Staggered
                  }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - SLOWER */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ 
          duration: 3, // Much slower (was 2)
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-[#E1B300] rounded-full mx-auto mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}