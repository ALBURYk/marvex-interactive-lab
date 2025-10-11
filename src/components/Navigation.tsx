import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg gradient-primary">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              MarVex
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
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
