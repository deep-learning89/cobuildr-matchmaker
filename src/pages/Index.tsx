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
      <section className="relative py-6 px-4 bg-card border-y border-border">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Ready to find your match?
          </p>
          <Button variant="glow" size="sm" onClick={() => setDialogOpen(true)}>
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
          <Button variant="glow" size="lg" className="text-base px-10 glow-border" onClick={() => setDialogOpen(true)}>
            Join Waitlist
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </section>

      {/* User Cards Section */}
      <UserCards />

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
