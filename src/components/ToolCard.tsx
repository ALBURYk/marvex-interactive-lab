import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, AlertCircle } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  technology: string;
  restrictions?: string;
  icon?: React.ReactNode;
  onLearnMore?: () => void;
}

export const ToolCard = ({
  title,
  description,
  technology,
  restrictions,
  icon,
  onLearnMore,
}: ToolCardProps) => {
  return (
    <Card className="group border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon || <Brain className="h-6 w-6" />}
          </div>
          <Badge variant="secondary" className="font-mono text-xs">
            {technology}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        {restrictions && (
          <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
            <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{restrictions}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="relative">
        <Button 
          variant="default" 
          className="w-full"
          onClick={onLearnMore}
        >
          Explore Tool
        </Button>
      </CardFooter>
    </Card>
  );
};
