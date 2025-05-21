import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export default function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const controls = useAnimation();
  const barRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          controls.start({ width: `${percentage}%` });
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [controls, isInView, percentage]);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      
      <div ref={barRef} className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden skill-bar">
        <motion.div 
          className="h-full bg-primary dark:bg-primary-400 rounded-full skill-progress"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ 
            duration: 1.5, 
            delay: delay, 
            ease: [0.215, 0.61, 0.355, 1] 
          }}
        />
      </div>
    </div>
  );
}
