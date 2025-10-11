import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ArrowLeft, Play, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RobotPathPlanner = () => {
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
              <Bot className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Robot Path Planner</h1>
              <p className="text-muted-foreground">A* Algorithm</p>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Design and simulate robot movement in a 2D or 3D space using algorithms like A*, Dijkstra, or RRT.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Choose your environment map or upload your own</li>
                <li>Set the robot's start and end points</li>
                <li>Select a path planning algorithm</li>
                <li>Click "Plan Path" to visualize the result</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>What You Need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>WebGL-supported browser</li>
                <li>Optional: download .obj files for 3D simulation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Documentation & Tutorial</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Full user manual (PDF)</li>
                <li>Example projects included</li>
                <li>Setup video for custom maps</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 border-amber-500/50 bg-amber-500/5">
            <CardHeader>
              <CardTitle className="text-amber-600 dark:text-amber-400">Restrictions & Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>For simulation and educational research only</li>
                <li>Do not use for weaponized robotics or surveillance</li>
                <li>Comply with all local and international robotics safety laws</li>
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

export default RobotPathPlanner;
