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
    timezone: "PST",
  },
  {
    name: "James Okafor",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    role: "Full-Stack Developer",
    description: "Passionate about AI-driven SaaS products.",
    skills: ["React", "Node.js", "Python"],
    lookingFor: "Business Co-Founder",
    commitment: "Full-Time",
    timezone: "GMT",
  },
  {
    name: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    role: "Growth Marketer",
    description: "Scaling B2B SaaS from 0 to 10k users.",
    skills: ["SEO", "Content Strategy", "Analytics"],
    lookingFor: "Technical Co-Founder",
    commitment: "Part-Time",
    timezone: "IST",
  },
  {
    name: "Marcus Liu",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    role: "Backend Engineer",
    description: "Expert in scalable infrastructure and APIs.",
    skills: ["Go", "AWS", "Kubernetes"],
    lookingFor: "Product Co-Founder",
    commitment: "Full-Time",
    timezone: "EST",
  },
  {
    name: "Elena Vasquez",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    role: "CEO & Visionary",
    description: "Serial entrepreneur focused on fintech innovation.",
    skills: ["Fundraising", "Strategy", "Sales"],
    lookingFor: "CTO Co-Founder",
    commitment: "Full-Time",
    timezone: "CET",
  },
  {
    name: "David Kim",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    role: "Data Scientist",
    description: "Turning complex data into actionable insights.",
    skills: ["ML", "Python", "SQL"],
    lookingFor: "Business Co-Founder",
    commitment: "Part-Time",
    timezone: "KST",
  },
];

const allUsers = [...mockUsers, ...mockUsers];

export default function UserCards() {
  return (
    <section className="relative py-10 md:py-14 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium text-center mb-2">
          Founders Already Waiting
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Your Future Co-Founder Could Be Here
        </h2>

        {/* Row 1 */}
        <motion.div
          className="flex gap-4 mb-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {allUsers.map((user, i) => (
            <UserCard key={`row1-${i}`} user={user} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex gap-4"
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
    <div className="flex-shrink-0 w-64 rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 hover:border-primary/40 hover:bg-card/90 transition-all group">
      <div className="flex items-center gap-2.5 mb-2.5">
        <Avatar className="h-9 w-9 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
          <AvatarImage src={user.photo} alt={user.name} />
          <AvatarFallback className="text-[10px] bg-primary/10 text-primary">{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="font-display font-semibold text-xs text-foreground truncate">{user.name}</p>
          <p className="text-[11px] text-primary/80">{user.role}</p>
        </div>
        <Badge variant="outline" className="ml-auto text-[9px] px-1.5 py-0 border-primary/20 text-primary/70 shrink-0">
          {user.timezone}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-2.5">{user.description}</p>
      <div className="flex flex-wrap gap-1 mb-2.5">
        {user.skills.map((skill) => (
          <span key={skill} className="text-[10px] px-1.5 py-0.5 rounded-md bg-primary/10 text-primary/80 font-medium">
            {skill}
          </span>
        ))}
      </div>
      <div className="text-[10px] text-muted-foreground pt-2 border-t border-border/50">
        Seeking: <span className="text-foreground/80 font-medium">{user.lookingFor}</span> · {user.commitment}
      </div>
    </div>
  );
}
