import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'App', id: 'app' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      {/* Main Navbar - Simple and clean */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E1B300] py-3 shadow">
        <div className="px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => scrollToSection('home')}
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[#E1B300] font-bold">LB</span>
              </div>
              <span className="text-xl font-bold text-white">Lingobud</span>
            </div>

            {/* Desktop Navigation - Shows on laptop and up */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-gray-200 font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-5 py-2 bg-white text-[#E1B300] font-bold rounded-full hover:bg-gray-100 text-sm"
              >
                Get Started
              </button>
            </div>

            {/* Hamburger for ALL screens below laptop (mobile & tablet) */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-white p-1"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - Shows on mobile & tablet when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Shows on mobile & tablet */}
      <div 
        className={`fixed top-0 left-0 h-full bg-white z-50 shadow-xl transition-transform duration-200 lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '280px' }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E1B300] flex items-center justify-center">
              <span className="text-white font-bold">LB</span>
            </div>
            <span className="font-bold text-gray-900">Lingobud</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 p-1"
          >
            <div className="w-5 h-5 relative">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-500 rotate-45"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-500 -rotate-45"></span>
            </div>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="p-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left p-3 text-gray-700 hover:text-[#E1B300] hover:bg-gray-100 rounded text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Get Started Button in Sidebar */}
          <div className="mt-6">
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full p-3 bg-[#E1B300] text-white font-bold rounded hover:bg-[#B89100] text-sm"
            >
              Get Started
            </button>
          </div>

          {/* App Download */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-gray-600 mb-3 text-sm text-center">Get the app</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <div className="text-lg">📱</div>
                <div>
                  <div className="text-sm font-medium">App Store</div>
                  <div className="text-xs text-gray-500">For iOS</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                <div className="text-lg">🤖</div>
                <div>
                  <div className="text-sm font-medium">Play Store</div>
                  <div className="text-xs text-gray-500">For Android</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevent body scroll */}
      <style jsx>{`
        body {
          overflow: ${isSidebarOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </>
  );
}
