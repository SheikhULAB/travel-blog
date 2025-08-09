import { Instagram, Youtube, Facebook, Twitter, Mail, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-travel-deep-blue via-travel-violet to-travel-slate-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ashraf Alam</h3>
            <p className="text-white/80">
              Wandering the world, one story at a time. Join me on my adventures and discover the beauty of our planet.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="/destinations" className="text-white/80 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow My Journey</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-white/80 text-sm">
              Get the latest travel stories and tips delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button size="icon" className="bg-white/20 hover:bg-white/30">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Ashraf Alam. All rights reserved. | Built with passion for travel and adventure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;