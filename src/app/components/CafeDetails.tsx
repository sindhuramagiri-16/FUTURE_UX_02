import { ArrowLeft, Clock, MapPin, Star, Sun, Moon, Monitor } from 'lucide-react';
import { Cafe, Theme } from '../App';

interface CafeDetailsProps {
  cafe: Cafe;
  onBookNow: () => void;
  onBack: () => void;
  theme: Theme;
  actualTheme: 'light' | 'dark';
  onThemeChange: (theme: Theme) => void;
}

const seatingOptions = [
  { id: 1, name: "Window Seat", capacity: "1-2 people", available: true, price: "Free" },
  { id: 2, name: "Couple's Corner", capacity: "2 people", available: true, price: "Free" },
  { id: 3, name: "Group Table", capacity: "4-6 people", available: true, price: "Free" },
  { id: 4, name: "Work-Friendly Desk", capacity: "1 person", available: false, price: "Free" },
  { id: 5, name: "Lounge Area", capacity: "2-4 people", available: true, price: "Free" },
  { id: 6, name: "Outdoor Seating", capacity: "2-3 people", available: true, price: "Free" },
];

const reviews = [
  { name: "Syed Ahmed", rating: 5, text: "Best coffee in the area! The ambience is perfect for working.", time: "2 days ago" },
  { name: "Kavya Menon", rating: 5, text: "Love the aesthetic vibes here. Great for photoshoots and dates!", time: "1 week ago" },
  { name: "Vikram Rao", rating: 4, text: "Good coffee and friendly staff. Can get crowded on weekends.", time: "2 weeks ago" },
];

export function CafeDetails({ cafe, onBookNow, onBack, theme, actualTheme, onThemeChange }: CafeDetailsProps) {
  return (
    <div className="min-h-screen pb-12 bg-[#FAFAF9] dark:bg-[#0A0A0A]">
      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-white dark:bg-[#1C1C1C] rounded-full shadow-lg border border-gray-200 dark:border-[#2A2A2A] p-1 flex gap-1">
        <button
          onClick={() => onThemeChange('light')}
          className={`p-2.5 rounded-full transition-all ${
            theme === 'light'
              ? 'bg-[#6F4E37] text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2A2A2A]'
          }`}
        >
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => onThemeChange('dark')}
          className={`p-2.5 rounded-full transition-all ${
            theme === 'dark'
              ? 'bg-[#6F4E37] text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2A2A2A]'
          }`}
        >
          <Moon className="w-4 h-4" />
        </button>
        <button
          onClick={() => onThemeChange('system')}
          className={`p-2.5 rounded-full transition-all ${
            theme === 'system'
              ? 'bg-[#6F4E37] text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2A2A2A]'
          }`}
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>

      <div className="relative">
        <div className="relative h-[32rem] overflow-hidden">
          <img
            src={cafe.image}
            alt={cafe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <button
          onClick={onBack}
          className="absolute top-6 left-6 w-12 h-12 bg-white/95 dark:bg-[#1C1C1C]/95 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-[#1C1C1C] transition-all shadow-lg hover:shadow-xl border border-white/50 dark:border-white/10"
        >
          <ArrowLeft className="w-6 h-6 text-[#2C2C2C] dark:text-white" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 relative">
        <div className="bg-white dark:bg-[#1C1C1C] rounded-3xl shadow-2xl dark:shadow-xl p-8 border border-transparent dark:border-[#2A2A2A]">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl mb-2 text-[#1C1C1C] dark:text-white">{cafe.name}</h1>
              <div className="flex items-center gap-4 text-[#6F4E37] dark:text-[#C9A66B]">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{cafe.address}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-[#8A9A5B] dark:bg-[#A8BA6F] text-white px-4 py-2 rounded-full">
              <Star className="w-5 h-5 fill-current" />
              <span>{cafe.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6 text-[#6F4E37] dark:text-[#C9A66B]">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{cafe.hours}</span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-3 text-[#2C2C2C]">About This Location</h2>
            <p className="text-[#2C2C2C]/70 leading-relaxed">{cafe.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-4 text-[#2C2C2C]">Available Seating Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {seatingOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-5 rounded-2xl border-2 transition-all ${
                    option.available
                      ? 'border-[#E8DCCF] hover:border-[#8A9A5B] hover:shadow-md cursor-pointer bg-white'
                      : 'border-gray-200 opacity-50 cursor-not-allowed bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base text-[#2C2C2C]">{option.name}</h3>
                        {option.available && (
                          <span className="text-xs bg-[#8A9A5B]/10 text-[#8A9A5B] px-2 py-1 rounded-full">Available</span>
                        )}
                      </div>
                      <p className="text-sm text-[#6F4E37] mb-1">{option.capacity}</p>
                      <p className="text-xs text-[#8A9A5B]">{option.price}</p>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full mt-1 ${
                        option.available ? 'bg-[#8A9A5B] animate-pulse' : 'bg-gray-400'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-4 text-[#2C2C2C]">Customer Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-[#F7F4EF] rounded-xl p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center">
                        <span className="text-[#6F4E37] text-sm">{review.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-sm text-[#2C2C2C]">{review.name}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-[#8A9A5B] fill-[#8A9A5B]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-[#6F4E37]">{review.time}</span>
                  </div>
                  <p className="text-sm text-[#2C2C2C]/70 ml-13">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl mb-4 text-[#2C2C2C]">Signature Menu</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Espresso', price: '₹120' },
                { name: 'Cappuccino', price: '₹150' },
                { name: 'Cold Brew', price: '₹180' },
                { name: 'Irani Chai', price: '₹80' }
              ].map((item) => (
                <div key={item.name} className="bg-white border-2 border-[#E8DCCF] rounded-xl p-4 text-center hover:border-[#8A9A5B] transition-colors">
                  <p className="text-[#2C2C2C] mb-1">{item.name}</p>
                  <p className="text-sm text-[#8A9A5B]">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onBookNow}
            className="w-full py-4 bg-[#6F4E37] text-white rounded-full text-lg hover:bg-[#5A3E2B] transition-all shadow-lg hover:shadow-xl"
          >
            Reserve Your Table Now
          </button>
        </div>
      </div>
    </div>
  );
}