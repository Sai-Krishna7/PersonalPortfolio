import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  bgClass?: string;
  className?: string;
}

export default function SectionWrapper({ 
  id, 
  children, 
  bgClass = '', 
  className = '' 
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 lg:py-32 ${bgClass} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
