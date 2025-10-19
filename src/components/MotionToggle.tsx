import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

const MotionToggle = () => {
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    // Check user's motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setMotionEnabled(false);
      document.body.classList.add("no-motion");
    }
  }, []);

  const toggleMotion = () => {
    const newState = !motionEnabled;
    setMotionEnabled(newState);
    
    if (newState) {
      document.body.classList.remove("no-motion");
      document.body.classList.remove("no-parallax");
    } else {
      document.body.classList.add("no-motion");
      document.body.classList.add("no-parallax");
    }
  };

  return (
    <Button
      onClick={toggleMotion}
      size="icon"
      variant="outline"
      className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 shadow-lg bg-card hover:bg-accent transition-all"
      aria-label={motionEnabled ? "Disable animations" : "Enable animations"}
      title={motionEnabled ? "Reduce Motion" : "Enable Motion"}
    >
      {motionEnabled ? (
        <Pause className="h-5 w-5" />
      ) : (
        <Play className="h-5 w-5" />
      )}
    </Button>
  );
};

export default MotionToggle;
