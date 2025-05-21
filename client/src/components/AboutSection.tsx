import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeInElement from './FadeInElement';
import WorkspaceSVG from '@/assets/WorkspaceSVG';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <FadeInElement className="md:w-1/2">
            <div className="relative">
              <WorkspaceSVG className="w-full rounded-lg shadow-lg" />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              <motion.div 
                className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
            </div>
          </FadeInElement>
          
          <FadeInElement className="md:w-1/2" delay={0.2}>
            <div className="space-y-6">
              <div>
                <p className="text-primary dark:text-primary-400 font-medium">About Me</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Software Engineer with a passion for innovation</h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">
                With a strong technical foundation and experience in software engineering, I specialize in developing scalable solutions and innovative technologies. My journey in the tech industry has equipped me with the skills to tackle complex challenges and deliver high-quality software products.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                My academic background and professional experience at Infosys Limited have provided me with opportunities to work on real-world projects, enhancing my problem-solving abilities and technical expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-primary dark:text-primary-400 text-xl font-bold">2+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-primary dark:text-primary-400 text-xl font-bold">10+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Projects Completed</div>
                </div>
              </div>
              
              <div className="pt-4">
                <a href="#experience" className="text-primary dark:text-primary-400 font-medium hover:underline inline-flex items-center">
                  View my experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeInElement>
        </div>
      </div>
    </section>
  );
}
