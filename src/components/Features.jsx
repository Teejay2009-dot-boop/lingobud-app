import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Your actual features
  const features = [
    {
      id: 1,
      icon: "📊",
      title: "Lesson Tracking",
      description:
        "Track your progress through structured Yoruba lessons. See what you've completed and what's next in your learning journey.",
      details: [
        "Track completed lessons",
        "View upcoming lessons",
        "Set learning goals",
        "Monitor time spent learning",
      ],
      demoType: "progress",
    },
    {
      id: 2,
      icon: "🎭",
      title: "Roleplay Practice",
      description:
        "Practice real-life conversations through interactive roleplay scenarios like markets, greetings, and daily interactions.",
      details: [
        "Market shopping scenarios",
        "Greeting conversations",
        "Restaurant ordering",
        "Travel situations",
      ],
      demoType: "roleplay",
      isPremium: true,
    },
    {
      id: 3,
      icon: "⚙️",
      title: "Customizable Lessons",
      description:
        "Premium users can create custom practice sessions focusing on specific topics, vocabulary, or grammar points.",
      details: [
        "Focus on weak areas",
        "Create custom word lists",
        "Set difficulty levels",
        "Practice specific grammar",
      ],
      demoType: "custom",
      isPremium: true,
    },
    {
      id: 4,
      icon: "🏆",
      title: "Badges & Achievements",
      description:
        "Earn badges for milestones, daily streaks, and completing challenges. Stay motivated with our reward system.",
      details: [
        "Daily streak rewards",
        "Lesson completion badges",
        "Challenge achievements",
        "Progress milestones",
      ],
      demoType: "badges",
    },
    {
      id: 5,
      icon: "📈",
      title: "Analytics Dashboard",
      description:
        "See detailed analytics of your learning progress. Understand what you need to improve and track your growth.",
      details: [
        "Vocabulary growth chart",
        "Pronunciation accuracy",
        "Time tracking analytics",
        "Weak area identification",
      ],
      demoType: "analytics",
      isPremium: true,
    },
    {
      id: 6,
      icon: "👑",
      title: "Leaderboard",
      description:
        "Compete with other learners on our global leaderboard. Earn points and climb the ranks as you learn.",
      details: [
        "Weekly challenges",
        "Global ranking",
        "Friend competitions",
        "Point system",
      ],
      demoType: "leaderboard",
    },
  ];

  // All possible quiz questions
  const allQuizQuestions = [
    {
      question: "What does 'Ilé' mean in English?",
      options: ["House", "Water", "Food", "Book"],
      correct: 0,
      yoruba: "Ilé",
    },
    {
      question: "What does 'Omi' mean in English?",
      options: ["House", "Water", "Food", "Book"],
      correct: 1,
      yoruba: "Omi",
    },
    {
      question: "What does 'Ọkọ̀' mean in English?",
      options: ["Husband", "Wife", "Child", "Friend"],
      correct: 0,
      yoruba: "Ọkọ̀",
    },
    {
      question: "What does 'Ìyá' mean in English?",
      options: ["Father", "Mother", "Sister", "Brother"],
      correct: 1,
      yoruba: "Ìyá",
    },
    {
      question: "What does 'Ọmọ' mean in English?",
      options: ["Husband", "Wife", "Child", "Friend"],
      correct: 2,
      yoruba: "Ọmọ",
    },
    {
      question: "What does 'Bàbá' mean in English?",
      options: ["Father", "Mother", "Sister", "Brother"],
      correct: 0,
      yoruba: "Bàbá",
    },
    {
      question: "What does 'Orin' mean in English?",
      options: ["Dance", "Song", "Food", "Sleep"],
      correct: 1,
      yoruba: "Orin",
    },
    {
      question: "What does 'Ẹran' mean in English?",
      options: ["Fish", "Meat", "Rice", "Beans"],
      correct: 1,
      yoruba: "Ẹran",
    },
    {
      question: "What does 'Igi' mean in English?",
      options: ["Stone", "Tree", "River", "Mountain"],
      correct: 1,
      yoruba: "Igi",
    },
    {
      question: "What does 'Ọjà' mean in English?",
      options: ["Market", "School", "Church", "Hospital"],
      correct: 0,
      yoruba: "Ọjà",
    },
    {
      question: "What does 'Iwe' mean in English?",
      options: ["Pen", "Book", "Teacher", "Student"],
      correct: 1,
      yoruba: "Iwe",
    },
    {
      question: "What does 'Oúnjẹ' mean in English?",
      options: ["Water", "Food", "Sleep", "Play"],
      correct: 1,
      yoruba: "Oúnjẹ",
    },
    {
      question: "What does 'Sun' mean in English?",
      options: ["Run", "Sleep", "Eat", "Talk"],
      correct: 1,
      yoruba: "Sun",
    },
    {
      question: "What does 'Jẹun' mean in English?",
      options: ["Drink", "Eat", "Sleep", "Walk"],
      correct: 1,
      yoruba: "Jẹun",
    },
    {
      question: "What does 'Mu' mean in English?",
      options: ["Eat", "Drink", "Sleep", "Run"],
      correct: 1,
      yoruba: "Mu",
    },
  ];

  // Get ONE random question on component mount
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    // Pick one random question when component loads
    const randomIndex = Math.floor(Math.random() * allQuizQuestions.length);
    setCurrentQuestion(allQuizQuestions[randomIndex]);
  }, []);

  const handleAnswerSelect = (optionIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(optionIndex);
    setShowResult(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const renderDemoContent = () => {
    switch (features[activeFeature].demoType) {
      case "progress":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Your Learning Progress
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Basic Greetings</span>
                    <span>100%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Family Vocabulary</span>
                    <span>75%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Market Phrases</span>
                    <span>40%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "roleplay":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Market Scenario
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">
                    Seller (Yoruba):
                  </div>
                  <div className="font-medium text-gray-900">
                    "Ẹ káàbọ̀! Kí ni o fẹ́ ra?"
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    (Welcome! What would you like to buy?)
                  </div>
                </div>
                <div className="bg-[#E1B300]/10 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">
                    Your Response:
                  </div>
                  <div className="font-medium text-gray-900">
                    "Mo fẹ́ ra àgbàdo"
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    (I want to buy corn)
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "custom":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E1B300] to-orange-500 text-white rounded-full text-sm font-bold mb-3">
                  <span>⭐</span>
                  <span>Premium Feature</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  Create Custom Lesson
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  "Focus on Greetings",
                  "Practice Numbers 1-50",
                  "Food Vocabulary",
                  "Market Phrases",
                ].map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E1B300]/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#E1B300]"></div>
                    </div>
                    <span className="text-gray-800">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "badges":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Your Badges
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    emoji: "🔥",
                    label: "7-Day Streak",
                    color: "from-red-400 to-orange-500",
                  },
                  {
                    emoji: "📚",
                    label: "50 Lessons",
                    color: "from-blue-400 to-cyan-500",
                  },
                  {
                    emoji: "🗣️",
                    label: "Conversation Master",
                    color: "from-purple-400 to-pink-500",
                  },
                  {
                    emoji: "🏆",
                    label: "Quiz Champion",
                    color: "from-yellow-400 to-amber-500",
                  },
                  {
                    emoji: "⏰",
                    label: "Early Bird",
                    color: "from-green-400 to-emerald-500",
                  },
                  {
                    emoji: "🌟",
                    label: "Rising Star",
                    color: "from-indigo-400 to-purple-500",
                  },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-center"
                  >
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-2xl mb-2 shadow-lg`}
                    >
                      {badge.emoji}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {badge.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Weekly Analytics
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Words Learned</div>
                    <div className="text-2xl font-bold text-gray-900">47</div>
                  </div>
                  <div className="text-green-500 font-bold">+12%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Time Spent</div>
                    <div className="text-2xl font-bold text-gray-900">
                      3h 42m
                    </div>
                  </div>
                  <div className="text-green-500 font-bold">+25%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                    <div className="text-2xl font-bold text-gray-900">92%</div>
                  </div>
                  <div className="text-blue-500 font-bold">+5%</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-900 mb-2">
                  Focus Areas
                </div>
                <div className="text-sm text-gray-600">
                  Vocabulary (85%) • Pronunciation (78%) • Grammar (92%)
                </div>
              </div>
            </div>
          </div>
        );

      case "leaderboard":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                This Week's Top Learners
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Ade", points: 1245, rank: 1 },
                  { name: "Chioma", points: 1120, rank: 2 },
                  { name: "Kwame", points: 980, rank: 3 },
                  { name: "You", points: 845, rank: 4 },
                  { name: "Bola", points: 720, rank: 5 },
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.rank <= 3 ? "bg-white shadow-sm" : "bg-white/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          user.rank === 1
                            ? "bg-yellow-100 text-yellow-800"
                            : user.rank === 2
                            ? "bg-gray-100 text-gray-800"
                            : user.rank === 3
                            ? "bg-amber-100 text-amber-800"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {user.rank}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {user.points} points
                        </div>
                      </div>
                    </div>
                    {user.rank <= 3 && (
                      <div className="text-lg">
                        {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : "🥉"}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E1B300]/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#E1B300] rounded-full"></span>
            <span className="text-sm font-medium text-[#E1B300]">
              Core Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-[#E1B300]"> Master Yoruba</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real features that actually help you learn. No fluff, just effective
            language learning tools.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setActiveFeature(index)}
              className={`relative cursor-pointer group ${
                activeFeature === index
                  ? "ring-2 ring-[#E1B300] ring-offset-2"
                  : ""
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                {/* Icon and Premium Badge */}
                <div className="relative mb-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    {feature.isPremium && (
                      <span className="px-3 py-1 bg-gradient-to-r from-[#E1B300] to-amber-500 text-white text-xs font-bold rounded-full">
                        PREMIUM
                      </span>
                    )}
                  </div>
                </div>

                {/* Feature Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {feature.description}
                </p>

                {/* Feature Details */}
                <ul className="space-y-2">
                  {feature.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B300] mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Active Indicator */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div
                    className={`flex items-center justify-between ${
                      activeFeature === index
                        ? "text-[#E1B300]"
                        : "text-gray-400"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {activeFeature === index
                        ? "✓ Currently viewing"
                        : "Click to preview"}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-[#E1B300] text-white"
                          : "bg-gray-100 group-hover:bg-[#E1B300]/10"
                      }`}
                    >
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-16"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Selected Feature Details */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">
                    {features[activeFeature].icon}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#E1B300]">
                    {features[activeFeature].isPremium
                      ? "Premium Feature"
                      : "Core Feature"}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {features[activeFeature].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-8">
                {features[activeFeature].description}
              </p>

              <div className="space-y-4 mb-8">
                {features[activeFeature].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#E1B300]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B300]"></div>
                    </div>
                    <span className="text-gray-800">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Yoruba Example */}
              <div className="p-5 bg-gradient-to-r from-[#E1B300]/10 to-[#E1B300]/5 rounded-2xl border border-[#E1B300]/20">
                <div className="text-sm font-medium text-[#E1B300] mb-2">
                  Example:
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {features[activeFeature].demoType === "roleplay"
                    ? '"Báwo ni o ṣe ń lọ?"'
                    : features[activeFeature].demoType === "progress"
                    ? '"Mo ti kọ ẹ̀kọ́" (I have learned)'
                    : '"Mo n kọ Yoruba" (I am learning Yoruba)'}
                </div>
                <div className="text-gray-600">
                  {features[activeFeature].demoType === "roleplay"
                    ? "(How are you doing?)"
                    : features[activeFeature].demoType === "progress"
                    ? "(I have learned)"
                    : "(I am learning Yoruba)"}
                </div>
              </div>
            </div>

            {/* Right: Interactive Demo */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E1B300] to-orange-500 text-white rounded-full text-sm font-bold mb-4">
                  Live Preview
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {features[activeFeature].title} Demo
                </h4>
                <p className="text-gray-600">See how this feature works</p>
              </div>

              {/* Render appropriate demo */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderDemoContent()}
                </motion.div>
              </AnimatePresence>

              {/* ONE Question Quiz */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-bold text-gray-900">
                    Quick Yoruba Quiz
                  </h4>
                  <p className="text-sm text-gray-600">
                    Test your knowledge with one question!
                  </p>
                  <div className="text-xs text-gray-500 mt-1">
                    
                  </div>
                </div>

                {currentQuestion ? (
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-sm text-gray-500 mb-2">
                      Question of the day
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-4">
                      {currentQuestion.question}
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {currentQuestion.options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleAnswerSelect(idx)}
                          disabled={selectedAnswer !== null}
                          className={`p-4 rounded-lg text-center transition-all ${
                            selectedAnswer === idx
                              ? idx === currentQuestion.correct
                                ? "bg-green-100 border-2 border-green-500 text-green-800"
                                : "bg-red-100 border-2 border-red-500 text-red-800"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                          }`}
                        >
                          <div className="font-medium">{option}</div>
                          {selectedAnswer === idx && (
                            <div className="text-xs mt-1">
                              {idx === currentQuestion.correct
                                ? "✓ Correct!"
                                : "✗ Wrong"}
                            </div>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {showResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl text-center"
                      >
                        {selectedAnswer === currentQuestion.correct ? (
                          <>
                            <div className="text-4xl mb-2">🎉</div>
                            <div className="text-lg font-bold text-green-600 mb-1">
                              Correct!
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-4xl mb-2">💪</div>
                            <div className="text-lg font-bold text-red-600 mb-1">
                              Almost!
                            </div>
                          </>
                        )}
                        <div className="text-gray-700">
                          The Yoruba word{" "}
                          <span className="font-bold text-[#E1B300]">
                            "{currentQuestion.yoruba}"
                          </span>{" "}
                          means{" "}
                          <span className="font-bold">
                            "{currentQuestion.options[currentQuestion.correct]}"
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                          
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                    <div className="text-4xl mb-4">📝</div>
                    <h5 className="text-xl font-bold text-gray-900 mb-2">
                      Loading question...
                    </h5>
                    <p className="text-gray-600">Preparing your Yoruba quiz</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="bg-gradient-to-r from-[#E1B300] to-amber-500 rounded-3xl p-8 md:p-12 text-white shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: "6",
                label: "Core Features",
                desc: "Everything you need to learn",
              },
              {
                number: "24/7",
                label: "Practice Access",
                desc: "Learn anytime, anywhere",
              },
              {
                number: "100%",
                label: "Focus on Yoruba",
                desc: "Specialized language learning",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-white/80">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
