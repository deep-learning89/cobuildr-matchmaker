// import { Button } from "@/components/ui/button";
// // import { Rocket } from "lucide-react";
// import { Rocket, Menu } from "lucide-react";
// // import { NavLink } from "@/components/NavLink";
// import { NavLink } from "@/components/NavLink";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <div className="flex items-center gap-2">
//           <Rocket className="h-5 w-5 text-primary" />
//           <span className="text-lg font-display font-bold tracking-tight">Cobuildr</span>
//         </div>
//         <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
//               <NavLink to="/how-it-works" className="hover:text-foreground transition-colors">How it works</NavLink>
//               <NavLink to="/explore" className="hover:text-foreground transition-colors">Explore Builders</NavLink>
//               <NavLink to="#" className="hover:text-foreground transition-colors">Pricing</NavLink>
//         </div>
//         <Button variant="glow" size="sm">
//           Find Your Match
//         </Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, LogOut, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="text-lg font-display font-bold tracking-tight">Cobuildr</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/how-it-works" className="hover:text-foreground transition-colors">How it works</NavLink>
          <NavLink to="/explore" className="hover:text-foreground transition-colors">Explore Builders</NavLink>
          <NavLink to="#" className="hover:text-foreground transition-colors">Pricing</NavLink>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="max-w-[120px] truncate">{user.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button variant="glow" size="sm" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="flex md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/how-it-works">How it works</NavLink>
              <NavLink to="/explore">Explore Builders</NavLink>
              <NavLink to="#">Pricing</NavLink>
              
              <div className="border-t border-border pt-6 mt-2">
                {user ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                    <Button variant="outline" className="w-full" onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" asChild>
                      <Link to="/login">Sign In</Link>
                    </Button>
                    <Button variant="glow" asChild>
                      <Link to="/signup">Get Started</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
