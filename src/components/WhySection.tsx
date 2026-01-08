import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const WhySection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
            Why This Matters
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-6 text-lg">
          <ScrollReveal delay={0.1}>
            <p className="text-foreground/90">
              Time isn't the only thing wasted while reading code.
            </p>
          </ScrollReveal>
          
          <motion.p 
            className="text-2xl md:text-3xl font-semibold text-gradient"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Mental energy is.
          </motion.p>
          
          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground leading-relaxed">
              Understanding a repo shouldn't feel like solving a puzzle with missing pieces.
              We built this to make codebases approachable, navigable, and explainable — fast.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
