import { getYear } from '@/lib/utils';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
              <span className="font-mono">SD</span><span className="text-primary-400">.</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Software Engineer & Developer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6">
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="text-gray-400 hover:text-white transition-colors py-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/sai-deeduvanu-6108b21b8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {getYear()} Sai Deeduvanu. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-600">•</span>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
