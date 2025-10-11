import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ArrowLeft, Download, Play, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NeuralNetworkVisualizer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tools
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-lg bg-primary/10 text-primary">
              <Brain className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Neural Network Visualizer</h1>
              <p className="text-muted-foreground">TensorFlow.js</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visualize how a neural network processes data. Customize the number of layers, nodes, and activation functions. Great for learning and debugging models.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Select the number of input, hidden, and output layers.</li>
                <li>Choose activation functions (e.g., ReLU, sigmoid).</li>
                <li>Upload sample data or use the default test set.</li>
                <li>Click "Run" to see the network activate in real time.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What You Need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modern web browser (Chrome, Firefox recommended)</li>
                <li>No installation required</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Documentation & Tutorial</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Step-by-step guide available in PDF</li>
                <li>Interactive demo video (5 minutes)</li>
                <li>Link to GitHub repo for developers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 border-amber-500/50 bg-amber-500/5">
            <CardHeader>
              <CardTitle className="text-amber-600 dark:text-amber-400">Restrictions & Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>For educational use only</li>
                <li>Do not use for deepfake generation, biometric tracking, or any unethical applications</li>
                <li>Respect user data privacy at all times</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              <Play className="h-4 w-4 mr-2" />
              Launch Tool
            </Button>
            <Button size="lg" variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              View Docs
            </Button>
          </div>
        </div>
      </div>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 MarVex. Empowering intelligent systems for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default NeuralNetworkVisualizer;
