import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowLeft, Play, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MLModelPlayground = () => {
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
              <Zap className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">ML Model Playground</h1>
              <p className="text-muted-foreground">ONNX Runtime</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Train, test, and tweak machine learning models in your browser with live code blocks and visualization tools.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li className="text-base">Select a dataset or upload your own (CSV format)</li>
                <li className="text-base">Choose model type (e.g., regression, classification)</li>
                <li className="text-base">Adjust hyperparameters and run training</li>
                <li className="text-base">View accuracy, loss graphs, and confusion matrix</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What You Need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>No installation needed</li>
                <li>Recommended: modern browser and a stable internet connection</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Documentation & Tutorial</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li className="text-base">Quickstart PDF</li>
                <li className="text-base">Sample datasets provided</li>
                <li className="text-base">Link to GitHub and code examples</li>
                <li className="text-base font-medium text-foreground">When you launch the tool, you'll need to provide your app link to get started</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 border-amber-500/50 bg-amber-500/5">
            <CardHeader>
              <CardTitle className="text-amber-600 dark:text-amber-400">Restrictions & Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Do not use for biased or harmful decision-making systems</li>
                <li>Data must be anonymized and used ethically</li>
                <li>Comply with GDPR or other data privacy laws</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              <Play className="h-4 w-4 mr-2" />
              Launch Tool
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://github.com/marvex-ai/ml-playground-docs', '_blank')}
            >
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

export default MLModelPlayground;
