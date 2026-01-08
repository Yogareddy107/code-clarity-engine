import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Insert email into waitlist table
      const { error: dbError } = await supabase
        .from('waitlist')
        .insert({ email });

      if (dbError) {
        if (dbError.code === '23505') {
          // Unique constraint violation - email already exists
          setError("You're already on the waitlist!");
        } else {
          throw dbError;
        }
        setIsSubmitting(false);
        return;
      }

      // Send confirmation email via edge function
      const { error: emailError } = await supabase.functions.invoke('send-waitlist-confirmation', {
        body: { email }
      });

      if (emailError) {
        console.error("Email error:", emailError);
        // Still mark as submitted even if email fails - they're on the list
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (err: any) {
      console.error("Waitlist error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              Check your inbox for a confirmation email. We'll reach out when it's your turn.
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
            {error && (
              <p className="text-sm text-destructive mt-3">{error}</p>
            )}
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
