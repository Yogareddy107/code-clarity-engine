import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const audiences = [
  "Onboard into unfamiliar codebases",
  "Review open-source projects",
  "Prepare for technical interviews",
  "Evaluate repositories quickly and accurately",
];

const notThis = [
  "A README generator",
  "A generic code summary tool",
  "A replacement for thinking",
];

const AudienceSection = () => {
  return (
    <section className="section-spacing border-t border-border/30">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Who this is for */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                Who This Is For
              </h2>
              <p className="text-muted-foreground mb-6">Built for Developers Who:</p>
              <motion.ul 
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
              >
                {audiences.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-foreground/90"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <p className="mt-8 text-muted-foreground italic">
                If you read code for a living, this is for you.
              </p>
            </div>
          </ScrollReveal>

          {/* What this is not */}
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                What This Is Not
              </h2>
              <p className="text-muted-foreground mb-6">This is not:</p>
              <motion.ul 
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
                }}
              >
                {notThis.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-muted-foreground"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <p className="mt-8 text-foreground/90">
                This is a <span className="text-gradient font-semibold">clarity engine</span> — designed to reduce cognitive load, not dumb things down.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
