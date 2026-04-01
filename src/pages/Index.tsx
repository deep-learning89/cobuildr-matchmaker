// Cobuildr Landing Page
// import { MynaHero } from "@/components/ui/myna-hero";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import FilterBar from "@/components/FilterBar";
// import UserCards from "@/components/UserCards";
// import { ArrowRight, Rocket } from "lucide-react";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";

// inside return, add as first line:
{/* <Navbar /> */}

// const Index = () => {
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email.trim()) {
//       try {
//         await fetch("https://formspree.io/f/mvzvadez", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         });
//         setSubmitted(true);
//         setTimeout(() => {
//           setDialogOpen(false);
//           setSubmitted(false);
//           setEmail("");
//         }, 2000);
//       } catch {
//         setSubmitted(true);
//         setTimeout(() => {
//           setDialogOpen(false);
//           setSubmitted(false);
//           setEmail("");
//         }, 2000);
//       }
//     }
//   };

//   return (
//     <>
//       <MynaHero />

//       {/* Toolbar */}
//       <section className="relative -mt-16 z-10 px-4">
//         <div className="container mx-auto max-w-2xl flex items-center justify-between rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-lg px-6 py-4">
//           <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
//             Ready to find your match?
//           </p>
//           <Button variant="glow" size="sm" onClick={() => setDialogOpen(true)}>
//             Get Started <ArrowRight className="h-3.5 w-3.5 ml-1" />
//           </Button>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="relative py-10 md:py-14 px-4 bg-background">
//         <div className="container mx-auto text-center mb-8">
//           <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
//             Tell us about yourself
//           </p>
//         </div>
//         <FilterBar />
//         <div className="flex justify-center mt-8">
//           <Button variant="glow" size="lg" className="text-base px-10 glow-border" onClick={() => setDialogOpen(true)}>
//             Join Waitlist
//             <ArrowRight className="h-4 w-4 ml-1" />
//           </Button>
//         </div>
//       </section>

//       {/* User Cards Section */}
//       <UserCards />

//       {/* Why Cobuildr Section */}
//       <section className="relative py-14 md:py-20 px-4 bg-background">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
//             Why Cobuildr?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors">
//               <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                 <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
//               </div>
//               <h3 className="font-display text-lg font-bold text-foreground mb-2">Skill-Based Matching</h3>
//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 Get matched with co-founders based on complementary skills — not random connections. Developers find business minds, designers find builders.
//               </p>
//             </div>
//             <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors">
//               <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                 <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//               </div>
//               <h3 className="font-display text-lg font-bold text-foreground mb-2">Timezone & Style Fit</h3>
//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 Filter by timezone, work style, and commitment level so you connect with people who actually align with how you build.
//               </p>
//             </div>
//             <div className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors">
//               <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//                 <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
//               </div>
//               <h3 className="font-display text-lg font-bold text-foreground mb-2">Fast & No Friction</h3>
//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 Try a 24-hour collaboration sprint before committing. No guessing, no wasted time — just real builders finding the right people.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-border py-8 px-4 bg-background">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
//           <span className="font-display font-semibold text-foreground">Cobuildr</span>
//           <span>© 2026 Cobuildr. All rights reserved.</span>
//         </div>
//       </footer>

//       {/* Waitlist Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md bg-card border-border">
//           <DialogHeader>
//             <DialogTitle className="font-display text-xl text-foreground">Join the Waitlist</DialogTitle>
//             <DialogDescription className="text-foreground/60">
//               Be the first to find your perfect co-founder. Enter your email below.
//             </DialogDescription>
//           </DialogHeader>
//           {submitted ? (
//             <div className="py-6 text-center">
//               <Rocket className="h-8 w-8 text-primary mx-auto mb-3" />
//               <p className="text-foreground font-medium">You're on the list! 🚀</p>
//               <p className="text-sm text-foreground/60 mt-1">We'll be in touch soon.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
//               <Input
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="bg-background border-border text-foreground"
//               />
//               <Button type="submit" variant="glow" className="w-full">
//                 Join Waitlist <ArrowRight className="h-4 w-4 ml-1" />
//               </Button>
//             </form>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Index;

import { MynaHero } from "@/components/ui/myna-hero";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import FilterBar from "@/components/FilterBar";
import UserCards from "@/components/UserCards";
import { ArrowRight, Rocket } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

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
      <Navbar />
      <MynaHero />

      {/* Toolbar */}
      <section className="relative mt-8 z-10 px-4">
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

