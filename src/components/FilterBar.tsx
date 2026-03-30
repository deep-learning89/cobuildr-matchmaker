import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filters = [
  {
    label: "Your Role",
    placeholder: "Select role",
    options: ["Technical Co-founder", "Business Co-founder", "Product Lead", "Growth Hacker", "Designer", "Full-Stack Developer"],
  },
  {
    label: "Looking For",
    placeholder: "What you need",
    options: ["Co-founder", "CTO", "CMO", "Lead Developer", "Designer", "Marketing Lead"],
  },
  {
    label: "Workstyle",
    placeholder: "How you work",
    options: ["Remote Only", "Hybrid", "In-Person", "Async-First", "Flexible"],
  },
  {
    label: "Time Zone",
    placeholder: "Your timezone",
    options: ["UTC-8 (PST)", "UTC-5 (EST)", "UTC+0 (GMT)", "UTC+1 (CET)", "UTC+5:30 (IST)", "UTC+8 (SGT)", "UTC+9 (JST)"],
  },
  {
    label: "Commitment",
    placeholder: "Your level",
    options: ["Full-time", "Part-time", "Weekends Only", "Evenings", "Flexible Hours"],
  },
];

const FilterBar = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="filter-card rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filters.map((filter) => (
            <div key={filter.label} className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {filter.label}
              </label>
              <Select>
                <SelectTrigger className="bg-secondary border-border hover:border-primary/30 transition-colors">
                  <SelectValue placeholder={filter.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
