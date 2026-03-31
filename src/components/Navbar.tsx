import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { NavLink } from "@/components/NavLink";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="text-lg font-display font-bold tracking-tight">Cobuildr</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <NavLink to="/how-it-works" className="hover:text-foreground transition-colors">How it works</NavLink>
              <NavLink to="/explore" className="hover:text-foreground transition-colors">Explore Builders</NavLink>
              <NavLink to="#" className="hover:text-foreground transition-colors">Pricing</NavLink>
        </div>
        <Button variant="glow" size="sm">
          Find Your Match
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
