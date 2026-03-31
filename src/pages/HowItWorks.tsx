import Navbar from "@/components/Navbar";
import { HowItWorks } from "@/components/ui/how-it-works";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <HowItWorks />
      </div>
    </div>
  );
};

export default HowItWorksPage;
