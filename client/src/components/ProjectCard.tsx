import { FaGithub } from 'react-icons/fa';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div 
      className={cn(
        "project-card group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800",
        className
      )}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* SVG abstract tech background for project */}
      <div 
        className="w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-700"
        style={{ 
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold group-hover:text-primary dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 rounded-full">
            {project.categoryLabel}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <a href={project.links.demo || '#'} className="text-primary dark:text-primary-400 hover:underline text-sm font-medium">
            View Project <ArrowRight className="inline ml-1 h-3 w-3" />
          </a>
          
          <div className="flex space-x-2">
            {project.links.github && (
              <a href={project.links.github} className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            
            {project.links.demo && (
              <a href={project.links.demo} className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-overlay absolute inset-0 bg-gradient-to-t from-primary-600/90 to-primary-800/80 flex items-center justify-center opacity-0 transition-opacity">
        <a href={project.links.demo || '#'} className="bg-white text-primary hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors">
          View Details
        </a>
      </div>
    </motion.div>
  );
}
