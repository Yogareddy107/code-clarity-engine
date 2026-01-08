import { Check } from "lucide-react";

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          What You Actually Get
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          A Focused Repo Intelligence Report
        </p>

        <div className="feature-card mb-8">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start gap-4"
              >
                <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground text-center">
          Everything you need to understand the repo.
          <br />
          <span className="text-foreground font-medium">Nothing you don't.</span>
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
