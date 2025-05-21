import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import FadeInElement from './FadeInElement';

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-6 md:left-1/2 transform md:-translate-x-1/2"></div>
      
      {/* Timeline items */}
      {items.map((item, index) => (
        <FadeInElement
          key={item.id}
          className="timeline-item relative mb-16 last:mb-0"
          delay={0.1 * index}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:order-last md:justify-start md:pl-8'} mb-8 md:mb-0`}>
              <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                <h3 className="font-bold text-xl">{item.company}</h3>
                <p className="text-primary dark:text-primary-400 font-medium">{item.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.period}</p>
              </div>
            </div>
            
            {/* Timeline connector */}
            <motion.div 
              className="absolute left-6 md:left-1/2 transform -translate-y-1 md:-translate-x-1/2 w-5 h-5 bg-primary dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            />
            
            {item.id !== items[items.length - 1].id && (
              <div className="timeline-connector absolute left-6 md:left-1/2 transform translate-y-5 md:-translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 z-0"></div>
            )}
            
            <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-first'} ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-1 text-gray-600 dark:text-gray-300">
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-primary dark:text-primary-400 h-5 w-5 mt-1 mr-2 shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInElement>
      ))}
    </div>
  );
}
