import { SVGProps } from 'react';

export default function TechPatternSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <pattern
          id="tech-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 10L90 10L90 90L10 90Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M30 30L70 30L70 70L30 70Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M50 20L50 80"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M20 50L80 50"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="10"
            cy="10"
            r="2"
            fill="currentColor"
          />
          <circle
            cx="90"
            cy="10"
            r="2"
            fill="currentColor"
          />
          <circle
            cx="10"
            cy="90"
            r="2"
            fill="currentColor"
          />
          <circle
            cx="90"
            cy="90"
            r="2"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#tech-pattern)"
      />
    </svg>
  );
}
