import { Button } from "@/components/ui/button";
import { Brain, LogOut, BookOpen, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isTutorialsPage = location.pathname === "/tutorials";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
            {!isTutorialsPage && (
              <>
                <a 
                  href="#tools" 
                  onClick={(e) => handleSmoothScroll(e, 'tools')}
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  Tools
                </a>
                <a 
                  href="#learn" 
                  onClick={(e) => handleSmoothScroll(e, 'learn')}
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  Learn
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  About
                </a>
              </>
            )}
            
            {isTutorialsPage ? (
              <Button variant="outline" size="sm" onClick={() => navigate("/")}>
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={() => navigate("/tutorials")}>
                <BookOpen className="h-4 w-4" />
                Tutorials
              </Button>
            )}
            
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
