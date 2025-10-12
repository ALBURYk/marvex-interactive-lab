import { Navigation } from "@/components/Navigation";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Bot, Zap, BookOpen, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      toast.info("You're already signed in! Start exploring our tools.");
    } else {
      navigate("/auth");
    }
  };

  const handleExploreTools = () => {
    const element = document.getElementById("tools");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleStartLearning = () => {
    const element = document.getElementById("learn");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const featuredTools = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive visualization of neural network architectures and training processes in real-time.",
      technology: "TensorFlow.js",
      restrictions: "Requires WebGL support. Maximum 5 layers for optimal performance.",
      icon: <Brain className="h-6 w-6" />,
      path: "/tools/neural-network",
    },
    {
      title: "Robot Path Planner",
      description: "Simulate and optimize robot movement paths using advanced pathfinding algorithms.",
      technology: "A* Algorithm",
      restrictions: "Grid size limited to 100x100 for performance reasons.",
      icon: <Bot className="h-6 w-6" />,
      path: "/tools/robot-path",
    },
    {
      title: "Computer Vision Studio",
      description: "Train and test computer vision models directly in your browser with live camera feed.",
      technology: "MediaPipe + TensorFlow",
      restrictions: "Camera access required. Works best with good lighting conditions.",
      icon: <Cpu className="h-6 w-6" />,
      path: "/tools/computer-vision",
    },
    {
      title: "ML Model Playground",
      description: "Experiment with pre-trained machine learning models for classification, regression, and more.",
      technology: "ONNX Runtime",
      restrictions: "Model size limited to 50MB for web compatibility.",
      icon: <Zap className="h-6 w-6" />,
      path: "/tools/ml-playground",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden isolate">
        <div 
          className="absolute inset-0 opacity-20 -z-10"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background -z-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-float">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Intelligent Systems Made Accessible
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              Welcome to{" "}
              <span className="text-primary animate-glow drop-shadow-[0_0_25px_hsl(var(--primary))]">
                MarVex
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore the future of Machine Learning and Robotics through interactive tools, 
              hands-on applications, and comprehensive educational resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)]"
                onClick={handleExploreTools}
                title="Try out our AI and robotics tools — fully interactive and ready to use"
              >
                <Cpu className="h-5 w-5" />
                Explore Tools
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg border-primary/50 hover:bg-primary/10"
                onClick={handleStartLearning}
                title="Access guides and tutorials to build your skills from beginner to advanced"
              >
                <BookOpen className="h-5 w-5" />
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section id="tools" className="py-20 bg-gradient-subtle scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful applications to help you understand and interact with intelligent systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {featuredTools.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                technology={tool.technology}
                restrictions={tool.restrictions}
                icon={tool.icon}
                onLearnMore={() => navigate(tool.path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="learn" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Learn & Grow</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive resources to master ML and Robotics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tutorials</h3>
                <p className="text-muted-foreground">
                  Step-by-step guides from basics to advanced concepts
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p className="text-muted-foreground">
                  Real-world applications to build and deploy
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Documentation</h3>
                <p className="text-muted-foreground">
                  Detailed references for all tools and technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-subtle scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About MarVex</h2>
            <p className="text-lg text-muted-foreground mb-4">
              MarVex is your gateway to understanding and creating intelligent systems. 
              We provide cutting-edge tools and comprehensive educational resources that make 
              Machine Learning and Robotics accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a beginner exploring AI for the first time or an experienced developer 
              building advanced applications, MarVex offers the tools and knowledge you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 MarVex. Empowering intelligent systems for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
