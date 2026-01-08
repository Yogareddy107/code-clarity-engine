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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 tracking-tight text-center">
          How It Works
        </h2>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-[calc(50%-1px)] top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="step-number relative z-10">
                  {step.number}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
