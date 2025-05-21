import { Check } from 'lucide-react';
import FadeInElement from './FadeInElement';
import SectionWrapper from './SectionWrapper';
import Timeline from './Timeline';
import { portfolioData } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" bgClass="bg-gray-50 dark:bg-gray-900/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeInElement>
          <p className="text-primary dark:text-primary-400 font-medium">Professional Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            My professional path in the software industry, building expertise and delivering value.
          </p>
        </FadeInElement>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Timeline items={portfolioData.experiences} />
      </div>
    </SectionWrapper>
  );
}

// Timeline item component to render work experience
export function ExperienceItem({ experience, index }: any) {
  const isLeft = index % 2 === 0;
  
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className={`flex md:w-1/2 ${isLeft ? 'md:justify-end md:pr-8' : 'md:order-last md:justify-start md:pl-8'} mb-8 md:mb-0`}>
        <div className={isLeft ? 'md:text-right' : ''}>
          <h3 className="font-bold text-xl">{experience.company}</h3>
          <p className="text-primary dark:text-primary-400 font-medium">{experience.title}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{experience.period}</p>
        </div>
      </div>
      
      <div className={`md:w-1/2 ${isLeft ? '' : 'md:order-first'} ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-300">
            {experience.description}
          </p>
          <ul className="mt-4 space-y-1 text-gray-600 dark:text-gray-300">
            {experience.responsibilities.map((responsibility: string, i: number) => (
              <li key={i} className="flex items-start">
                <Check className="text-primary dark:text-primary-400 h-5 w-5 mt-1 mr-2 shrink-0" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
