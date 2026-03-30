// Cobuildr Landing Page
import { MynaHero } from "@/components/ui/myna-hero";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import FilterBar from "@/components/FilterBar";
import UserCards from "@/components/UserCards";
import { ArrowRight, Rocket } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        await fetch("https://formspree.io/f/mvzvadez", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        setSubmitted(true);
        setTimeout(() => {
          setDialogOpen(false);
          setSubmitted(false);
          setEmail("");
        }, 2000);
      } catch {
        setSubmitted(true);
        setTimeout(() => {
          setDialogOpen(false);
          setSubmitted(false);
          setEmail("");
        }, 2000);
      }
    }
  };

  return (
    <>
      <MynaHero />

      {/* Toolbar */}
      <section className="relative -mt-16 z-10 px-4">
        <div className="container mx-auto max-w-2xl flex items-center justify-between rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-lg px-6 py-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Ready to find your match?
          </p>
          <Button variant="glow" size="sm" onClick={() => setDialogOpen(true)}>
            Get Started <ArrowRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-10 md:py-14 px-4 bg-background">
        <div className="container mx-auto text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Tell us about yourself
          </p>
        </div>
        <FilterBar />
        <div className="flex justify-center mt-8">
          <Button variant="glow" size="lg" className="text-base px-10 glow-border" onClick={() => setDialogOpen(true)}>
            Join Waitlist
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </section>

      {/* User Cards Section */}
      <UserCards />

      {/* About Section */}
      <section className="relative py-14 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Cobuildr?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Building a SaaS product alone is hard. You have the idea but you are missing the developer to build it, the designer to shape it, or the marketer to grow it. This platform is where serious founders, developers, and marketers find each other — not randomly, but based on how you work, what you are building, and where you are in your journey. Before you fully commit to a co-founder or teammate, you get 24 hours to collaborate with them, review how they think, and decide if they are the right fit. No guessing, no wasted time. Just real builders finding the right people to build with.
            </p>
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

      {/* Waitlist Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-foreground">Join the Waitlist</DialogTitle>
            <DialogDescription className="text-foreground/60">
              Be the first to find your perfect co-founder. Enter your email below.
            </DialogDescription>
          </DialogHeader>
          {submitted ? (
            <div className="py-6 text-center">
              <Rocket className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-foreground font-medium">You're on the list! 🚀</p>
              <p className="text-sm text-foreground/60 mt-1">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border text-foreground"
              />
              <Button type="submit" variant="glow" className="w-full">
                Join Waitlist <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
