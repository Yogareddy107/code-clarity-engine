import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const timeSteps = ["1 hour", "45 min", "30 min", "15 min", "10 minutes"];

const HeroSection = () => {
  const [timeIndex, setTimeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeIndex < timeSteps.length - 1) {
        setIsAnimating(true);
        setTimeout(() => {
          setTimeIndex((prev) => prev + 1);
          setIsAnimating(false);
        }, 150);
      }
    }, timeIndex === 0 ? 800 : 400);

    return () => clearTimeout(timer);
  }, [timeIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-narrow relative z-10 text-center pt-20 pb-32">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 animate-fade-in">
          Understand Any GitHub
          <br />
          <span className="text-gradient">Repository in </span>
          <span 
            className={`text-gradient inline-block transition-all duration-150 ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {timeSteps[timeIndex]}
          </span>
          <span className="text-gradient">{timeIndex === timeSteps.length - 1 ? "." : "..."}</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Stop wasting hours decoding unfamiliar codebases.
          <br className="hidden sm:block" />
          Get instant, developer-grade clarity from any public GitHub repository.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a href="#waitlist" className="btn-primary group">
            Join the Early Access Waitlist
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#how-it-works" className="btn-secondary group">
            See how it works
            <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </a>
        </div>

        {/* Trust signal */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm text-muted-foreground/70">
            Used by developers who value clarity over chaos.
            <br />
            <span className="text-muted-foreground/50">Built for engineers, not marketers.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
