import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring luxury properties.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link to="/listings">
            <Button variant="outline">
              <ArrowLeft className="h-5 w-5 mr-2" />
              View Listings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
