import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate pt-20">
      <div className="container-custom text-center">
        <AnimatedSection>
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl text-warm-white mb-4">Page Not Found</h2>
          <p className="text-warm-white/70 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <Button variant="hero" asChild>
            <Link to="/">
              <Home size={18} />
              Back to Home
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NotFound;
