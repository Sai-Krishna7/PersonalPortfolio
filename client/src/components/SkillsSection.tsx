import FadeInElement from './FadeInElement';
import SectionWrapper from './SectionWrapper';
import SkillBar from './SkillBar';
import { portfolioData } from '@/data/portfolioData';
import { FaDocker, FaAws, FaDatabase, FaGitAlt, FaServer } from 'react-icons/fa';
import { Cloud } from 'lucide-react';

// Function to render the appropriate icon based on tool name
const getToolIcon = (toolName: string) => {
  switch (toolName) {
    case 'Docker':
      return <FaDocker className="text-xl text-primary dark:text-primary-400" />;
    case 'AWS':
      return <FaAws className="text-xl text-primary dark:text-primary-400" />;
    case 'MongoDB':
      return <FaDatabase className="text-xl text-primary dark:text-primary-400" />;
    case 'Git':
      return <FaGitAlt className="text-xl text-primary dark:text-primary-400" />;
    case 'CI/CD':
      return <Cloud className="text-xl text-primary dark:text-primary-400" />;
    case 'RESTful APIs':
      return <FaServer className="text-xl text-primary dark:text-primary-400" />;
    default:
      return <Cloud className="text-xl text-primary dark:text-primary-400" />;
  }
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" bgClass="bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeInElement>
          <p className="text-primary dark:text-primary-400 font-medium">Technical Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            A comprehensive overview of my technical skills, tools, and technologies I've mastered throughout my career.
          </p>
        </FadeInElement>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Technical Skills */}
        <FadeInElement delay={0.1}>
          <h3 className="text-xl font-bold mb-6">Programming Languages & Frameworks</h3>
          
          <div className="space-y-5">
            {portfolioData.skills.technical.map((skill, index) => (
              <SkillBar 
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
          </div>
        </FadeInElement>
        
        {/* Tools & Technologies */}
        <FadeInElement delay={0.2}>
          <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioData.skills.tools.map((tool) => (
              <div 
                key={tool.name}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-3">
                  {getToolIcon(tool.name)}
                </div>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </FadeInElement>
      </div>
    </SectionWrapper>
  );
}
