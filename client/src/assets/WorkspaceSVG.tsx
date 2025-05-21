import { SVGProps } from 'react';

export default function WorkspaceSVG(props: SVGProps<SVGElement>) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background */}
      <rect width="800" height="600" fill="#F8FAFC" />
      
      {/* Desk */}
      <rect x="100" y="350" width="600" height="20" fill="#94A3B8" />
      <rect x="120" y="370" width="560" height="180" fill="#64748B" />
      <rect x="150" y="370" width="10" height="180" fill="#475569" />
      <rect x="640" y="370" width="10" height="180" fill="#475569" />
      
      {/* Monitor */}
      <rect x="250" y="120" width="300" height="20" fill="#1E293B" />
      <rect x="240" y="140" width="320" height="200" fill="#0F172A" />
      <rect x="250" y="150" width="300" height="180" fill="#3B82F6" />
      
      {/* Monitor Stand */}
      <rect x="370" y="340" width="60" height="10" fill="#1E293B" />
      <rect x="390" y="270" width="20" height="70" fill="#1E293B" />
      <rect x="380" y="340" width="40" height="10" fill="#334155" />
      
      {/* Keyboard */}
      <rect x="300" y="370" width="200" height="10" fill="#1E293B" />
      <rect x="310" y="360" width="180" height="10" fill="#94A3B8" />
      
      {/* Mouse */}
      <rect x="520" y="370" width="30" height="20" rx="10" fill="#94A3B8" />
      
      {/* Coffee Cup */}
      <rect x="200" y="350" width="30" height="40" rx="5" fill="#FB7185" />
      <rect x="230" y="360" width="10" height="20" rx="5" fill="#FB7185" />
      
      {/* Plant */}
      <rect x="580" y="300" width="40" height="50" rx="5" fill="#10B981" />
      <path d="M590 300 Q600 270 610 300" stroke="#10B981" strokeWidth="5" fill="none" />
      <path d="M600 300 Q610 260 620 300" stroke="#10B981" strokeWidth="5" fill="none" />
      <path d="M580 320 Q570 300 580 290" stroke="#10B981" strokeWidth="5" fill="none" />
      
      {/* Code on Monitor */}
      <rect x="260" y="160" width="280" height="160" fill="#1E293B" />
      <rect x="270" y="170" width="100" height="10" fill="#60A5FA" />
      <rect x="270" y="190" width="140" height="10" fill="#FB7185" />
      <rect x="270" y="210" width="120" height="10" fill="#34D399" />
      <rect x="270" y="230" width="160" height="10" fill="#FB7185" />
      <rect x="270" y="250" width="130" height="10" fill="#60A5FA" />
      <rect x="270" y="270" width="100" height="10" fill="#34D399" />
      <rect x="270" y="290" width="140" height="10" fill="#FB7185" />
    </svg>
  );
}
