import { Zap, GitBranch, AlertTriangle, Gauge } from "lucide-react";

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          The 10-Minute
          <br />
          <span className="text-gradient">Code Intelligence Engine</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Paste a public GitHub repository link.
          <br />
          We analyze the entire codebase and return only what matters:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card text-center"
            >
              <feature.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-muted-foreground">
          <p>No documentation hunting.</p>
          <p>No guesswork.</p>
          <p className="text-foreground font-medium">No mental overload.</p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
