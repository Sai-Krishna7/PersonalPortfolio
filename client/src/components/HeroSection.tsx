import { motion } from 'framer-motion';
import { ArrowDown, Code } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import FadeInElement from './FadeInElement';
import HeadshotPlaceholder from '@/assets/HeadshotPlaceholder';
import TechPatternSVG from '@/assets/TechPatternSVG';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 to-white/0 dark:from-primary-900/20 dark:to-dark/0 -z-10"></div>
      <TechPatternSVG className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] -z-10" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
        <FadeInElement className="lg:w-1/2 space-y-8">
          <motion.p 
            className="inline-block text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-300 py-1 px-3 rounded-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Code className="h-4 w-4 inline mr-1" /> Software Engineer
          </motion.p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-primary dark:text-primary-400">Sai Deeduvanu</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
            Building scalable solutions and creating impactful software experiences. Specialized in software engineering with a passion for innovative technologies.
          </p>
          
          <div className="flex space-x-4">
            <Button asChild size="lg" className="btn-primary">
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400 pt-4">
            <a 
              href="https://www.linkedin.com/in/sai-deeduvanu-6108b21b8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </FadeInElement>
        
        <FadeInElement className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center" delay={0.3}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400 to-secondary-500 blur-2xl opacity-20 scale-110 dark:opacity-30 animate-pulse"></div>
            <HeadshotPlaceholder className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl" />
          </div>
        </FadeInElement>
      </div>

      <motion.div 
        className="absolute bottom-10 w-full text-center hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="inline-block text-gray-400">
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}
