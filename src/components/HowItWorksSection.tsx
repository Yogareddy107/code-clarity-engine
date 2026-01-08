import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Paste a Repository Link",
    description: "Any public GitHub repository.",
  },
  {
    number: "2",
    title: "Automated Deep Analysis",
    description: "We read files, follow execution paths, and filter noise.",
  },
  {
    number: "3",
    title: "Get Instant Clarity",
    description: "A structured report designed for real developers.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-spacing border-t border-border/30">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 tracking-tight text-center">
            How It Works
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line */}
          <motion.div 
            className="hidden md:block absolute left-[calc(50%-1px)] top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <motion.div 
                  className="step-number relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.number}
                </motion.div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
