"use client";

import * as React from "react";
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
    description:
      "Our algorithm pairs you with co-founders who complement your skills and share your vision.",
  },
  {
    icon: Zap,
    label: "Fast & Focused",
    description:
      "Stop wasting time on LinkedIn. Get matched with vetted founders ready to build.",
  },
  {
    icon: Globe,
    label: "Global Network",
    description:
      "Connect with ambitious SaaS founders across 50+ countries and every timezone.",
  },
];

export function MynaHero() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const titleWords = [
    "FIND",
    "YOUR",
    "PERFECT",
    "CO-FOUNDER",
    "TO",
    "BUILD",
    "WITH",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-lg font-display font-bold tracking-tight">
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
            <Button variant="glow" size="sm" className="hidden sm:inline-flex">
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
                  <Button variant="glow" size="sm">
                    GET STARTED <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={ref} className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-4">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <motion.h1
              className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8 flex flex-wrap justify-center gap-x-4 gap-y-1"
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
                    text === "CO-FOUNDER" ? "text-gradient" : ""
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
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Stop searching through LinkedIn. Cobuildr matches SaaS founders
              with complementary skills, aligned vision, and the same drive to
              ship.
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
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                >
                  <feature.icon className="h-4 w-4 text-primary" />
                  {feature.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 1, duration: 0.4 },
                },
              }}
            >
              <Button variant="glow" size="lg" className="text-base px-10">
                GET STARTED <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

export { features };
