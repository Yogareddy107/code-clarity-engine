import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const features = [
  "One-line purpose — what this repo truly does",
  "Who it's for — production, demo, or experiment",
  "Exact starting point — specific files, not folders",
  "Core execution flow — how data moves through the system",
  "Key modules that matter",
  "Sections you can safely ignore",
  "Risky or messy areas flagged",
  "Modification difficulty rating",
  "2-minute interview-ready explanation",
];

const FeaturesSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            What You Actually Get
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-muted-foreground mb-12">
            A Focused Repo Intelligence Report
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="feature-card mb-8">
            <StaggerContainer staggerDelay={0.06}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-4 mb-4 last:mb-0">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-center">
            Everything you need to understand the repo.
            <br />
            <span className="text-foreground font-medium">Nothing you don't.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;
