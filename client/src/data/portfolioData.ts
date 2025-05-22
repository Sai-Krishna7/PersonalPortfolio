import { ReactNode } from 'react';

// Project images - SVG placeholders for now, can be replaced with actual images
const aiFeatureImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M130 110L450 110L450 290L130 290Z' fill='%23495057'/%3E%3Ccircle cx='300' cy='200' r='60' fill='%236c757d'/%3E%3Cpath d='M220 40L380 40L380 80L220 80Z' fill='%2320c997'/%3E%3Cpath d='M220 320L380 320L380 360L220 360Z' fill='%2320c997'/%3E%3C/svg%3E";
const cloudSolutionImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M80 80L270 80L270 320L80 320Z' fill='%23495057'/%3E%3Cpath d='M320 80L520 80L520 180L320 180Z' fill='%236c757d'/%3E%3Cpath d='M320 220L520 220L520 320L320 320Z' fill='%236c757d'/%3E%3Ccircle cx='175' cy='150' r='30' fill='%233b82f6'/%3E%3Crect x='130' y='200' width='90' height='10' fill='%23f8f9fa'/%3E%3Crect x='130' y='220' width='90' height='10' fill='%23f8f9fa'/%3E%3Crect x='130' y='240' width='90' height='10' fill='%23f8f9fa'/%3E%3C/svg%3E";
const hrPromptToolImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M150 100L450 100L450 300L150 300Z' fill='%23495057'/%3E%3Cpath d='M150 100L250 100L250 300L150 300Z' fill='%236c757d'/%3E%3Ccircle cx='200' cy='150' r='25' fill='%23f8f9fa'/%3E%3Crect x='175' y='190' width='50' height='8' fill='%23f8f9fa'/%3E%3Crect x='175' y='205' width='50' height='8' fill='%23f8f9fa'/%3E%3Crect x='300' y='120' width='120' height='10' fill='%233b82f6'/%3E%3Crect x='300' y='150' width='100' height='10' fill='%23f8f9fa'/%3E%3Crect x='300' y='180' width='100' height='10' fill='%23f8f9fa'/%3E%3Crect x='300' y='210' width='100' height='10' fill='%23f8f9fa'/%3E%3Crect x='300' y='240' width='60' height='30' rx='5' fill='%2320c997'/%3E%3C/svg%3E";
const awsSecurityImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M150 100L450 100L450 300L150 300Z' fill='%23495057'/%3E%3Ccircle cx='300' cy='200' r='50' fill='%236c757d'/%3E%3Cpath d='M250 150L350 150L350 250L250 250Z' fill='%233b82f6'/%3E%3C/svg%3E";
const streamingDataImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23343a40'/%3E%3Cpath d='M150 100L450 100L450 300L150 300Z' fill='%23495057'/%3E%3Crect x='200' y='150' width='200' height='20' fill='%233b82f6'/%3E%3Crect x='180' y='190' width='240' height='20' fill='%236c757d'/%3E%3Crect x='220' y='230' width='160' height='20' fill='%23ec4899'/%3E%3Ccircle cx='500' cy='100' r='30' fill='%2320c997'/%3E%3C/svg%3E";

export const portfolioData = {
  // Experiences data for the timeline
  experiences: [
    {
      id: 'allstate-swe',
      title: 'Software Engineer',
      company: 'Allstate',
      period: 'Dec 2023 - Present',
      description: 'Working on building and optimizing AI-driven features to help analysts identify root causes and solutions faster from historical incident data.',
      responsibilities: [
        'Improved API query accuracy by 60% through engineering FastAPI filters',
        'Enabled real-time temporal filtering of vector search results by integrating user-defined date parameters',
        'Accelerated analyst workflows by 35% supporting natural exploration of time-bound incident patterns',
        'Built a GPT-4o-powered summarization layer that distills hundreds of incident insights',
        'Optimized API performance by eliminating redundant vector DB queries, reducing summary endpoint latency by ~30%'
      ]
    },
    {
      id: 'asu-peer-lead',
      title: 'ASN Peer Lead',
      company: 'Arizona State University',
      period: 'Sep 2023 - Dec 2023',
      description: 'Supervised subject area tutors and led daily operations at the Business Administration Tutoring Center at ASU.',
      responsibilities: [
        'Supervised 7 subject area tutors',
        'Led day-to-day operations at the Business Administration Tutoring Center',
        'Coordinated scheduling and resource allocation'
      ]
    },
    {
      id: 'allstate-intern',
      title: 'Software Engineering Intern (Automation & Observability)',
      company: 'Allstate',
      period: 'May 2023 - Sep 2023',
      description: 'Contributed to enhancing code quality, infrastructure availability, and AI solutions.',
      responsibilities: [
        'Implemented changes resulting in 21% reduction in Gradle vulnerabilities',
        'Migrated Tibco EMS queues to Active-Active configuration, doubling availability post-migration',
        'Developed comprehensive user guides and improved solution accuracy by 38% for their GenAI product',
        'Led a team of 5 to develop an AI-driven HR support tool using GPT-4 and NLP',
        'Redesigned UI to improve visibility of AZ information for Unity events and notifications'
      ]
    },
    {
      id: 'asu-tutor',
      title: 'Subject Area Tutor',
      company: 'Academic Support Network',
      period: 'Aug 2021 - May 2023',
      description: 'Provided academic guidance focusing on Calculus and Math courses essential for Engineering curriculum.',
      responsibilities: [
        'Delivered personalized academic guidance to engineering students',
        'Customized teaching approaches using direct and indirect methodologies',
        'Supported management in hiring prospective tutors',
        'Organized YouTube Team\'s content'
      ]
    },
    {
      id: 'allstate-cloud-intern',
      title: 'Cloud Engineering Intern',
      company: 'Allstate Enterprise Solutions',
      period: 'May 2022 - Aug 2022',
      description: 'Enhanced AWS security configurations and infrastructure management for the enterprise.',
      responsibilities: [
        'Implemented new FMS WAFv2 policy for Splunk',
        'Collaborated with infrastructure team to establish global hosted zones',
        'Assisted engineers in troubleshooting Lambda function configurations',
        'Automated addition of new accounts to global web ACL by updating AWS Firewall Manager policy modules'
      ]
    }
  ],
  
  // Projects data
  projects: [
    {
      id: 'ai-incident-analysis',
      title: 'AI-Powered Incident Analysis',
      description: 'Led the design, development, and deployment of a cross-platform AI feature to help ECC analysts identify root causes and solutions faster from historical incident data.',
      category: 'ai',
      categoryLabel: 'AI & ML',
      image: aiFeatureImage,
      technologies: ['GPT-4o', 'LangChain', 'ChromaDB', 'FastAPI', 'Spring Boot', 'React'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 'streaming-data-simulation',
      title: 'Streaming Data Simulation',
      description: 'Developed a simulation project for a media streaming platform with a backend system to manage subscriptions, users, content, watch history, reviews, and payment processing.',
      category: 'data',
      categoryLabel: 'Data Engineering',
      image: streamingDataImage,
      technologies: ['Python', 'SQL', 'Data Analysis', 'API Development'],
      links: {
        demo: '#',
        github: 'https://github.com/Sai-Krishna7/streaming-analytics-dashboard'
      }
    },
    {
      id: 'cloud-solution',
      title: 'AWS Cloud Cost Optimization',
      description: 'Developed a fault-tolerant cloud solution to significantly reduce costs by migrating workloads in the non-production environment using AWS services.',
      category: 'cloud',
      categoryLabel: 'Cloud Computing',
      image: cloudSolutionImage,
      technologies: ['AWS EC2 Spot Fleet', 'Auto Scaling Groups', 'CloudWatch Alarms', 'Terraform'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 'hr-prompt-tool',
      title: 'AI-Driven HR Support Tool',
      description: 'Led a team of 5 to develop an AI-driven HR support tool using GPT-4 and NLP, securing first place in a product pitch competition among 100+ interns.',
      category: 'ai',
      categoryLabel: 'AI & ML',
      image: hrPromptToolImage,
      technologies: ['GPT-4', 'NLP', 'React', 'Node.js'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 'aws-security',
      title: 'AWS Security Enhancement',
      description: 'Implemented new FMS WAFv2 policy for Splunk, employing distinct rule groups for Splunk\'s public IPs based on environmental categorization.',
      category: 'cloud',
      categoryLabel: 'Cloud Security',
      image: awsSecurityImage,
      technologies: ['AWS Firewall Manager', 'WAFv2', 'IAM', 'Lambda'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ],
  
  // Skills data
  skills: {
    technical: [
      { name: 'AWS Cloud Services', percentage: 90 },
      { name: 'Python', percentage: 85 },
      { name: 'FastAPI', percentage: 80 },
      { name: 'React', percentage: 80 },
      { name: 'Terraform', percentage: 85 },
      { name: 'Spring Boot', percentage: 75 },
      { name: 'LangChain', percentage: 80 },
      { name: 'SQL', percentage: 85 }
    ],
    tools: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Terraform' },
      { name: 'Jenkins' },
      { name: 'Git' },
      { name: 'SonarQube' },
      { name: 'Unity' },
      { name: 'RunDeck' }
    ]
  },
  
  // Education data
  education: [
    {
      degree: 'Master of Science - MS, Computer Science',
      institution: 'Arizona State University',
      period: 'December 2023 - December 2023'
    },
    {
      degree: 'Bachelor of Science - BS, Computer Science',
      institution: 'Arizona State University',
      period: 'August 2020 - December 2023'
    }
  ],
  
  // Certifications
  certifications: [
    'AWS Certified Cloud Practitioner',
    'HashiCorp Certified: Terraform Associate',
    '2020 Complete Python Bootcamp From Zero to Hero in Python',
    'Beginning C++ Programming - From Beginner to Beyond'
  ]
};
