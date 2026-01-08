import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
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
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Understand Any GitHub
          <br />
          <span className="text-gradient">Repository in 10 Minutes.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Stop wasting hours decoding unfamiliar codebases.
          <br className="hidden sm:block" />
          Get instant, developer-grade clarity from any public GitHub repository.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.a 
            href="#waitlist" 
            className="btn-primary group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the Early Access Waitlist
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <a href="#how-it-works" className="btn-secondary group">
            See how it works
            <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </a>
        </motion.div>

        {/* Trust signal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground/70">
            Used by developers who value clarity over chaos.
            <br />
            <span className="text-muted-foreground/50">Built for engineers, not marketers.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
