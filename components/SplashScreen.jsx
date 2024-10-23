import { useEffect, useState } from "react";
import LottieAnimations from "@/components/LottieAnimations"; // Replace with your splash animation
import splashAnimation from "@/public/animation/splashAnimation.json"; // Replace with your animation file

export default function SplashScreen({ onFinish }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      onFinish();
    }, 3000); // Splash screen duration in milliseconds (e.g., 3 seconds)

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <LottieAnimations animationData={splashAnimation} />
    </div>
  );
}
