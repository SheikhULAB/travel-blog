import { useState } from 'react';
import { MapPin, Calendar, Star, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Destinations = () => {
  const [selectedContinent, setSelectedContinent] = useState('All');

  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      continent: "Europe",
      country: "Greece",
      flag: "🇬🇷",
      description: "Stunning sunsets, white-washed buildings, and crystal-clear waters make this Greek island a photographer's paradise.",
      bestTime: "April - October",
      duration: "5-7 days",
      difficulty: "Easy",
      highlights: ["Oia Sunset", "Blue Dome Churches", "Red Beach", "Wine Tasting"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      continent: "Asia",
      country: "Japan",
      flag: "🇯🇵",
      description: "Ancient temples, traditional ryokans, and the famous bamboo forest create an unforgettable cultural experience.",
      bestTime: "March - May, October - November",
      duration: "4-6 days",
      difficulty: "Easy",
      highlights: ["Fushimi Inari Shrine", "Bamboo Grove", "Kiyomizu Temple", "Geisha District"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Patagonia, Chile",
      continent: "South America",
      country: "Chile",
      flag: "🇨🇱",
      description: "Dramatic landscapes, towering peaks, and pristine wilderness offer the ultimate adventure experience.",
      bestTime: "December - March",
      duration: "10-14 days",
      difficulty: "Challenging",
      highlights: ["Torres del Paine", "Grey Glacier", "Puma Tracking", "Gaucho Culture"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Serengeti, Tanzania",
      continent: "Africa",
      country: "Tanzania",
      flag: "🇹🇿",
      description: "Witness the Great Migration and encounter Africa's Big Five in one of the world's most famous national parks.",
      bestTime: "June - October",
      duration: "7-10 days",
      difficulty: "Moderate",
      highlights: ["Great Migration", "Big Five Safari", "Hot Air Balloon", "Maasai Culture"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Banff, Canada",
      continent: "North America",
      country: "Canada",
      flag: "🇨🇦",
      description: "Pristine mountain lakes, snow-capped peaks, and abundant wildlife in Canada's most beautiful national park.",
      bestTime: "June - September",
      duration: "5-8 days",
      difficulty: "Moderate",
      highlights: ["Lake Louise", "Moraine Lake", "Hiking Trails", "Aurora Borealis"],
      rating: 4,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Queenstown, New Zealand",
      continent: "Oceania",
      country: "New Zealand",
      flag: "🇳🇿",
      description: "Adventure capital of the world with bungee jumping, skydiving, and stunning fjords at every turn.",
      bestTime: "December - February",
      duration: "6-9 days",
      difficulty: "Moderate",
      highlights: ["Milford Sound", "Bungee Jumping", "Wine Tours", "Skydiving"],
      rating: 5,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const continents = ['All', 'Europe', 'Asia', 'Africa', 'North America', 'South America', 'Oceania'];

  const filteredDestinations = selectedContinent === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.continent === selectedContinent);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Destinations
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto animate-slide-up">
            Discover the world's most incredible places through my adventures
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {continents.map((continent) => (
            <Button
              key={continent}
              variant={selectedContinent === continent ? "default" : "outline"}
              onClick={() => setSelectedContinent(continent)}
              className={selectedContinent === continent ? "btn-primary" : ""}
            >
              {continent}
            </Button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Card key={destination.id} className="travel-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">{destination.flag}</span>
                    <span className="font-semibold">{destination.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{destination.name}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{destination.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">{destination.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-travel-deep-blue" />
                    <span>{destination.bestTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-travel-violet" />
                    <span>{destination.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                    {destination.difficulty}
                  </span>
                  <Button variant="ghost" size="sm" className="text-travel-deep-blue hover:text-travel-violet">
                    Read More →
                  </Button>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-muted rounded-md text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 space-y-6">
          <h2 className="text-3xl font-bold gradient-text">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized travel recommendations and detailed itineraries for any destination.
          </p>
          <Button className="btn-primary text-lg px-8 py-4">
            Plan Your Trip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;