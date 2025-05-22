import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import FadeInElement from './FadeInElement';
import WorkspaceSVG from '@/assets/WorkspaceSVG';
import { portfolioData } from '@/data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 to-purple-50/10 dark:from-blue-900/5 dark:to-purple-900/5 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <FadeInElement className="md:w-1/2">
            <div className="relative">
              <WorkspaceSVG className="w-full rounded-lg shadow-lg" />
              
              {/* Animated accent elements */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-blue-400 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
              <motion.div 
                className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-green-300 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
              
              {/* Certifications badge */}
              <motion.div
                className="absolute top-10 right-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Award className="h-8 w-8 text-primary dark:text-primary-400" />
              </motion.div>
            </div>
          </FadeInElement>
          
          <FadeInElement className="md:w-1/2" delay={0.2}>
            <div className="space-y-6">
              <div>
                <p className="text-primary dark:text-primary-400 font-medium">About Me</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 gradient-underline inline-block">
                  Software Engineer & Cloud Enthusiast
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently pursuing my <span className="font-medium">Master's in Computer Science at Arizona State University</span>, with a focus on Cloud Computing and Artificial Intelligence. My passion for mathematics and programming stems from the countless ways these disciplines help implement logic and solve real-world problems.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My professional journey at <span className="font-medium">Allstate</span> has given me valuable experience in software development, cloud engineering, and AI-driven solutions. I hold certifications from AWS and HashiCorp, reflecting my dedication to continuous learning in cloud technologies.
              </p>
              
              {/* Certifications section */}
              <div className="pt-2">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary dark:text-primary-400" />
                  Certifications
                </h3>
                <ul className="space-y-1">
                  {portfolioData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary dark:text-secondary-400 mt-1 shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Stats section */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-primary dark:text-primary-400 text-2xl font-bold animate-counting">4+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Years Academic Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-primary dark:text-primary-400 text-2xl font-bold animate-counting">10+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Technical Projects</div>
                </div>
              </div>
              
              {/* Education section */}
              <div className="pt-2">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary dark:text-primary-400" />
                  Education
                </h3>
                <ul className="space-y-3">
                  {portfolioData.education.map((edu, index) => (
                    <li key={index} className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{edu.institution}</div>
                      <div className="text-gray-500 dark:text-gray-500 text-xs">{edu.period}</div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <a href="#experience" className="btn-gradient text-white font-medium py-2 px-6 rounded-lg shadow-md inline-flex items-center">
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
