const WhySection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
          Why This Matters
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 text-lg">
          <p className="text-foreground/90">
            Time isn't the only thing wasted while reading code.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gradient">
            Mental energy is.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Understanding a repo shouldn't feel like solving a puzzle with missing pieces.
            We built this to make codebases approachable, navigable, and explainable — fast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
