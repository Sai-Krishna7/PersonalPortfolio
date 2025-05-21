import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import FadeInElement from './FadeInElement';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { portfolioData } from '@/data/portfolioData';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'data', name: 'Data Science' },
  { id: 'software', name: 'Software Engineering' },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = portfolioData.projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <SectionWrapper id="projects">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeInElement>
          <p className="text-primary dark:text-primary-400 font-medium">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            A collection of projects I've worked on throughout my career, showcasing my skills and expertise.
          </p>
        </FadeInElement>
      </div>
      
      <FadeInElement className="mb-8" delay={0.1}>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className={`
                rounded-full font-medium text-sm focus:outline-none transition-colors
                ${activeCategory === category.id 
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800/30' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </FadeInElement>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <FadeInElement key={project.id} delay={0.2 + (index * 0.1)}>
            <ProjectCard project={project} />
          </FadeInElement>
        ))}
      </div>
      
      <FadeInElement className="text-center mt-12" delay={0.5}>
        <Button asChild variant="outline" size="lg" className="border-2 border-primary dark:border-primary-500 text-primary dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30">
          <a href="#">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </FadeInElement>
    </SectionWrapper>
  );
}
