import { MapPin, Star, Heart, Sun, Moon, Monitor, Coffee } from 'lucide-react';
import { Cafe, Theme } from '../App';
import { Logo } from './Logo';

interface HomeProps {
  onCafeSelect: (cafe: Cafe) => void;
  theme: Theme;
  actualTheme: 'light' | 'dark';
  onThemeChange: (theme: Theme) => void;
}

const cafes: Cafe[] = [
  {
    id: 1,
    name: "Daily Rituals Jubilee Hills",
    address: "Road No. 36, Film Nagar, Jubilee Hills",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1621343607959-5d11ff0f1e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Premium café with minimalist interiors, warm wooden accents, and natural light. The go-to spot for Hyderabad's creative minds and professionals.",
    hours: "7:00 AM - 11:00 PM"
  },
  {
    id: 2,
    name: "Daily Rituals Banjara Hills",
    address: "Road No. 12, Near KBR Park, Banjara Hills",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1613274554329-70f997f5789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Elegant café featuring aesthetic white and wood interiors. Perfect for Instagram-worthy moments and relaxed conversations.",
    hours: "6:30 AM - 11:30 PM"
  },
  {
    id: 3,
    name: "Daily Rituals Gachibowli",
    address: "DLF Cyber City, IKEA Chowk, Gachibowli",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1770816307625-654a45b5fa0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Modern co-working café vibe with high-speed WiFi. Where tech professionals fuel their hustle with artisan coffee and great vibes.",
    hours: "7:00 AM - 10:00 PM"
  },
  {
    id: 4,
    name: "Daily Rituals Hitech City",
    address: "Cyber Towers, Mindspace Junction, Hitech City",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1645677020082-721a854c24f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description: "Cozy café with warm lighting and coffee bar seating. Watch our skilled baristas craft your perfect pour-over while you unwind.",
    hours: "8:00 AM - 12:00 AM"
  }
];

const testimonials = [
  { name: "Arjun Reddy", role: "Software Engineer", location: "Gachibowli", text: "My daily WFH escape! The coffee is top-notch and WiFi never disappoints." },
  { name: "Priya Sharma", role: "Content Creator", location: "Jubilee Hills", text: "Aesthetic interiors, perfect lighting for content, and the best cold brew in town!" },
  { name: "Meera Kapoor", role: "Student, ISB", location: "Banjara Hills", text: "Perfect study spot near campus. Love the peaceful ambience and strong espresso!" }
];

export function Home({ onCafeSelect, theme, actualTheme, onThemeChange }: HomeProps) {
  return (
    <div className="min-h-screen bg-[#F7F4EF] dark:bg-gray-900 transition-colors duration-300">
      <header
        className="relative bg-cover bg-center text-white py-24 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(111, 78, 55, 0.85), rgba(111, 78, 55, 0.75)), url('https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl blur-3xl"></div>
              <div className="relative bg-white/95 dark:bg-[#1C1C1C]/95 backdrop-blur-md px-8 py-6 rounded-3xl border-2 border-white/50 dark:border-white/10 shadow-2xl">
                <Logo className="h-20 text-[#6F4E37] dark:text-[#C9A66B]" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-[#E8DCCF] dark:bg-white/30"></div>
              <span className="text-sm tracking-widest text-[#E8DCCF] dark:text-white/70 uppercase">Hyderabad</span>
              <div className="h-px w-12 bg-[#E8DCCF] dark:bg-white/30"></div>
            </div>
          </div>
          <p className="text-2xl text-[#E8DCCF] dark:text-white/90 mb-2 font-light">Where Every Sip Tells a Story</p>
          <p className="text-base text-white/80 dark:text-white/60 italic">Premium Coffee Culture • Aesthetic Spaces • Urban Lifestyle</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-[#8A9A5B]/10 dark:bg-[#A8BA6F]/10 rounded-full border border-[#8A9A5B]/20 dark:border-[#A8BA6F]/20">
            <span className="text-sm text-[#8A9A5B] dark:text-[#A8BA6F] tracking-wider uppercase">Our Locations</span>
          </div>
          <h2 className="text-4xl mb-4 text-[#1C1C1C] dark:text-white">Find Your Perfect Spot</h2>
          <p className="text-lg text-[#6F4E37] dark:text-[#C9A66B] max-w-2xl mx-auto">Discover premium café experiences across Hyderabad's most vibrant neighborhoods</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cafes.map((cafe) => (
            <div
              key={cafe.id}
              onClick={() => onCafeSelect(cafe)}
              className="bg-white dark:bg-[#1C1C1C] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-transparent dark:border-[#2A2A2A]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-[#1C1C1C]/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg border border-white/50 dark:border-white/10">
                  <Star className="w-4 h-4 text-[#8A9A5B] dark:text-[#A8BA6F] fill-[#8A9A5B] dark:fill-[#A8BA6F]" />
                  <span className="text-[#2C2C2C] dark:text-white font-semibold">{cafe.rating}</span>
                </div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-white hover:fill-white cursor-pointer drop-shadow-lg" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-[#1C1C1C] dark:text-white group-hover:text-[#6F4E37] dark:group-hover:text-[#C9A66B] transition-colors">{cafe.name}</h3>
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-[#8A9A5B] dark:text-[#A8BA6F] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#6F4E37] dark:text-[#C9A66B]">{cafe.address}</p>
                </div>
                <p className="text-sm text-[#2C2C2C]/70 dark:text-white/60 mb-5 line-clamp-2 leading-relaxed">{cafe.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#E8DCCF] dark:border-[#2A2A2A]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#8A9A5B] dark:bg-[#A8BA6F] animate-pulse"></div>
                    <span className="text-xs text-[#8A9A5B] dark:text-[#A8BA6F] uppercase tracking-wider">Open Now</span>
                  </div>
                  <span className="text-[#6F4E37] dark:text-[#C9A66B] group-hover:translate-x-2 transition-transform text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mb-20 bg-cover bg-center rounded-3xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.85), rgba(44, 44, 44, 0.9)), url('https://images.unsplash.com/photo-1579265898841-79c7890d69cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`
          }}
        >
          <div className="p-12 text-center text-white">
            <h3 className="text-3xl mb-3">What Makes Us Special</h3>
            <p className="text-white/70 mb-12 max-w-2xl mx-auto">Experience the perfect blend of premium coffee, aesthetic spaces, and Hyderabadi hospitality</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-[#8A9A5B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg mb-2">Instant Booking</h4>
                <p className="text-sm text-white/70">Reserve your favorite table in under 30 seconds</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-[#8A9A5B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg mb-2">Instagram-Worthy</h4>
                <p className="text-sm text-white/70">Aesthetic interiors perfect for your feed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-[#8A9A5B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg mb-2">Artisan Coffee</h4>
                <p className="text-sm text-white/70">Specialty beans, expert baristas, perfect brews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#EFE6DD] to-[#E8DCCF] rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-3 text-[#2C2C2C]">Loved by Hyderabadis</h3>
            <p className="text-[#6F4E37]">See what our community has to say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#8A9A5B] fill-[#8A9A5B]" />
                  ))}
                </div>
                <p className="text-sm text-[#2C2C2C]/80 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8A9A5B]/20 flex items-center justify-center">
                    <span className="text-[#6F4E37]">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#2C2C2C]">{testimonial.name}</p>
                    <p className="text-xs text-[#6F4E37]">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}