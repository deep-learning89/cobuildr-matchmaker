import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8">
            <Zap className="h-3.5 w-3.5" />
            Now in Early Access
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Find the perfect
            <br />
            <span className="text-gradient">co-founder</span> to build with
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Stop searching through LinkedIn. Cobuildr matches SaaS founders with
            complementary skills, aligned vision, and the same drive to ship.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Button variant="glow" size="lg" className="text-base px-8">
              Find Your Match
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="outline-glow" size="lg" className="text-base">
              How it works
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative pb-20 md:pb-32 px-4">
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

      {/* Stats */}
      <section className="relative pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, stat: "2,400+", label: "Founders matched" },
              { icon: Globe, stat: "50+", label: "Countries represented" },
              { icon: Zap, stat: "89%", label: "Match satisfaction rate" },
            ].map((item) => (
              <div
                key={item.label}
                className="filter-card rounded-xl p-6 text-center hover:border-primary/20 transition-colors"
              >
                <item.icon className="h-5 w-5 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold mb-1">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">Cobuildr</span>
          <span>© 2026 Cobuildr. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
