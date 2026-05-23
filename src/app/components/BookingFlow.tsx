import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, Sun, Moon, Monitor } from 'lucide-react';
import { Cafe, Theme } from '../App';

interface BookingFlowProps {
  cafe: Cafe;
  onComplete: () => void;
  onBack: () => void;
  theme: Theme;
  actualTheme: 'light' | 'dark';
  onThemeChange: (theme: Theme) => void;
}

const seatingTypes = [
  { id: 'window', name: 'Window Seat', icon: '🪟', desc: 'Natural light, perfect views' },
  { id: 'couple', name: "Couple's Corner", icon: '💑', desc: 'Intimate & cozy for two' },
  { id: 'group', name: 'Group Table', icon: '👥', desc: 'Spacious for 4-6 people' },
  { id: 'work', name: 'Work Desk', icon: '💻', desc: 'Focus mode with WiFi' },
  { id: 'outdoor', name: 'Outdoor Seating', icon: '🌿', desc: 'Fresh air & greenery' },
  { id: 'lounge', name: 'Lounge Area', icon: '🛋️', desc: 'Relax on comfy sofas' },
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];

const guestCounts = [1, 2, 3, 4, 5, 6];

export function BookingFlow({ cafe, onComplete, onBack, theme, actualTheme, onThemeChange }: BookingFlowProps) {
  const [step, setStep] = useState<'seating' | 'datetime' | 'guests' | 'confirm'>('seating');
  const [selectedSeating, setSelectedSeating] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [customerName, setCustomerName] = useState<string>('');

  const handleContinue = () => {
    if (step === 'seating' && selectedSeating) {
      setStep('datetime');
    } else if (step === 'datetime' && selectedDate && selectedTime) {
      setStep('guests');
    } else if (step === 'guests') {
      setStep('confirm');
    }
  };

  const handleConfirmBooking = () => {
    onComplete();
  };

  const canContinue = () => {
    if (step === 'seating') return selectedSeating !== null;
    if (step === 'datetime') return selectedDate !== '' && selectedTime !== '';
    if (step === 'guests') return customerName.trim() !== '';
    return false;
  };

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

      <div
        className="bg-cover bg-center text-white py-8 px-6 relative"
        style={{
          backgroundImage: actualTheme === 'dark'
            ? `linear-gradient(rgba(20, 20, 20, 0.92), rgba(10, 10, 10, 0.95)), url('https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`
            : `linear-gradient(rgba(111, 78, 55, 0.95), rgba(111, 78, 55, 0.95)), url('https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all mb-6 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl mb-2">Reserve Your Table</h1>
          <p className="text-[#E8DCCF]">{cafe.name}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className={`flex items-center gap-2 ${step === 'seating' ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'seating' ? 'border-white bg-white/20' : 'border-white/50'}`}>
                <span className="text-sm">1</span>
              </div>
              <span className="text-sm">Seating</span>
            </div>
            <div className="h-px w-8 bg-white/30"></div>
            <div className={`flex items-center gap-2 ${step === 'datetime' ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'datetime' ? 'border-white bg-white/20' : 'border-white/50'}`}>
                <span className="text-sm">2</span>
              </div>
              <span className="text-sm">Date & Time</span>
            </div>
            <div className="h-px w-8 bg-white/30"></div>
            <div className={`flex items-center gap-2 ${step === 'guests' ? 'text-white' : 'text-white/50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step === 'guests' ? 'border-white bg-white/20' : 'border-white/50'}`}>
                <span className="text-sm">3</span>
              </div>
              <span className="text-sm">Details</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-[#1C1C1C] rounded-3xl shadow-xl dark:shadow-2xl p-8 border border-transparent dark:border-[#2A2A2A]">
          {step === 'seating' && (
            <div>
              <h2 className="text-2xl mb-2 text-[#2C2C2C]">Choose Your Perfect Spot</h2>
              <p className="text-[#6F4E37] mb-6">Select the seating that matches your vibe</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {seatingTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedSeating(type.id)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left hover:shadow-lg ${
                      selectedSeating === type.id
                        ? 'border-[#8A9A5B] bg-[#8A9A5B]/10 shadow-md'
                        : 'border-[#E8DCCF] hover:border-[#8A9A5B]/50 bg-white'
                    }`}
                  >
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <h3 className="text-base text-[#2C2C2C] mb-1">{type.name}</h3>
                    <p className="text-sm text-[#6F4E37]">{type.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'datetime' && (
            <div>
              <h2 className="text-2xl mb-6 text-[#2C2C2C]">Choose Date & Time</h2>

              <div className="mb-8">
                <label className="flex items-center gap-2 text-[#6F4E37] mb-3">
                  <Calendar className="w-5 h-5" />
                  <span>Select Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCCF] focus:border-[#8A9A5B] outline-none text-[#2C2C2C]"
                />
              </div>

              <div className="mb-8">
                <label className="flex items-center gap-2 text-[#6F4E37] mb-3">
                  <Clock className="w-5 h-5" />
                  <span>Select Time</span>
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl border-2 transition-all ${
                        selectedTime === time
                          ? 'border-[#8A9A5B] bg-[#8A9A5B] text-white'
                          : 'border-[#E8DCCF] hover:border-[#8A9A5B] text-[#2C2C2C]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 'guests' && (
            <div>
              <h2 className="text-2xl mb-6 text-[#2C2C2C]">Booking Details</h2>
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#6F4E37] mb-3">
                  <Users className="w-5 h-5" />
                  <span>Number of Guests</span>
                </label>
                <div className="grid grid-cols-6 gap-3">
                  {guestCounts.map((count) => (
                    <button
                      key={count}
                      onClick={() => setGuestCount(count)}
                      className={`py-4 rounded-xl border-2 transition-all text-xl ${
                        guestCount === count
                          ? 'border-[#8A9A5B] bg-[#8A9A5B] text-white shadow-lg'
                          : 'border-[#E8DCCF] hover:border-[#8A9A5B] text-[#2C2C2C] bg-white'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-[#6F4E37] mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name (e.g., Fatima Khan)"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E8DCCF] focus:border-[#8A9A5B] outline-none text-[#2C2C2C] bg-white"
                />
              </div>
            </div>
          )}

          {step === 'confirm' && (
            <div>
              <h2 className="text-2xl mb-2 text-[#2C2C2C]">Confirm Your Reservation</h2>
              <p className="text-[#6F4E37] mb-6">Please review your booking details</p>
              <div className="space-y-4 mb-8">
                {customerName && (
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-[#E8DCCF]">
                    <div className="w-12 h-12 bg-[#8A9A5B] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">{customerName[0]?.toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#6F4E37] mb-1">Guest Name</p>
                      <p className="text-[#2C2C2C] text-lg">{customerName}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-[#E8DCCF]">
                  <div className="w-12 h-12 bg-[#8A9A5B] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#6F4E37] mb-1">Location</p>
                    <p className="text-[#2C2C2C]">{cafe.name}</p>
                    <p className="text-sm text-[#2C2C2C]/70">{cafe.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-[#E8DCCF]">
                  <div className="w-12 h-12 bg-[#8A9A5B] rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#6F4E37] mb-1">Date & Time</p>
                    <p className="text-[#2C2C2C]">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-sm text-[#2C2C2C]/70">{selectedTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-[#E8DCCF]">
                  <div className="w-12 h-12 bg-[#8A9A5B] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#6F4E37] mb-1">Booking Details</p>
                    <p className="text-[#2C2C2C]">{guestCount} {guestCount === 1 ? 'guest' : 'guests'}</p>
                    <p className="text-sm text-[#2C2C2C]/70">
                      {seatingTypes.find(s => s.id === selectedSeating)?.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#8A9A5B]/10 rounded-xl p-4 mb-6 border-2 border-[#8A9A5B]/20">
                <p className="text-sm text-[#2C2C2C]/70 text-center">
                  📱 You'll receive a confirmation SMS shortly after booking
                </p>
              </div>

              <button
                onClick={handleConfirmBooking}
                className="w-full py-4 bg-[#6F4E37] text-white rounded-full text-lg hover:bg-[#5A3E2B] transition-all shadow-lg hover:shadow-xl"
              >
                Confirm & Reserve Table
              </button>
            </div>
          )}

          {step !== 'confirm' && (
            <button
              onClick={handleContinue}
              disabled={!canContinue()}
              className={`w-full py-4 rounded-full text-lg transition-colors ${
                canContinue()
                  ? 'bg-[#6F4E37] text-white hover:bg-[#5A3E2B]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}