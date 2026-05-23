import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { CafeDetails } from './components/CafeDetails';
import { BookingFlow } from './components/BookingFlow';

export type Screen = 'home' | 'details' | 'booking' | 'success';
export type Theme = 'light' | 'dark' | 'system';

export interface Cafe {
  id: number;
  name: string;
  address: string;
  rating: number;
  image: string;
  description: string;
  hours: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('daily-rituals-theme') as Theme;
    return saved || 'light';
  });
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateTheme = () => {
      if (theme === 'system') {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setActualTheme(systemPreference);
      } else {
        setActualTheme(theme);
      }
    };

    updateTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => updateTheme();
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('daily-rituals-theme', theme);
  }, [theme]);

  const handleCafeSelect = (cafe: Cafe) => {
    setSelectedCafe(cafe);
    setCurrentScreen('details');
  };

  const handleBookNow = () => {
    setCurrentScreen('booking');
  };

  const handleBookingComplete = () => {
    setCurrentScreen('success');
  };

  const handleBackHome = () => {
    setCurrentScreen('home');
    setSelectedCafe(null);
  };

  return (
    <div className={`size-full overflow-auto ${actualTheme === 'dark' ? 'dark' : ''}`}>
      <div className="size-full overflow-auto bg-[#FAFAF9] dark:bg-[#0A0A0A] transition-colors duration-300">
        {currentScreen === 'home' && (
          <Home
            onCafeSelect={handleCafeSelect}
            theme={theme}
            actualTheme={actualTheme}
            onThemeChange={setTheme}
          />
        )}
        {currentScreen === 'details' && selectedCafe && (
          <CafeDetails
            cafe={selectedCafe}
            onBookNow={handleBookNow}
            onBack={handleBackHome}
            theme={theme}
            actualTheme={actualTheme}
            onThemeChange={setTheme}
          />
        )}
        {currentScreen === 'booking' && selectedCafe && (
          <BookingFlow
            cafe={selectedCafe}
            onComplete={handleBookingComplete}
            onBack={() => setCurrentScreen('details')}
            theme={theme}
            actualTheme={actualTheme}
            onThemeChange={setTheme}
          />
        )}
        {currentScreen === 'success' && (
          <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-[#8A9A5B] dark:bg-[#A8BA6F] flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-[#8A9A5B]/20 blur-3xl rounded-full"></div>
              </div>

              <h1 className="text-4xl mb-4 text-[#1C1C1C] dark:text-white">Reservation Confirmed!</h1>
              <p className="text-lg text-[#6F4E37] dark:text-[#C9A66B] mb-8">
                We can't wait to welcome you to<br />
                <span className="font-semibold">{selectedCafe?.name}</span>
              </p>

              <div className="bg-white dark:bg-[#1C1C1C] rounded-2xl p-6 shadow-xl mb-8 border border-[#E8DCCF] dark:border-[#2A2A2A]">
                <p className="text-sm text-[#6F4E37] dark:text-[#C9A66B] mb-4">Quick Tips for Your Visit:</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A9A5B] dark:text-[#A8BA6F]">✓</span>
                    <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70">Arrive 5-10 minutes early for best seating</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A9A5B] dark:text-[#A8BA6F]">✓</span>
                    <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70">Free WiFi available for all guests</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#8A9A5B] dark:text-[#A8BA6F]">✓</span>
                    <p className="text-sm text-[#2C2C2C]/70 dark:text-white/70">Tag us @dailyrituals.hyd on Instagram!</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBackHome}
                className="px-10 py-4 bg-[#6F4E37] dark:bg-[#8A6A47] text-white rounded-full hover:bg-[#5A3E2B] dark:hover:bg-[#6F4E37] transition-all shadow-lg hover:shadow-xl mb-4 text-lg"
              >
                Explore More Locations
              </button>
              <p className="text-sm text-[#6F4E37] dark:text-[#C9A66B]">See you soon! ☕</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
