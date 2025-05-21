import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';
import { useScrollActive } from '@/hooks/useScrollActive';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollActive();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 z-40 w-full backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-primary dark:text-primary hover:opacity-80 transition-opacity">
            <span className="font-mono">SD</span><span className="text-lg">.</span>
          </a>
          
          <div className="hidden md:flex space-x-10 text-sm font-medium">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className={`hover:text-primary dark:hover:text-primary transition-colors relative ${
                  activeSection === item ? 'text-primary dark:text-primary' : ''
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span 
                  className={`nav-indicator absolute bottom-[-4px] left-0 h-0.5 bg-primary transition-all ${
                    activeSection === item ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </motion.nav>
  );
}
