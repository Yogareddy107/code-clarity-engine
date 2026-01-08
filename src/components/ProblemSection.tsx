import { X } from "lucide-react";

const problems = [
  "Have no clear entry point",
  "Hide core logic under layers of files",
  "Lack architectural explanation",
  "Contain dead or misleading code",
  "Force developers to context-switch constantly",
];

const ProblemSection = () => {
  return (
    <section className="section-spacing border-t border-border/30">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          The Real Problem
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 leading-relaxed">
          Reading an unfamiliar GitHub repository is{" "}
          <span className="text-gradient font-semibold">mentally exhausting.</span>
        </p>

        <div className="mb-12">
          <p className="text-muted-foreground mb-6">Most repositories:</p>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 text-muted-foreground"
              >
                <span className="mt-1 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-destructive" />
                </span>
                {problem}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-l-2 border-primary/50 pl-6 py-2">
          <p className="text-lg text-foreground/90 mb-4">
            Even experienced engineers waste hours just trying to understand where to begin.
          </p>
          <p className="text-muted-foreground">
            This isn't a skill issue.
            <br />
            <span className="text-foreground font-medium">It's a tooling gap.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
