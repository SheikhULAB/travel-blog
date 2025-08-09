import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import HeroCarousel from '../components/HeroCarousel';

const Index = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Hiking the Inca Trail to Machu Picchu",
      excerpt: "Four days of incredible landscapes and ancient history in Peru",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Adventure"
    },
    {
      id: 2,
      title: "Street Food Adventures in Bangkok",
      excerpt: "Discovering the incredible flavors of Thailand's capital",
      image: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?auto=format&fit=crop&w=800&q=80",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Food"
    },
    {
      id: 3,
      title: "Northern Lights Photography Guide",
      excerpt: "Tips for capturing the perfect aurora photograph",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "Photography"
    }
  ];

  const stats = [
    { number: "65+", label: "Countries Visited" },
    { number: "200+", label: "Blog Posts" },
    { number: "500K+", label: "Photos Captured" },
    { number: "10K+", label: "Followers" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Posts Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6">
              Latest Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover my recent travels and the stories behind each incredible journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="travel-card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-travel-violet text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-4 text-sm opacity-90 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-travel-deep-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="text-travel-deep-blue hover:text-travel-violet p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-primary text-lg px-8 py-4">
              Explore All Stories
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold gradient-text">
                Meet Ashraf
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate storyteller and photographer who has explored over 65 countries, 
                documenting the world's hidden treasures and sharing the beauty of diverse cultures 
                through captivating stories and stunning imagery.
              </p>
              <p className="text-lg text-muted-foreground">
                From the snow-capped peaks of the Himalayas to the pristine beaches of the Maldives, 
                every journey is an opportunity to learn, grow, and inspire others to explore our 
                incredible planet.
              </p>
              <Button className="btn-secondary text-lg px-8 py-4">
                Learn More About Me
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  alt="Ashraf Alam" 
                  className="rounded-2xl shadow-2xl max-w-md w-full travel-card hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-travel-deep-blue" />
                    <div>
                      <div className="font-bold text-travel-deep-blue">Currently in</div>
                      <div className="text-sm text-muted-foreground">Dubai, UAE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Journey in Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A decade of exploration captured in milestones and memories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold gradient-text">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get personalized travel advice, detailed destination guides, and insider tips 
              to make your next trip unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Plan Your Trip
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-travel-deep-blue text-travel-deep-blue hover:bg-travel-deep-blue hover:text-white">
                Browse Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;