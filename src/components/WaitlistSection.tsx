import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <section id="waitlist" className="section-spacing border-t border-border/30">
      <div className="container-narrow text-center">
        {/* Launch status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm text-primary font-medium">Launching Soon</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Get Early Access
        </h2>

        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          We're opening early access to a limited group of developers.
        </p>

        {isSubmitted ? (
          <div className="feature-card max-w-md mx-auto">
            <p className="text-lg text-foreground mb-2">You're on the list!</p>
            <p className="text-muted-foreground text-sm">
              We'll reach out when it's your turn.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border 
                         text-foreground placeholder:text-muted-foreground
                         focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent
                         transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Get Access
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-4">
              No spam. No noise. Just product updates.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
