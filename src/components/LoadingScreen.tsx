import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

const messages = ["Hello", "Welcome", "MarVex BEST!!!", "Upd Coming!"];

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Rotate messages
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 800);

    // Start exit animation after 3 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    // Complete loading after exit animation
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3800);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-800 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Logo */}
      <div className="relative mb-8 animate-scale-in">
        <div className="absolute inset-0 animate-pulse">
          <div className="p-6 rounded-2xl bg-primary/20 blur-xl" />
        </div>
        <div className="relative p-6 rounded-2xl bg-primary shadow-[0_0_50px_hsl(var(--primary)/0.8)] animate-glow">
          <Brain className="h-20 w-20 text-primary-foreground animate-pulse" />
        </div>
      </div>

      {/* MarVex Text */}
      <h1 className="text-6xl font-bold mb-8 animate-fade-in">
        Mar<span className="text-primary drop-shadow-[0_0_25px_hsl(var(--primary))] animate-glow">Vex</span>
      </h1>

      {/* Loading Spinner */}
      <div className="flex gap-2 mb-8">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>

      {/* Rotating Messages */}
      <div className="text-xl font-medium text-muted-foreground min-h-[2rem] animate-fade-in">
        <span key={currentMessage} className="inline-block animate-scale-in">
          {messages[currentMessage]}
        </span>
      </div>
    </div>
  );
};
