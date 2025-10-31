
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Brain, BookHeart, HeartPulse, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Home', path: '/', icon: Heart },
  { name: 'Resources', path: '/resources', icon: BookHeart },
  { name: 'Mood Tracker', path: '/mood', icon: HeartPulse },
  { name: 'Mindfulness', path: '/mindfulness', icon: Brain },
  { name: 'Help', path: '/help', icon: UserRound },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm relative z-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">MindWell</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={cn("hidden md:flex items-center space-x-8")}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center text-foreground/80 hover:text-primary transition-colors py-2"
              >
                <item.icon className="h-4 w-4 mr-1" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md py-2 px-4 z-10 scale-in">
          <div className="flex flex-col space-y-3 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4 mr-2" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
