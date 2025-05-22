import { motion } from 'framer-motion';
import { ArrowDown, Code, Cloud, Terminal, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub, FaAws } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import FadeInElement from './FadeInElement';
import HeadshotPlaceholder from '@/assets/HeadshotPlaceholder';
import TechPatternSVG from '@/assets/TechPatternSVG';
import { useEffect, useState } from 'react';

// Dynamic animated text with gradient
const AnimatedTitle = () => {
  return (
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hi, I'm <span className="animate-gradient-text font-extrabold">Sai Deeduvanu</span>
    </motion.h1>
  );
};

// Animated job title component with changing roles
const AnimatedJobTitle = () => {
  const jobTitles = [
    "GenAI Software Engineer",
    "Cloud Engineer",
    "Full-Stack Developer"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const icons = [
    <Sparkles key="sparkles" className="h-4 w-4 inline mr-1" />,
    <Cloud key="cloud" className="h-4 w-4 inline mr-1" />,
    <Code key="code" className="h-4 w-4 inline mr-1" />
  ];
  
  return (
    <motion.div 
      className="inline-block text-sm font-medium bg-gradient-to-r from-primary-400 to-secondary-500 dark:from-primary-500 dark:to-secondary-600 text-white py-1.5 px-4 rounded-full"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.span
        key={currentTitleIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex items-center"
      >
        {icons[currentTitleIndex]} {jobTitles[currentTitleIndex]}
      </motion.span>
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/40 via-purple-50/20 to-white/0 dark:from-primary-900/20 dark:via-purple-900/10 dark:to-dark/0 -z-10 animate-gradient-slow"></div>
      
      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70 animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-400/20 dark:bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      
      <TechPatternSVG className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] -z-10" />
      
      <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
        <FadeInElement className="lg:w-1/2 space-y-8">
          <AnimatedJobTitle />
          
          <AnimatedTitle />
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            <span className="text-primary font-medium">Software Engineer in GenAI at Allstate</span> with MS in Computer Science from ASU. AWS and HashiCorp certified professional passionate about cloud computing, AI/ML, and building innovative solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild 
              size="lg" 
              className="relative overflow-hidden group bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white border-0 shadow-lg"
            >
              <a href="#projects">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary hover:border-primary-600 text-primary hover:text-primary-600 dark:border-primary-400 dark:text-primary-400 dark:hover:border-primary-300 dark:hover:text-primary-300 bg-transparent hover:bg-transparent"
            >
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
              href="https://github.com/Sai-Krishna7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href="#skills"
              className="hover:text-primary dark:hover:text-primary-400 transition-colors"
            >
              <FaAws className="h-6 w-6" />
            </a>
          </div>
        </FadeInElement>
        
        <FadeInElement className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center items-center" delay={0.3}>
          <div className="relative">
            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400 via-purple-500 to-secondary-500 blur-2xl opacity-20 scale-110 dark:opacity-30 animate-glow"></div>
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
