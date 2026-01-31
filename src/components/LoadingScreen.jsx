import { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.to(logoRef.current, {
      opacity: 0.2,
      scale: 0.9,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      id="loader"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
      <div className="relative flex items-center justify-center w-40 h-40">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#1f1f1f"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            id="progress-circle"
            cx="80"
            cy="80"
            r="70"
            stroke="white"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="440"
            strokeDashoffset="440"
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
        </svg>

        <div className="w-16 h-16 flex items-center justify-center">
          <img
            ref={logoRef}
            src="/logo.svg"
            alt="Apple"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
