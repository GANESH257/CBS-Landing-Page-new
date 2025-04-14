export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a365d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d3748" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Background gradient */}
        <rect width="100" height="100" fill="url(#gradient)" />
        
        {/* Animated circles */}
        <circle className="animate-blob" cx="20" cy="20" r="15" fill="white" fillOpacity="0.1">
          <animate
            attributeName="r"
            values="15;20;15"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            values="20;80;20"
            dur="15s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="20;80;20"
            dur="12s"
            repeatCount="indefinite"
          />
        </circle>
        
        <circle className="animate-blob animation-delay-2000" cx="80" cy="80" r="12" fill="white" fillOpacity="0.1">
          <animate
            attributeName="r"
            values="12;18;12"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            values="80;20;80"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="80;20;80"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>
        
        <circle className="animate-blob animation-delay-4000" cx="50" cy="50" r="10" fill="white" fillOpacity="0.1">
          <animate
            attributeName="r"
            values="10;15;10"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            values="50;80;50"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="50;20;50"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
} 