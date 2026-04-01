import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Twitter, Linkedin, Globe, MessageSquare, UserPlus, Clock, MapPin, ArrowLeft } from "lucide-react";

const profilesData: Record<string, ProfileData> = {
  "sarah-chen": {
    name: "Sarah Chen",
    username: "sarah-chen",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    role: "Product Designer",
    bio: "I design products people actually want to use. Spent 4 years at a design agency, now going all-in on my own SaaS. I believe great products start with understanding the user, not the tech stack. Currently building a remote collaboration tool that makes async work feel human.",
    skills: ["UI/UX", "Figma", "User Research", "Prototyping", "Design Systems", "Webflow"],
    lookingFor: ["Technical Co-Founder", "Full-Stack Developer"],
    timezone: "PST (UTC-8)",
    availability: "Full-Time",
    socials: { github: "#", twitter: "#", linkedin: "#", website: "#" },
    projects: [
      { name: "CollabSpace", description: "Async collaboration tool for remote teams", stage: "Building" },
      { name: "DesignFlow", description: "Design handoff tool with AI annotations", stage: "Idea" },
    ],
    shipped: [
      { name: "PixelKit", description: "Open-source UI component library", stage: "Launched" },
    ],
    need: "Looking for a technical co-founder who can build a real-time collaboration engine. Must be comfortable with WebSockets and distributed systems.",
    activity: [
      "Joined Cobuildr · 2 days ago",
      "Updated profile · 1 day ago",
      "Uploaded CollabSpace · 5 hours ago",
    ],
  },
  "james-okafor": {
    name: "James Okafor",
    username: "james-okafor",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    role: "Full-Stack Developer",
    bio: "I ship fast and iterate faster. 6 years building web apps, now focused on AI-powered SaaS. I've built everything from payment systems to real-time dashboards. Looking for someone who handles the business side so I can focus on what I do best — building.",
    skills: ["React", "Node.js", "Python", "TypeScript", "PostgreSQL", "AWS"],
    lookingFor: ["Business Co-Founder", "Growth Marketer"],
    timezone: "GMT (UTC+0)",
    availability: "Full-Time",
    socials: { github: "#", twitter: "#", linkedin: "#", website: "#" },
    projects: [
      { name: "AIScheduler", description: "AI-powered meeting scheduler that learns your preferences", stage: "Building" },
      { name: "DevPulse", description: "Developer productivity analytics dashboard", stage: "Building" },
    ],
    shipped: [
      { name: "QuickAPI", description: "API boilerplate generator for Node.js", stage: "Launched" },
      { name: "FormStack", description: "Drag-and-drop form builder", stage: "Launched" },
    ],
    need: "Need a business-minded co-founder who can handle sales, partnerships, and fundraising. Ideally someone with B2B SaaS experience.",
    activity: [
      "Joined Cobuildr · 5 days ago",
      "Shipped QuickAPI · 3 days ago",
      "Started collaboration with Elena · 1 day ago",
    ],
  },
  "elena-vasquez": {
    name: "Elena Vasquez",
    username: "elena-vasquez",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    role: "CEO & Serial Entrepreneur",
    bio: "Built and sold two startups in fintech. Now raising a seed round for my third venture — a payment infrastructure platform for emerging markets. I handle strategy, fundraising, and sales. I need a technical leader who can own the entire engineering side.",
    skills: ["Fundraising", "Strategy", "Sales", "Product Management", "Partnerships", "Go-to-Market"],
    lookingFor: ["CTO Co-Founder", "Backend Engineer"],
    timezone: "CET (UTC+1)",
    availability: "Full-Time",
    socials: { github: "#", twitter: "#", linkedin: "#", website: "#" },
    projects: [
      { name: "PayBridge", description: "Payment infrastructure for emerging markets", stage: "Building" },
    ],
    shipped: [
      { name: "FinLedger", description: "B2B invoicing platform (acquired 2022)", stage: "Acquired" },
      { name: "CashTrack", description: "Expense tracking for freelancers (acquired 2020)", stage: "Acquired" },
    ],
    need: "Looking for a CTO-level co-founder who can architect a payment processing system from scratch. Must have experience with PCI compliance and financial APIs.",
    activity: [
      "Joined Cobuildr · 1 week ago",
      "Uploaded PayBridge pitch deck · 3 days ago",
      "Completed collaboration with James · 12 hours ago",
    ],
  },
};

interface ProfileData {
  name: string;
  username: string;
  photo: string;
  role: string;
  bio: string;
  skills: string[];
  lookingFor: string[];
  timezone: string;
  availability: string;
  socials: { github: string; twitter: string; linkedin: string; website: string };
  projects: { name: string; description: string; stage: string }[];
  shipped: { name: string; description: string; stage: string }[];
  need: string;
  activity: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

const stageBadgeColor = (stage: string) => {
  switch (stage) {
    case "Launched": return "bg-emerald-500/15 text-emerald-400 border-emerald-500/20";
    case "Acquired": return "bg-amber-500/15 text-amber-400 border-amber-500/20";
    case "Building": return "bg-blue-500/15 text-blue-400 border-blue-500/20";
    default: return "bg-muted text-muted-foreground border-border";
  }
};

const SocialButton = ({ icon: Icon, href }: { icon: React.ElementType; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="h-10 w-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
  >
    <Icon className="h-4 w-4" />
  </motion.a>
);

const ProjectCard = ({ project }: { project: { name: string; description: string; stage: string } }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -2, borderColor: "hsl(155 80% 50% / 0.3)" }}
    className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 transition-all"
  >
    <div className="flex items-center justify-between mb-1.5">
      <h4 className="font-display font-semibold text-sm text-foreground">{project.name}</h4>
      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${stageBadgeColor(project.stage)}`}>
        {project.stage}
      </span>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
  </motion.div>
);

const UserProfile = () => {
  const { username } = useParams<{ username: string }>();
  const profile = profilesData[username || ""];

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 flex flex-col items-center justify-center gap-4">
          <p className="text-muted-foreground text-lg">Profile not found</p>
          <Link to="/explore">
            <Button variant="outline-glow">Back to Explore</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Banner */}
      <div className="relative h-44 md:h-56 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(155 80% 50% / 0.15) 0%, hsl(240 80% 60% / 0.12) 50%, hsl(280 80% 60% / 0.1) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 -mt-16 relative z-10">
        {/* Back button */}
        <Link to="/explore" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Explore
        </Link>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-10"
        >
          {/* Avatar with glow */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary/60 via-primary/20 to-transparent blur-md" />
            <Avatar className="h-24 w-24 md:h-28 md:w-28 ring-4 ring-background relative">
              <AvatarImage src={profile.photo} alt={profile.name} />
              <AvatarFallback className="text-lg bg-primary/10 text-primary">
                {profile.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-1.5">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{profile.name}</h1>
              <Badge className="w-fit text-xs bg-primary/10 text-primary border-primary/20">{profile.role}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{profile.timezone}</span>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {profile.availability}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 shrink-0">
            <Button variant="glow" size="sm" className="gap-1.5">
              <UserPlus className="h-3.5 w-3.5" /> Connect
            </Button>
            <Button variant="outline-glow" size="sm" className="gap-1.5">
              <MessageSquare className="h-3.5 w-3.5" /> Message
            </Button>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-20">
          {/* Left Column */}
          <motion.div
            className="md:col-span-2 space-y-8"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Bio */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">About</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{profile.bio}</p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, y: -1 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary/90 font-medium border border-primary/15 cursor-default hover:bg-primary/15 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Looking For */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Looking For</h3>
              <div className="flex flex-wrap gap-2">
                {profile.lookingFor.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground/80 font-medium border border-border cursor-default hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Connect</h3>
              <div className="flex gap-2">
                <SocialButton icon={Github} href={profile.socials.github} />
                <SocialButton icon={Twitter} href={profile.socials.twitter} />
                <SocialButton icon={Linkedin} href={profile.socials.linkedin} />
                <SocialButton icon={Globe} href={profile.socials.website} />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Feed */}
          <motion.div
            className="md:col-span-3 space-y-6"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* What I Need — pinned */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-primary/25 bg-primary/5 p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">📌 What I Need</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{profile.need}</p>
            </motion.div>

            {/* SaaS Projects */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">SaaS Projects</h3>
              <div className="space-y-3">
                {profile.projects.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>
            </motion.div>

            {/* Shipped */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Shipped</h3>
              <div className="space-y-3">
                {profile.shipped.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>
            </motion.div>

            {/* Activity */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">Recent Activity</h3>
              <div className="space-y-2">
                {profile.activity.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
