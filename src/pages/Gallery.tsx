import React, { useState } from "react";
import { X, MapPin, Calendar, Camera } from "lucide-react";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent } from "../components/ui/dialog";

type ImageType = {
  id: number;
  src: string;
  title: string;
  location: string;
  date: string;
  category: string;
  description: string;
  camera: string;
  settings: string;
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories: string[] = [
    "All",
    "Landscapes",
    "Wildlife",
    "Culture",
    "Food",
    "Architecture",
    "Portraits",
  ];

  const images: ImageType[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      title: "Himalayan Sunrise",
      location: "Annapurna, Nepal",
      date: "March 2024",
      category: "Landscapes",
      description:
        "The first rays of sunlight illuminating the snow-capped peaks of the Himalayas. This moment took 3 hours of hiking in freezing temperatures, but every step was worth it.",
      camera: "Canon EOS R5",
      settings: "f/8, 1/125s, ISO 100",
    },
    // ... rest of your images (keep same shape) ...
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1498050108023-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      title: "Santorini Blue Domes",
      location: "Oia, Greece",
      date: "May 2024",
      category: "Architecture",
      description:
        "The iconic blue domes of Santorini against the Aegean Sea. This classic view never gets old, especially during the golden hour.",
      camera: "Sony A7R V",
      settings: "f/9, 1/80s, ISO 100",
    },
  ];

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: ImageType) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto animate-slide-up">
            A visual journey through the world's most beautiful places
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid travel-card cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                  <div className="flex items-center space-x-2 text-sm opacity-90">
                    <MapPin className="h-4 w-4" />
                    <span>{image.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => {
            if (!open) closeLightbox();
          }}
        >
          <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-none">
            {selectedImage && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 flex items-center justify-center bg-black">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="max-h-[80vh] w-auto object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="bg-white p-8 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold gradient-text mb-2">
                        {selectedImage.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedImage.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{selectedImage.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {selectedImage.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Technical Details</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Camera className="h-4 w-4 text-travel-deep-blue" />
                          <span className="text-sm">{selectedImage.camera}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {selectedImage.settings}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <span className="inline-block px-3 py-1 bg-travel-deep-blue text-white rounded-full text-sm">
                        {selectedImage.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center travel-card p-6">
            <div className="text-4xl font-bold gradient-text mb-2">500K+</div>
            <div className="text-muted-foreground">Photos Captured</div>
          </div>
          <div className="text-center travel-card p-6">
            <div className="text-4xl font-bold gradient-text mb-2">65+</div>
            <div className="text-muted-foreground">Countries Explored</div>
          </div>
          <div className="text-center travel-card p-6">
            <div className="text-4xl font-bold gradient-text mb-2">12</div>
            <div className="text-muted-foreground">Photography Awards</div>
          </div>
          <div className="text-center travel-card p-6">
            <div className="text-4xl font-bold gradient-text mb-2">8</div>
            <div className="text-muted-foreground">Exhibitions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
