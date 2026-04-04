import { MynaHero } from "@/components/ui/myna-hero";
import { Button } from "@/components/ui/button";
import UserCards from "@/components/UserCards";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ArrowRight, Rocket, CheckCircle, Star, Users, Clock, Target, Search, Zap } from "lucide-react";

const InlineWaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      await fetch("https://formspree.io/f/mvzvadez", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {}
    setState("done");
    setTimeout(() => {
      setState("idle");
      setEmail("");
    }, 3000);
  };

  if (state === "done") {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        <Rocket className="h-5 w-5 text-primary" />
        <p className="text-foreground font-medium text-sm">You're on the list! 🚀</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <Button type="submit" variant="glow" size="sm" className="whitespace-nowrap" disabled={state === "loading"}>
        {state === "loading" ? "Joining..." : "Get Early Access"} <ArrowRight className="h-3.5 w-3.5 ml-1" />
      </Button>
    </form>
  );
};

const Index = () => {
  return (
    <>
      <Navbar />
      <MynaHero />

      {/* CTA Section */}
      <section className="relative -mt-8 z-10 px-4">
        <div className="container mx-auto max-w-xl flex flex-col items-center gap-4">

          {/* Urgency line */}
          <p className="text-sm text-primary font-medium text-center">
            First 100 members get priority matching when we launch — 88 spots left.
          </p>

          {/* Form card */}
          <div className="w-full rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-lg p-6">
            <InlineWaitlistForm />
            <p className="text-xs text-muted-foreground text-center mt-3">No spam. Unsubscribe anytime.</p>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 text-primary" /> Free to join
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-primary" /> Launching soon
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-primary" /> Takes 30 seconds
            </span>
          </div>
        </div>
      </section>

      {/* User Cards Section */}
      <UserCards />

      {/* Simple Process Section */}
      <section className="relative py-14 md:py-20 px-4 bg-card/30 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
              Simple Process
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              From stranger to co-founder in 3 steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-primary/40">01</span>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Tell us how you build</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Share your skills, timezone, commitment level, and what you're building. The more you share, the better your matches.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Search className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-primary/40">02</span>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Get AI-matched</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our algorithm finds people who complement your skills — not random suggestions. Developers find business minds. Designers find builders.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold text-primary/40">03</span>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">Sprint before you commit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Run a 24-hour collaboration sprint before committing. Test the chemistry and work style before you share equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cobuildr Section */}
      <section className="relative py-14 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Why Cobuildr?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Skill-Based Matching</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get matched with co-founders based on complementary skills. Developers find business minds, designers find builders.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Timezone & Style Fit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Filter by timezone, work style, and commitment level so you connect with people who actually align with how you build.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Fast & No Friction</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Try a 24-hour collaboration sprint before committing. No guessing, no wasted time — just real builders finding the right people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="relative py-14 md:py-20 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-xl flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Ready to find your co-founder?
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            Join 312 founders already on the waitlist. Launching soon — early members get matched first.
          </p>
          <div className="w-full rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-lg p-6">
            <InlineWaitlistForm />
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
