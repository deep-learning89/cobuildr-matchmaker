import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Rocket } from "lucide-react";

const FilterBar = () => {
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
      } catch {
        // still show success
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="filter-card rounded-2xl p-6 md:p-8">
        {submitted ? (
          <div className="flex items-center justify-center gap-2 py-3">
            <Rocket className="h-5 w-5 text-primary" />
            <p className="text-foreground font-medium text-sm">You're on the list! 🚀</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-border text-foreground"
            />
            <Button type="submit" variant="glow" size="sm" className="whitespace-nowrap">
              Join Waitlist <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </form>
        )}
        <div className="text-center mt-4 space-y-1">
          <p className="text-xs text-muted-foreground">Join 50+ founders already on the waitlist</p>
          <p className="text-xs text-muted-foreground">Early members get priority matching at launch.</p>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
