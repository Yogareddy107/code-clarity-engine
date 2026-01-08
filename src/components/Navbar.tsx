import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 text-foreground font-semibold text-lg">
          <Code2 className="w-6 h-6 text-primary" />
          <span>Revealcode</span>
        </a>

        <motion.a 
          href="#waitlist"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Early Access
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
