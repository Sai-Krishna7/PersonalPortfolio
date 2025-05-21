import { motion, AnimatePresence } from 'framer-motion';
import { useScrollActive } from '@/hooks/useScrollActive';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const activeSection = useScrollActive();

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
      } 
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background dark:bg-gray-900 shadow-lg absolute w-full"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <div className="container mx-auto px-6 py-3 space-y-3">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`block py-2 hover:text-primary dark:hover:text-primary transition-colors ${
                  activeSection === item.id ? 'text-primary dark:text-primary' : ''
                }`}
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
