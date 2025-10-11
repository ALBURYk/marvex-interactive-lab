import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, ArrowLeft, Play, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComputerVisionStudio = () => {
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
              <Cpu className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Computer Vision Studio</h1>
              <p className="text-muted-foreground">MediaPipe + TensorFlow</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Upload images or live video to run object detection, image classification, or face recognition using pretrained models.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Choose a task (e.g., object detection, image labeling)</li>
                <li>Upload image or allow webcam access</li>
                <li>Select a model (YOLOv5, MobileNet, etc.)</li>
                <li>View results and download output if needed</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What You Need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Webcam (optional)</li>
                <li>Internet connection</li>
                <li>Browser with JavaScript enabled</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Documentation & Tutorial</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Usage instructions (PDF)</li>
                <li>Tutorials for training custom models</li>
                <li>Ethical guidelines for computer vision use</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 border-amber-500/50 bg-amber-500/5">
            <CardHeader>
              <CardTitle className="text-amber-600 dark:text-amber-400">Restrictions & Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Do not use for unauthorized face recognition</li>
                <li>Avoid real-time surveillance use</li>
                <li>Always disclose to users when collecting visual data</li>
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

export default ComputerVisionStudio;
