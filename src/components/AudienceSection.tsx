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
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
              Who This Is For
            </h2>
            <p className="text-muted-foreground mb-6">Built for Developers Who:</p>
            <ul className="space-y-3">
              {audiences.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground italic">
              If you read code for a living, this is for you.
            </p>
          </div>

          {/* What this is not */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
              What This Is Not
            </h2>
            <p className="text-muted-foreground mb-6">This is not:</p>
            <ul className="space-y-3">
              {notThis.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-foreground/90">
              This is a <span className="text-gradient font-semibold">clarity engine</span> — designed to reduce cognitive load, not dumb things down.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
