import { MynaHero, features } from "@/components/ui/myna-hero";
import { Button } from "@/components/ui/button";
import FilterBar from "@/components/FilterBar";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <MynaHero />

      {/* Toolbar */}
      <section className="relative py-6 px-4 bg-card border-y border-border">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Ready to find your match?
          </p>
          <Button variant="glow" size="sm">
            Get Started <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-20 md:py-28 px-4 bg-background">
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

      {/* Features Section */}
      <section className="relative py-24 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium text-center mb-10">
            Unlock the Power of Smart Matching
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="filter-card rounded-xl p-6 hover:border-primary/20 transition-colors"
              >
                <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
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
