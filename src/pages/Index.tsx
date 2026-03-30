import { MynaHero } from "@/components/ui/myna-hero";
import { Button } from "@/components/ui/button";
import FilterBar from "@/components/FilterBar";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <MynaHero />

      {/* Filter Section */}
      <section className="relative pb-20 md:pb-32 px-4 bg-background">
        <div className="container mx-auto text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Tell us about yourself
          </p>
        </div>
        <FilterBar />
        <div className="flex justify-center mt-10">
          <Button variant="glow" size="lg" className="text-base px-10 glow-border">
            Join Waitlist
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-background">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">Cobuildr</span>
          <span>© 2026 Cobuildr. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Index;
