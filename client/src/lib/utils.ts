import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function animateOnScroll() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

export function getYear() {
  return new Date().getFullYear();
}

// Format date from YYYY-MM to Month YYYY
export function formatDate(dateString: string) {
  if (!dateString) return 'Present';
  
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });
}

// Send contact form data to server
export async function sendContactForm(formData: any) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}
