import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const builders = [
  {
    name: "Sarah Chen",
    username: "sarah-chen",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    bio: "Building an AI scheduling tool for remote teams. Looking for a technical co-founder who loves clean code.",
    skills: ["UI/UX", "Figma", "User Research"],
    role: "Founder",
  },
  {
    name: "James Okafor",
    username: "james-okafor",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    bio: "Full-stack dev passionate about AI-driven SaaS. Looking for a business co-founder to handle growth.",
    skills: ["React", "Node.js", "Python"],
    role: "Developer",
  },
  {
    name: "Priya Sharma",
    username: "priya-sharma",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    bio: "Scaling B2B SaaS from 0 to 10k users. Need a developer to build the MVP with me.",
    skills: ["SEO", "Content Strategy", "Analytics"],
    role: "Marketer",
  },
  {
    name: "Marcus Liu",
    username: "marcus-liu",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    bio: "Backend engineer building scalable APIs. Looking for a product-minded co-founder.",
    skills: ["Go", "AWS", "Kubernetes"],
    role: "Developer",
  },
  {
    name: "Elena Vasquez",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    bio: "Serial entrepreneur in fintech. Looking for a CTO to build the next big payment platform.",
    skills: ["Fundraising", "Strategy", "Sales"],
    role: "Founder",
  },
  {
    name: "Aiko Tanaka",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    bio: "Product designer crafting beautiful SaaS dashboards. Looking for a dev partner to ship faster.",
    skills: ["Design Systems", "Figma", "No Code"],
    role: "Designer",
  },
];

const roles = ["All", "Founder", "Developer", "Marketer", "Designer"];

const ExploreBuilders = () => {
  const [search, setSearch] = useState("");
  const [activeRole, setActiveRole] = useState("All");

  const filtered = builders.filter((b) => {
    const matchesRole = activeRole === "All" || b.role === activeRole;
    const matchesSearch =
      !search ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
      b.role.toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Explore Builders
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover founders, developers, designers, and marketers ready to build the next big thing.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by skill or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          {/* Role Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {roles.map((role) => (
              <Button
                key={role}
                variant={activeRole === role ? "glow" : "outline"}
                size="sm"
                onClick={() => setActiveRole(role)}
              >
                {role}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((builder) => (
              <div
                key={builder.name}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarImage src={builder.photo} alt={builder.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {builder.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-display font-semibold text-foreground">{builder.name}</p>
                    <p className="text-xs text-primary/80">{builder.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {builder.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {builder.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline-glow" size="sm" className="w-full">
                  Visit Profile
                </Button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">No builders found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreBuilders;
