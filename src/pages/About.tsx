import { MapPin, Calendar, Award, Globe } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: "2015",
      title: "First International Trip",
      description: "Backpacked through Southeast Asia for 3 months, discovering my passion for travel",
      icon: Globe
    },
    {
      year: "2018",
      title: "Started Travel Blogging",
      description: "Launched 'Ashraf's Travel Diaries' to share stories and inspire others",
      icon: Calendar
    },
    {
      year: "2020",
      title: "50 Countries Milestone",
      description: "Reached the incredible milestone of visiting 50 countries across 6 continents",
      icon: MapPin
    },
    {
      year: "2023",
      title: "Travel Photography Award",
      description: "Won the International Travel Photography Award for 'Hidden Gems' series",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            About Ashraf
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto animate-slide-up">
            A passionate storyteller exploring the world's hidden treasures
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 fade-in">
            <h2 className="text-4xl font-bold gradient-text">
              Meet the Explorer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Ashraf Alam, a travel enthusiast, photographer, and storyteller based in Dubai. 
              For over a decade, I've been exploring our beautiful planet, documenting incredible cultures, 
              breathtaking landscapes, and unforgettable experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey began with a simple backpacking trip to Thailand in 2015, and since then, 
              I've visited over 65 countries, each teaching me something new about the world and myself. 
              Through this blog, I share not just the Instagram-worthy moments, but the real stories, 
              challenges, and life-changing encounters that make travel so transformative.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not exploring new destinations, you'll find me planning my next adventure, 
              editing photos, or helping fellow travelers plan their dream trips through my consultation services.
            </p>
          </div>
          <div className="flex justify-center fade-in">
            <img
              alt="Ashraf Alam" 
              className="rounded-2xl shadow-2xl max-w-md w-full travel-card hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center travel-card p-6 fade-in">
            <div className="text-4xl font-bold gradient-text mb-2">65+</div>
            <div className="text-muted-foreground">Countries Visited</div>
          </div>
          <div className="text-center travel-card p-6 fade-in">
            <div className="text-4xl font-bold gradient-text mb-2">200+</div>
            <div className="text-muted-foreground">Blog Posts</div>
          </div>
          <div className="text-center travel-card p-6 fade-in">
            <div className="text-4xl font-bold gradient-text mb-2">500K+</div>
            <div className="text-muted-foreground">Photos Taken</div>
          </div>
          <div className="text-center travel-card p-6 fade-in">
            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-muted-foreground">Miles Walked</div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">
            My Journey Milestones
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 travel-card p-6 fade-in">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Philosophy */}
        <div className="travel-card p-8 text-center fade-in">
          <h2 className="text-3xl font-bold gradient-text mb-6">My Travel Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Travel isn't just about visiting new places—it's about opening your mind, connecting with people 
            from different walks of life, and discovering that despite our differences, we share the same 
            hopes, dreams, and humanity. Every journey teaches us something new, not just about the world, 
            but about ourselves."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;