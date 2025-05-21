import { ReactNode } from 'react';

// Placeholder project images - would be replaced with actual image paths
const project1Image = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M130 110L450 110L450 290L130 290Z' fill='%23495057'/%3E%3Ccircle cx='300' cy='200' r='60' fill='%236c757d'/%3E%3Cpath d='M220 40L380 40L380 80L220 80Z' fill='%2320c997'/%3E%3Cpath d='M220 320L380 320L380 360L220 360Z' fill='%2320c997'/%3E%3C/svg%3E";
const project2Image = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M80 80L270 80L270 320L80 320Z' fill='%23495057'/%3E%3Cpath d='M320 80L520 80L520 180L320 180Z' fill='%236c757d'/%3E%3Cpath d='M320 220L520 220L520 320L320 320Z' fill='%236c757d'/%3E%3Ccircle cx='175' cy='150' r='30' fill='%233b82f6'/%3E%3Crect x='130' y='200' width='90' height='10' fill='%23f8f9fa'/%3E%3Crect x='130' y='220' width='90' height='10' fill='%23f8f9fa'/%3E%3Crect x='130' y='240' width='90' height='10' fill='%23f8f9fa'/%3E%3C/svg%3E";
const project3Image = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M150 100L450 100L450 300L150 300Z' fill='%23495057'/%3E%3Cpath d='M150 100L250 100L250 300L150 300Z' fill='%236c757d'/%3E%3Ccircle cx='200' cy='150' r='25' fill='%23f8f9fa'/%3E%3Crect x='175' y='190' width='50' height='8' fill='%23f8f9fa'/%3E%3Crect x='175' y='205' width='50' height='8' fill='%23f8f9fa'/%3E%3Crect x='300' y='120' width='120' height='10' fill='%233b82f6'/%3E%3Crect x='300' y='150' width='100' height='10' fill='%23f8f9fa'/%3E%3Crect x='300' y='180' width='100' height='10' fill='%23f8f9fa'/%3E%3Crect x='300' y='210' width='100' height='10' fill='%23f8f9fa'/%3E%3Crect x='300' y='240' width='60' height='30' rx='5' fill='%2320c997'/%3E%3C/svg%3E";

export const portfolioData = {
  // Experiences data for the timeline
  experiences: [
    {
      id: 'infosys',
      title: 'Software Engineer',
      company: 'Infosys Limited',
      period: 'Nov 2020 - Present',
      description: 'Working on large-scale software development projects, including the implementation of solutions for clients in various industries. Responsible for software design, development, testing, and deployment.',
      responsibilities: [
        'Developed and maintained high-performance applications',
        'Collaborated with cross-functional teams',
        'Implemented best practices for software development'
      ]
    },
    {
      id: 'education',
      title: "Bachelor's Degree",
      company: 'Education',
      period: '2016 - 2020',
      description: "Completed my bachelor's degree with a focus on computer science and software engineering. Gained a strong foundation in algorithms, data structures, and software development methodologies.",
      responsibilities: [
        'Specialized in computer science',
        'Participated in technical competitions',
        'Completed capstone projects in software development'
      ]
    }
  ],
  
  // Projects data
  projects: [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with modern web technologies, featuring a responsive design and secure payment processing.',
      category: 'web',
      categoryLabel: 'Web Dev',
      image: project1Image,
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 'analytics',
      title: 'Data Analytics Dashboard',
      description: 'An interactive dashboard for visualizing complex data sets, with customizable charts and real-time updates.',
      category: 'data',
      categoryLabel: 'Data Science',
      image: project2Image,
      technologies: ['Python', 'D3.js', 'Flask'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'A cross-platform mobile application developed for tracking fitness goals and providing personalized workout recommendations.',
      category: 'software',
      categoryLabel: 'Software Eng',
      image: project3Image,
      technologies: ['React Native', 'Firebase', 'Redux'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ],
  
  // Skills data
  skills: {
    technical: [
      { name: 'JavaScript', percentage: 90 },
      { name: 'React', percentage: 85 },
      { name: 'Node.js', percentage: 80 },
      { name: 'Python', percentage: 75 },
      { name: 'Java', percentage: 85 }
    ],
    tools: [
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'MongoDB' },
      { name: 'Git' },
      { name: 'CI/CD' },
      { name: 'RESTful APIs' }
    ]
  }
};
