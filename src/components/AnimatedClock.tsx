import { useEffect, useState } from "react";

const AnimatedClock = () => {
  const [seconds, setSeconds] = useState(0);
  const targetSeconds = 600; // 10 minutes = 600 seconds
  const animationDuration = 3000; // 3 seconds to complete animation

  useEffect(() => {
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentSeconds = Math.floor(easeOutQuart * targetSeconds);
      
      setSeconds(currentSeconds);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedTime = `${minutes}:${secs.toString().padStart(2, '0')}`;

  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-flex items-center justify-center font-mono tabular-nums">
        {formattedTime}
      </span>
      <svg
        className="w-[0.8em] h-[0.8em] inline-block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" className="opacity-30" />
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeDasharray={`${(seconds / targetSeconds) * 62.83} 62.83`}
          className="transition-all duration-100"
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
        <polyline points="12 6 12 12 16 14" className="opacity-70" />
      </svg>
    </span>
  );
};

export default AnimatedClock;
