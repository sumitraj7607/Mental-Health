
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">MindWell</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Supporting your mental health journey with compassion and care.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/mood" className="text-muted-foreground hover:text-primary transition-colors">Mood Tracker</Link></li>
              <li><Link to="/mindfulness" className="text-muted-foreground hover:text-primary transition-colors">Mindfulness</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Crisis Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">support@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community Forum</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MindWell. All rights reserved.</p>
          <p className="mt-1">
            This website is for informational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
