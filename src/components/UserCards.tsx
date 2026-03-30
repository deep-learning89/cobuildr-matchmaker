import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mockUsers = [
  {
    name: "Sarah Chen",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    role: "Product Designer",
    description: "Building the future of remote collaboration tools.",
    skills: ["UI/UX", "Figma", "User Research"],
    lookingFor: "Technical Co-Founder",
    commitment: "Full-Time",
    timezone: "PST (UTC-8)",
  },
  {
    name: "James Okafor",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    role: "Full-Stack Developer",
    description: "Passionate about AI-driven SaaS products.",
    skills: ["React", "Node.js", "Python"],
    lookingFor: "Business Co-Founder",
    commitment: "Full-Time",
    timezone: "GMT (UTC+0)",
  },
  {
    name: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    role: "Growth Marketer",
    description: "Scaling B2B SaaS from 0 to 10k users.",
    skills: ["SEO", "Content Strategy", "Analytics"],
    lookingFor: "Technical Co-Founder",
    commitment: "Part-Time",
    timezone: "IST (UTC+5:30)",
  },
  {
    name: "Marcus Liu",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    role: "Backend Engineer",
    description: "Expert in scalable infrastructure and APIs.",
    skills: ["Go", "AWS", "Kubernetes"],
    lookingFor: "Product Co-Founder",
    commitment: "Full-Time",
    timezone: "EST (UTC-5)",
  },
  {
    name: "Elena Vasquez",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    role: "CEO & Visionary",
    description: "Serial entrepreneur focused on fintech innovation.",
    skills: ["Fundraising", "Strategy", "Sales"],
    lookingFor: "CTO Co-Founder",
    commitment: "Full-Time",
    timezone: "CET (UTC+1)",
  },
  {
    name: "David Kim",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    role: "Data Scientist",
    description: "Turning complex data into actionable insights.",
    skills: ["ML", "Python", "SQL"],
    lookingFor: "Business Co-Founder",
    commitment: "Part-Time",
    timezone: "KST (UTC+9)",
  },
];

// Duplicate for seamless infinite scroll
const allUsers = [...mockUsers, ...mockUsers];

export default function UserCards() {
  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium text-center mb-4">
          Founders Already Waiting
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Your Future Co-Founder Could Be Here
        </h2>

        {/* Row 1 - scroll left */}
        <motion.div
          className="flex gap-5 mb-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {allUsers.map((user, i) => (
            <UserCard key={`row1-${i}`} user={user} />
          ))}
        </motion.div>

        {/* Row 2 - scroll right */}
        <motion.div
          className="flex gap-5"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...allUsers].reverse().map((user, i) => (
            <UserCard key={`row2-${i}`} user={user} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function UserCard({ user }: { user: (typeof mockUsers)[0] }) {
  return (
    <div className="flex-shrink-0 w-72 rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.photo} alt={user.name} />
          <AvatarFallback className="text-xs">{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="font-display font-semibold text-sm text-foreground truncate">{user.name}</p>
          <p className="text-xs text-primary">{user.role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{user.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {user.skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-[10px] px-2 py-0.5">
            {skill}
          </Badge>
        ))}
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground border-t border-border pt-3">
        <span>Looking for: <span className="text-foreground font-medium">{user.lookingFor.split(" ")[0]}</span></span>
        <span>{user.timezone.split(" ")[0]}</span>
      </div>
    </div>
  );
}
