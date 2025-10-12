import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, ArrowLeft, Download, Play, BookOpen, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const NeuralNetworkVisualizer = () => {
  const navigate = useNavigate();
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
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
                Visualize how a neural network processes data. Customize the number of layers, nodes, and activation
                functions. Great for learning and debugging models.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li className="text-base">Select the number of input, hidden, and output layers</li>
                <li className="text-base">Choose activation functions (e.g., ReLU, sigmoid)</li>
                <li className="text-base">Upload sample data or use the default test set</li>
                <li className="text-base">Click "Run" to see the network activate in real time</li>
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
              <ul className="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
                <li className="text-base">Step-by-step guide available in PDF</li>
                <li className="text-base">Interactive demo video (5 minutes)</li>
                <li className="text-base">Link to GitHub repo for developers</li>
                <li className="text-base font-medium text-foreground">
                  When you launch the tool, you'll need to provide your app link to get started
                </li>
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

          <Card className={`mb-6 ${!agreedToTerms ? 'opacity-50' : ''}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {!agreedToTerms && <Lock className="h-5 w-5" />}
                Download Tool Package
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {agreedToTerms 
                  ? "Choose your platform to download the Neural Network Visualizer tool package."
                  : "Accept the terms and restrictions above to unlock downloads."}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={!agreedToTerms}
                  onClick={() => {
                    toast.success("Downloading Windows package...");
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Windows
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={!agreedToTerms}
                  onClick={() => {
                    toast.success("Downloading macOS package...");
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  macOS
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={!agreedToTerms}
                  onClick={() => {
                    toast.success("Downloading Linux package...");
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Linux
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="flex-1"
              disabled={!agreedToTerms}
              onClick={() => {
                if (agreedToTerms) {
                  window.alert("Tool launching... Please provide your MarVex app link when prompted.");
                }
              }}
            >
              <Play className="h-4 w-4 mr-2" />
              Launch Tool
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://github.com/ALBURYk/neural-network-docs", "_blank")}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              View Docs
            </Button>
          </div>

          {!agreedToTerms && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="agree-terms" 
                  checked={hasAgreed}
                  onCheckedChange={(checked) => setHasAgreed(checked as boolean)}
                />
                <label 
                  htmlFor="agree-terms" 
                  className="text-sm cursor-pointer leading-relaxed"
                >
                  I have read and agree to the restrictions and rules outlined above. I understand this tool is for educational use only.
                </label>
              </div>
              <Button 
                className="w-full mt-4" 
                disabled={!hasAgreed}
                onClick={() => {
                  setAgreedToTerms(true);
                  setShowTermsDialog(true);
                }}
              >
                I Agree - Unlock Launch Tool
              </Button>
            </div>
          )}

          <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Terms Accepted</DialogTitle>
                <DialogDescription>
                  You can now launch the Neural Network Visualizer tool and download packages. The Launch Tool button is now enabled.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={() => setShowTermsDialog(false)}>Got it</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
