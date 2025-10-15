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
    }, 1200);

    // Start exit animation after 5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 5000);

    // Complete loading after exit animation
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 6200);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1200 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
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

      {/* MarVex Text with Animation */}
      <h1 className="text-6xl font-bold mb-8">
        <span className="inline-block animate-fade-in" style={{ animationDelay: "0ms", animationDuration: "1s" }}>
          Mar
        </span>
        <span className="inline-block text-primary drop-shadow-[0_0_25px_hsl(var(--primary))] animate-glow animate-scale-in" style={{ animationDelay: "300ms", animationDuration: "1.2s" }}>
          Vex
        </span>
      </h1>

      {/* Loading Spinner */}
      <div className="flex gap-2 mb-8">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1s" }} />
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "200ms", animationDuration: "1s" }} />
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "400ms", animationDuration: "1s" }} />
      </div>

      {/* Rotating Messages */}
      <div className="text-xl font-medium text-muted-foreground min-h-[2rem]">
        <span key={currentMessage} className="inline-block animate-scale-in" style={{ animationDuration: "0.8s" }}>
          {messages[currentMessage]}
        </span>
      </div>
    </div>
  );
};
