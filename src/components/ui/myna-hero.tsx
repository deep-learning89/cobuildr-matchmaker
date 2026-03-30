"use client";

import * as React from "react";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  Rocket,
  Users,
  Target,
  Handshake,
  Globe,
  Zap,
  Search,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "HOW IT WORKS", href: "#" },
  { title: "FOR FOUNDERS", href: "#" },
  { title: "PRICING", href: "#" },
  { title: "ABOUT", href: "#" },
];

const labels = [
  { icon: Search, label: "Smart Matching" },
  { icon: Users, label: "Co-Founder Discovery" },
  { icon: Handshake, label: "Team Building" },
];

const features = [
  {
    icon: Target,
    label: "Precision Matching",
    description: "Our algorithm pairs you with co-founders who complement your skills and share your vision.",
  },
  {
    icon: Zap,
    label: "Fast & Focused",
    description: "Stop wasting time on LinkedIn. Get matched with vetted founders ready to build.",
  },
  {
    icon: Globe,
    label: "Global Network",
    description: "Connect with ambitious SaaS founders across 50+ countries and every timezone.",
  },
];

export function MynaHero() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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

  const titleWords = [
    "STOP",
    "SOLO",
    "GRINDING,",
    "FIND",
    "YOUR",
    "CO-FOUNDER",
    "AND",
    "BUILD",
    "FASTER",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-lg font-display font-bold tracking-tight text-foreground">
              Cobuildr
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-muted-foreground">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="glow" size="sm" className="hidden sm:inline-flex" onClick={() => setDialogOpen(true)}>
              GET STARTED <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                  <Button variant="glow" size="sm" onClick={() => setDialogOpen(true)}>
                    GET STARTED <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={ref} className="relative pt-24 pb-8 md:pt-28 md:pb-12 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <motion.h1
              className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4 flex flex-wrap justify-center gap-x-2 gap-y-1"
            >
              {titleWords.map((text, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.08, duration: 0.5 },
                    },
                  }}
                   className={
                    text === "PEOPLE" ? "text-gradient" : "text-foreground"
                  }
                >
                  {text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                },
              }}
              className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-6"
            >
              Find co-founders and teammates who match your vision and collaborate with developers, designers, and marketers who are serious about building SaaS products that actually ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.4 },
                },
              }}
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              {labels.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80"
                >
                  <feature.icon className="h-4 w-4 text-primary" />
                  {feature.label}
                </span>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

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
    </div>
  );
}

export { features };
