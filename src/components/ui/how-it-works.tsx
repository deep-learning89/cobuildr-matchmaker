"use client";

import { cn } from "@/lib/utils";
import { Layers, Search, Zap } from "lucide-react";
import type React from "react";

interface HowItWorksProps extends React.HTMLAttributes<HTMLDivElement> {}

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, benefits }) => (
  <div className="relative rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/30 hover:shadow-lg">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="mb-2 font-display text-lg font-bold text-foreground">{title}</h3>
    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

export const HowItWorks: React.FC<HowItWorksProps> = ({ className, ...props }) => {
  const stepsData = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Tell us how you build",
      description:
        "Share your skills, your stage, and what you are building. Let the AI understand your workflow and working style.",
      benefits: [
        "The more you share, the better your matches will be",
        "Define your skills and building stage",
        "Let AI understand your working style",
      ],
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Get matched with the right people",
      description:
        "AI scans profiles based on your goals and how you work. Find founders, developers, and marketers who are at your stage.",
      benefits: [
        "No random suggestions, only people who actually fit",
        "Matched by goals and work style",
        "Find founders, developers, and marketers",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Collaborate before you commit",
      description:
        "Browse matched profiles and their uploaded SaaS products. Start a 24 hour collaboration to test the fit.",
      benefits: [
        "Commit to your co-founder or team only when you are sure",
        "24-hour collaboration sprint",
        "Review how they think and work",
      ],
    },
  ];

  return (
    <section className={cn("py-16 md:py-24 bg-background", className)} {...props}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Our platform uses smart matching to connect you with the right co-founders and teammates — in three simple steps.
          </p>
        </div>


        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
