import { ReactNode } from 'react';

// Project images with gradient backgrounds for better visual engagement
const aiFeatureImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23grad1)'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='36' text-anchor='middle' fill='white'%3EAI-Powered Analysis%3C/text%3E%3Ccircle cx='200' cy='200' r='50' fill='white' fill-opacity='0.2'/%3E%3Ccircle cx='600' cy='200' r='80' fill='white' fill-opacity='0.2'/%3E%3Cpath d='M300,300 Q400,100 500,300' stroke='white' stroke-width='6' fill='none'/%3E%3C/svg%3E";

const streamingDataImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23059669;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23grad2)'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='36' text-anchor='middle' fill='white'%3EStreaming Data%3C/text%3E%3Cpath d='M100,250 L200,250 L250,200 L350,300 L450,150 L550,250 L650,200 L700,250' stroke='white' stroke-width='8' fill='none'/%3E%3Ccircle cx='100' cy='250' r='8' fill='white'/%3E%3Ccircle cx='200' cy='250' r='8' fill='white'/%3E%3Ccircle cx='250' cy='200' r='8' fill='white'/%3E%3Ccircle cx='350' cy='300' r='8' fill='white'/%3E%3Ccircle cx='450' cy='150' r='8' fill='white'/%3E%3Ccircle cx='550' cy='250' r='8' fill='white'/%3E%3Ccircle cx='650' cy='200' r='8' fill='white'/%3E%3Ccircle cx='700' cy='250' r='8' fill='white'/%3E%3C/svg%3E";

const cloudSolutionImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230369a1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23grad3)'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='36' text-anchor='middle' fill='white'%3EAWS Cloud Solution%3C/text%3E%3Cpath d='M250,250 Q325,175 400,250 T550,250' stroke='white' stroke-width='10' fill='white' fill-opacity='0.2'/%3E%3Ccircle cx='250' cy='250' r='30' fill='white' fill-opacity='0.3'/%3E%3Ccircle cx='400' cy='250' r='30' fill='white' fill-opacity='0.3'/%3E%3Ccircle cx='550' cy='250' r='30' fill='white' fill-opacity='0.3'/%3E%3C/svg%3E";

const hrPromptToolImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23be185d;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23grad4)'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='36' text-anchor='middle' fill='white'%3EHR Prompt Tool%3C/text%3E%3Ccircle cx='200' cy='200' r='60' fill='white' fill-opacity='0.2'/%3E%3Ccircle cx='200' cy='200' r='40' fill='white' fill-opacity='0.2'/%3E%3Ccircle cx='200' cy='200' r='20' fill='white' fill-opacity='0.2'/%3E%3Crect x='400' y='150' width='200' height='20' rx='10' fill='white' fill-opacity='0.3'/%3E%3Crect x='400' y='190' width='200' height='20' rx='10' fill='white' fill-opacity='0.3'/%3E%3Crect x='400' y='230' width='200' height='20' rx='10' fill='white' fill-opacity='0.3'/%3E%3C/svg%3E";

const awsSecurityImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23991b1b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ef4444;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23grad5)'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='36' text-anchor='middle' fill='white'%3EAWS Security%3C/text%3E%3Cpath d='M350,200 L450,200 L450,250 L400,300 L350,250 Z' fill='white' fill-opacity='0.3'/%3E%3Ccircle cx='400' cy='175' r='10' fill='white'/%3E%3C/svg%3E";

export const portfolioData = {
  // Experiences data for the timeline
  experiences: [
    {
      id: 'allstate-swe',
      title: 'Software Engineer',
      company: 'Allstate',
      period: 'December 2024 - Present',
      description: 'Working on building and optimizing AI-driven features to help analysts identify root causes and solutions faster from historical incident data.',
      responsibilities: [
        'Improved API query accuracy by 60% by engineering FastAPI filters to support exact and inclusive date range logic',
        'Enabled real-time temporal filtering of vector search results by integrating user-defined startDate and endDate parameters',
        'Accelerated analyst workflows by 35% by supporting natural exploration of time-bound incident patterns',
        'Built a GPT-4o–powered summarization layer that distills hundreds of incident insights into concise summaries',
        'Optimized API performance by eliminating redundant vector DB queries, reducing summary endpoint latency by ~30%'
      ]
    },
    {
      id: 'asu-peer-lead',
      title: 'ASN Peer Lead',
      company: 'Arizona State University',
      period: 'September 2024 - December 2024',
      description: 'Responsible for supervising tutors and leading operations at the Business Administration Tutoring Center at ASU.',
      responsibilities: [
        'Responsible for supervising 7 of our Subject Area tutors',
        'Leading the day-to-day operations at the Business Administration Tutoring Center at ASU',
        'Coordinated scheduling and resource allocation'
      ]
    },
    {
      id: 'allstate-intern-2024',
      title: 'Software Engineering Intern (Automation & Observability)',
      company: 'Allstate',
      period: 'May 2024 - September 2024',
      description: 'Contributed to enhancing code quality, infrastructure availability, and AI solutions.',
      responsibilities: [
        'Implemented changes that resulted in a 21% reduction in Gradle vulnerabilities across the VE codebase',
        'Migrated Tibco EMS queues to Active-Active configuration, doubling availability post-PaaS 2.0 migration',
        'Developed comprehensive user guides and improved solution accuracy by 38% for their GenAI product',
        'Led a team of 5 to develop an AI-driven HR support tool (HR Prompt) using GPT-4 and NLP',
        'Redesigned UI to improve visibility of AZ information for Unity events and notifications'
      ]
    },
    {
      id: 'asn-tutor',
      title: 'Subject Area Tutor',
      company: 'Academic Support Network',
      period: 'August 2021 - May 2024',
      description: 'Delivered personalized academic guidance to students, focusing on critical Calculus and fundamental Math courses.',
      responsibilities: [
        'Delivered personalized academic guidance to students, focusing on critical Calculus and fundamental Math courses',
        'Customized teaching approach utilizing a blend of direct and indirect teaching methodologies',
        'Supported management in hiring prospective tutors',
        'Organized YouTube Team\'s content'
      ]
    },
    {
      id: 'allstate-cloud-intern-2023',
      title: 'Cloud Engineering Intern, Allstate Enterprise Solutions',
      company: 'Allstate',
      period: 'May 2023 - August 2023',
      description: 'Enhanced AWS security configurations and collaborated on global infrastructure management.',
      responsibilities: [
        'Implemented new FMS WAFv2 policy for Splunk, employing distinct rule groups based on environmental categorization',
        'Collaborated with the infrastructure team to establish global hosted zones for pre-production and production accounts',
        'Provided vital assistance to engineers in troubleshooting Lambda function configurations',
        'Automated addition of new accounts to a global web ACL by updating AWS Firewall Manager policy modules'
      ]
    },
    {
      id: 'allstate-cloud-intern-2022',
      title: 'Cloud Engineering Intern, ATSV',
      company: 'Allstate',
      period: 'May 2022 - August 2022',
      description: 'Developed cloud solutions to optimize costs and improve infrastructure efficiency.',
      responsibilities: [
        'Developed a fault-tolerant Cloud solution to significantly reduce costs by migrating workloads in the non-production environment',
        'Leveraged AWS EC2 Spot Fleet, Auto Scaling Groups, Launch Configurations, and Cloud Watch Alarms',
        'Collaborated with colleagues and engineers to codify and deploy the infrastructure using Terraform Enterprise',
        'Identified and pitched a solution for an AI-driven HR assistance chatbot to simplify and accelerate hiring process'
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
