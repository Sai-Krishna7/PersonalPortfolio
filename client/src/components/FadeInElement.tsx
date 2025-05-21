import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';

interface FadeInElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

export default function FadeInElement({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,
}: FadeInElementProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Set initial and animate variants based on direction
  let initial: Variant = { opacity: 0 };
  
  switch (direction) {
    case 'up':
      initial.y = 20;
      break;
    case 'down':
      initial.y = -20;
      break;
    case 'left':
      initial.x = 20;
      break;
    case 'right':
      initial.x = -20;
      break;
    case 'none':
      break;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          controls.start({ opacity: 1, y: 0, x: 0 });
        } else if (!entry.isIntersecting && !once && isInView) {
          setIsInView(false);
          controls.start(initial);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, initial, isInView, once]);

  return (
    <motion.div
      ref={ref}
      className={`fade-in ${className}`}
      initial={initial}
      animate={controls}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.215, 0.61, 0.355, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
