import { Zap, GitBranch, AlertTriangle, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: GitBranch, label: "Structure" },
  { icon: Zap, label: "Execution flow" },
  { icon: AlertTriangle, label: "Risk" },
  { icon: Gauge, label: "Modification difficulty" },
];

const SolutionSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            The 10-Minute
            <br />
            <span className="text-gradient">Code Intelligence Engine</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Paste a public GitHub repository link.
            <br />
            We analyze the entire codebase and return only what matters:
          </p>
        </ScrollReveal>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card text-center"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <feature.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <span className="text-sm font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal delay={0.2}>
          <div className="space-y-2 text-muted-foreground">
            <p>No documentation hunting.</p>
            <p>No guesswork.</p>
            <p className="text-foreground font-medium">No mental overload.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
