import { Navigation } from "@/components/Navigation";
import { Brain, Bot, Cpu, Zap, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Tutorials = () => {
  const tutorials = [
    {
      title: "Neural Network Visualizer",
      icon: <Brain className="h-8 w-8 text-primary" />,
      technology: "TensorFlow.js",
      description: "Interactive visualization of neural network architectures and training processes in real-time.",
      positives: [
        "Real-time visualization helps understand how neural networks learn",
        "Interactive interface makes complex concepts accessible",
        "No installation required - runs directly in browser",
        "Great for educational purposes and demonstrations"
      ],
      negatives: [
        "Limited to 5 layers for optimal performance",
        "Requires WebGL support in browser",
        "Performance depends on device capabilities",
        "Not suitable for production-scale models"
      ],
      dos: [
        "Start with simple architectures (2-3 layers)",
        "Use smaller datasets for faster training visualization",
        "Experiment with different activation functions",
        "Observe how learning rate affects convergence"
      ],
      donts: [
        "Don't create networks with more than 5 layers",
        "Avoid using very large datasets in browser",
        "Don't expect production-level performance",
        "Don't use for training actual production models"
      ]
    },
    {
      title: "Robot Path Planner",
      icon: <Bot className="h-8 w-8 text-primary" />,
      technology: "A* Algorithm",
      description: "Simulate and optimize robot movement paths using advanced pathfinding algorithms.",
      positives: [
        "Visualizes optimal pathfinding in real-time",
        "Supports obstacle avoidance planning",
        "Interactive grid-based interface",
        "Educational tool for understanding A* algorithm"
      ],
      negatives: [
        "Grid size limited to 100x100 for performance",
        "2D pathfinding only (no 3D support)",
        "Simplified physics model",
        "May not reflect real-world robot constraints"
      ],
      dos: [
        "Start with small grid sizes to understand the algorithm",
        "Place obstacles strategically to test pathfinding",
        "Observe how heuristics affect path quality",
        "Experiment with different start and goal positions"
      ],
      donts: [
        "Don't exceed 100x100 grid size",
        "Avoid creating impossible maze configurations",
        "Don't expect real-time robot dynamics",
        "Don't use for actual robot navigation without adaptation"
      ]
    },
    {
      title: "Computer Vision Studio",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      technology: "MediaPipe + TensorFlow",
      description: "Train and test computer vision models directly in your browser with live camera feed.",
      positives: [
        "Live camera feed integration for real-time testing",
        "Pre-trained models available for quick start",
        "Browser-based - no complex setup required",
        "Great for prototyping vision applications"
      ],
      negatives: [
        "Camera access permission required",
        "Performance depends on lighting conditions",
        "Limited model customization",
        "Privacy concerns with camera access"
      ],
      dos: [
        "Ensure good lighting for best results",
        "Test with various backgrounds and conditions",
        "Use stable camera positioning",
        "Allow camera permissions when prompted"
      ],
      donts: [
        "Don't use in low-light environments",
        "Avoid cluttered backgrounds initially",
        "Don't expect perfect accuracy in all conditions",
        "Don't use sensitive or private content without consideration"
      ]
    },
    {
      title: "ML Model Playground",
      icon: <Zap className="h-8 w-8 text-primary" />,
      technology: "ONNX Runtime",
      description: "Experiment with pre-trained machine learning models for classification, regression, and more.",
      positives: [
        "Access to various pre-trained models",
        "Supports multiple ML tasks (classification, regression)",
        "Fast inference with ONNX Runtime",
        "Easy experimentation with different models"
      ],
      negatives: [
        "Model size limited to 50MB for web compatibility",
        "Cannot train custom models from scratch",
        "Limited to ONNX format models",
        "Browser memory constraints for large models"
      ],
      dos: [
        "Start with smaller pre-trained models",
        "Test with appropriate input data types",
        "Explore different model architectures",
        "Understand model input/output requirements"
      ],
      donts: [
        "Don't upload models larger than 50MB",
        "Avoid incompatible model formats",
        "Don't expect real-time training capabilities",
        "Don't use production data without validation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comprehensive Guides</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tutorials & Best Practices</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn how to make the most of our ML and Robotics tools with detailed guides, 
                tips, and best practices.
              </p>
            </div>

            {/* Tutorial Cards */}
            <div className="space-y-8">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        {tutorial.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{tutorial.title}</CardTitle>
                        <CardDescription className="text-base">
                          {tutorial.description}
                        </CardDescription>
                        <Badge variant="secondary" className="mt-2">
                          {tutorial.technology}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-6">
                    {/* Positives */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-green-600 dark:text-green-400">
                        <CheckCircle className="h-5 w-5" />
                        Strengths & Benefits
                      </h3>
                      <ul className="space-y-2">
                        {tutorial.positives.map((positive, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>{positive}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Negatives */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-orange-600 dark:text-orange-400">
                        <XCircle className="h-5 w-5" />
                        Limitations & Considerations
                      </h3>
                      <ul className="space-y-2">
                        {tutorial.negatives.map((negative, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-orange-600 dark:text-orange-400 mt-0.5">!</span>
                            <span>{negative}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Do's */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <CheckCircle className="h-5 w-5" />
                        Best Practices (Do's)
                      </h3>
                      <ul className="space-y-2">
                        {tutorial.dos.map((doItem, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-blue-600 dark:text-blue-400 mt-0.5">→</span>
                            <span>{doItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Don'ts */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-red-600 dark:text-red-400">
                        <XCircle className="h-5 w-5" />
                        Common Pitfalls (Don'ts)
                      </h3>
                      <ul className="space-y-2">
                        {tutorial.donts.map((dontItem, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-red-600 dark:text-red-400 mt-0.5">✗</span>
                            <span>{dontItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 MarVex. Empowering intelligent systems for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Tutorials;