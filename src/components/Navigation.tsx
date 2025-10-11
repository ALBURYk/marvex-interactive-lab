import { Button } from "@/components/ui/button";
import { Brain, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="p-2 rounded-lg bg-primary shadow-[0_0_25px_hsl(var(--primary)/0.6)] animate-glow">
              <Brain className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Mar<span className="text-primary drop-shadow-[0_0_15px_hsl(var(--primary))] animate-glow">Vex</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#tools" className="text-foreground hover:text-primary transition-colors">
              Tools
            </a>
            <a href="#learn" className="text-foreground hover:text-primary transition-colors">
              Learn
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            {user ? (
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            ) : (
              <Button variant="hero" size="sm" onClick={() => navigate("/auth")}>
                Get Started
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
