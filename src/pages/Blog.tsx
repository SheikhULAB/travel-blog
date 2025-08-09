import { useState } from 'react';
import { Calendar, Clock, Tag, Search, ArrowRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';


const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Adventure', 'Food', 'Culture', 'Nature', 'Photography', 'Tips'];

  const blogPosts = [
    {
      id: 1,
      title: "Hiking the Inca Trail: A Journey to Machu Picchu",
      excerpt: "Four days of incredible landscapes, ancient ruins, and personal challenges on Peru's most famous trek. Here's everything you need to know before you go.",
      category: "Adventure",
      date: "2024-12-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      tags: ["Peru", "Hiking", "Machu Picchu", "Inca Trail"],
      featured: true
    },
    {
      id: 2,
      title: "Street Food Adventures in Bangkok",
      excerpt: "From pad thai on the streets to michelin-starred vendors, Bangkok's food scene is unmatched. A complete guide to eating your way through Thailand's capital.",
      category: "Food",
      date: "2024-12-10",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?auto=format&fit=crop&w=800&q=80",
      tags: ["Thailand", "Street Food", "Bangkok", "Cuisine"],
      featured: false
    },
    {
      id: 3,
      title: "Northern Lights Photography Tips",
      excerpt: "After countless nights chasing the aurora, here are my top tips for capturing the perfect northern lights photograph in Iceland and beyond.",
      category: "Photography",
      date: "2024-12-05",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
      tags: ["Iceland", "Photography", "Aurora", "Night Sky"],
      featured: true
    },
    {
      id: 4,
      title: "Cultural Immersion in Rural Morocco",
      excerpt: "Living with a Berber family in the Atlas Mountains taught me invaluable lessons about hospitality, simplicity, and the true meaning of community.",
      category: "Culture",
      date: "2024-11-28",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73196?auto=format&fit=crop&w=800&q=80",
      tags: ["Morocco", "Culture", "Atlas Mountains", "Berber"],
      featured: false
    },
    {
      id: 5,
      title: "Solo Travel Safety: Lessons from 50+ Countries",
      excerpt: "Essential safety tips and mindset shifts that have kept me safe during solo adventures across six continents. A comprehensive guide for nervous first-timers.",
      category: "Tips",
      date: "2024-11-20",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
      tags: ["Solo Travel", "Safety", "Tips", "Mindset"],
      featured: false
    },
    {
      id: 6,
      title: "Wildlife Conservation in Borneo",
      excerpt: "Volunteering at an orangutan rehabilitation center opened my eyes to the critical conservation efforts needed to protect these incredible creatures.",
      category: "Nature",
      date: "2024-11-15",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      tags: ["Borneo", "Wildlife", "Conservation", "Orangutan"],
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Travel Stories
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto animate-slide-up">
            Adventures, insights, and inspiration from around the world
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search and Filter */}
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search stories, destinations, or topics..."
                  className="pl-10 py-3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "btn-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            {selectedCategory === 'All' && searchTerm === '' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text">Featured Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Card key={post.id} className="travel-card group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-travel-violet text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <span className="px-2 py-1 bg-muted rounded text-xs">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold group-hover:text-travel-deep-blue transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground">{post.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag, index) => (
                              <span key={index} className="text-xs text-travel-violet">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="text-travel-deep-blue hover:text-travel-violet">
                            Read Story <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">
                {selectedCategory === 'All' ? 'All Stories' : `${selectedCategory} Stories`}
              </h2>
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="travel-card group cursor-pointer">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="md:w-2/3 p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <span className="px-2 py-1 bg-muted rounded text-xs">{post.category}</span>
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-travel-deep-blue transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground">{post.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="text-xs text-travel-violet">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <Button variant="ghost" className="text-travel-deep-blue hover:text-travel-violet">
                            Continue Reading <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Posts */}
            <Card className="travel-card">
              <CardHeader>
                <h3 className="text-xl font-bold gradient-text">Recent Posts</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex space-x-3 group cursor-pointer">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-medium group-hover:text-travel-deep-blue transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tag Cloud */}
            <Card className="travel-card">
              <CardHeader>
                <h3 className="text-xl font-bold gradient-text">Popular Tags</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-muted hover:bg-travel-deep-blue hover:text-white rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="travel-card bg-gradient-hero text-white">
              <CardHeader>
                <h3 className="text-xl font-bold">Stay Updated</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90">
                  Get the latest travel stories and tips delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="w-full bg-white text-travel-deep-blue hover:bg-white/90">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;