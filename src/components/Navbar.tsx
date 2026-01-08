import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container-wide flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 text-foreground font-semibold text-lg">
          <Code2 className="w-6 h-6 text-primary" />
          <span>Revealcode</span>
        </a>

        <a 
          href="#waitlist"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
