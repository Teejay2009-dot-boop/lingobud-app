import { motion } from "framer-motion";
import { useState } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Sign Up in Seconds",
      description:
        "Create your free account with just your email. No credit card required to start learning.",
      icon: "📝",
      color: "from-blue-400 to-cyan-400",
      details: [
        "Enter your email address",
        "Create a password",
        "Choose your Yoruba level",
        "Get instant access",
      ],
    },
    {
      number: 2,
      title: "Choose Learning Path",
      description:
        "Pick from courses, custom practice, or game-based learning.",
      icon: "🎯",
      color: "from-purple-400 to-pink-400",
      details: [
        "Select structured course",
        "Create custom practice",
        "Game-based learning",
        "Set daily goals",
      ],
    },
    {
      number: 3,
      title: "Start Learning & Track",
      description:
        "Begin lessons, earn badges, track streaks, watch skills grow.",
      icon: "🚀",
      color: "from-[#E1B300] to-amber-500",
      details: [
        "Complete interactive lessons",
        "Earn points and badges",
        "Track daily streaks",
        "Monitor progress analytics",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E1B300]/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#E1B300] rounded-full"></span>
            <span className="text-sm font-medium text-[#E1B300]">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Speaking Yoruba in
            <span className="text-[#E1B300]"> 3 Easy Steps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started with Lingobud is quick, easy, and designed to get
            you speaking Yoruba from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer bg-white rounded-xl p-6 border-2 transition-all ${
                  activeStep === index
                    ? "border-[#E1B300] shadow-lg"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xl font-bold mb-4`}
                  >
                    {step.number}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 w-full">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E1B300] flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm text-left">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Select Indicator */}
                  <div
                    className={`mt-6 pt-4 border-t w-full ${
                      activeStep === index
                        ? "border-[#E1B300]"
                        : "border-gray-100"
                    }`}
                  >
                    <div
                      className={`text-sm font-medium ${
                        activeStep === index
                          ? "text-[#E1B300]"
                          : "text-gray-500"
                      }`}
                    >
                      {activeStep === index ? "✓ Selected" : "Click to view"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed View */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-12">
          <div className="flex flex-col lg:flex-row">
            {/* Left Panel */}
            <div className="p-6 lg:p-8 lg:w-1/2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {steps[activeStep].number}
                  </div>
                  <div>
                    <div className="text-sm text-[#E1B300] font-medium">
                      Step {steps[activeStep].number} of 3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {steps[activeStep].description}
                </p>

                <div className="space-y-3 mb-6">
                  {steps[activeStep].details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#E1B300]/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E1B300]"></div>
                      </div>
                      <div className="font-medium text-gray-800">{detail}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-gradient-to-r from-[#E1B300]/10 to-[#E1B300]/5 rounded-lg border border-[#E1B300]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#E1B300] font-medium">
                        Time Required
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {activeStep === 0
                          ? "< 1 minute"
                          : activeStep === 1
                          ? "2-3 minutes"
                          : "15min/day"}
                      </div>
                    </div>
                    <div className="text-3xl">
                      {activeStep === 0 ? "⏱️" : activeStep === 1 ? "🎯" : "📊"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="bg-gray-50 p-6 lg:p-8 lg:w-1/2">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-[#E1B300] text-white rounded-full text-sm font-bold mb-3">
                  Preview
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {steps[activeStep].title} Demo
                </h4>
                <p className="text-gray-600 text-sm">See how it works</p>
              </div>

              {/* Demo Content */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                {activeStep === 0 && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl mb-3">📝</div>
                      <h5 className="text-lg font-bold text-gray-900 mb-2">
                        Sign Up
                      </h5>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Email</div>
                        <div className="p-3 bg-gray-100 rounded-lg">
                          email@example.com
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Password
                        </div>
                        <div className="p-3 bg-gray-100 rounded-lg">
                          ••••••••
                        </div>
                      </div>
                      <button className="w-full py-3 bg-[#E1B300] text-white font-bold rounded-lg hover:bg-amber-600">
                        Create Account
                      </button>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🗺️</div>
                      <h5 className="text-lg font-bold text-gray-900 mb-2">
                        Choose Path
                      </h5>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Structured Course",
                        "Game-Based",
                        "Custom Practice",
                      ].map((path, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg border ${
                            idx === 0
                              ? "border-[#E1B300] bg-[#E1B300]/5"
                              : "border-gray-200"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-xl">
                              {idx === 0 ? "📚" : idx === 1 ? "🎮" : "⚡"}
                            </div>
                            <div className="font-medium text-gray-900">
                              {path}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🚀</div>
                      <h5 className="text-lg font-bold text-gray-900 mb-2">
                        Start Learning
                      </h5>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <div className="text-sm text-gray-600">
                            First Lesson
                          </div>
                          <div className="font-bold">Basic Greetings</div>
                        </div>
                        <button className="px-4 py-2 bg-[#E1B300] text-white font-bold rounded-lg">
                          Start
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-xl font-bold text-[#E1B300]">
                            0
                          </div>
                          <div className="text-sm text-gray-600">
                            Day Streak
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-xl font-bold text-[#E1B300]">
                            0
                          </div>
                          <div className="text-sm text-gray-600">Badges</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`px-4 py-2 text-sm ${
                    activeStep === 0
                      ? "text-gray-400"
                      : "text-gray-700 hover:text-[#E1B300]"
                  }`}
                >
                  ← Previous
                </button>

                <div className="flex gap-2">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`w-2 h-2 rounded-full ${
                        activeStep === idx ? "bg-[#E1B300]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep(Math.min(2, activeStep + 1))}
                  disabled={activeStep === 2}
                  className={`px-4 py-2 text-sm ${
                    activeStep === 2
                      ? "text-gray-400"
                      : "text-gray-700 hover:text-[#E1B300]"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Learning Yoruba?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands already speaking Yoruba with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-8 py-3 bg-[#E1B300] text-white font-bold rounded-full hover:bg-amber-600">
              Get Started Free
            </button>
            <button className="px-8 py-3 border-2 border-[#E1B300] text-[#E1B300] font-bold rounded-full hover:bg-[#E1B300]/10">
              Watch Demo
            </button>
          </div>

          <div className="mt-6 text-gray-500 text-sm">
            No credit card • 7-day free trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
