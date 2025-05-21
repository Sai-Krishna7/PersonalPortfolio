import { SVGProps } from 'react';

export default function HeadshotPlaceholder(props: SVGProps<SVGElement>) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="headshot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="200" fill="url(#headshot-gradient)" />
      <circle cx="200" cy="150" r="60" fill="#F9FAFB" />
      <path
        d="M200 230 C120 230 80 290 80 360 L320 360 C320 290 280 230 200 230 Z"
        fill="#F9FAFB"
      />
    </svg>
  );
}
