"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({
  number = 20,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => ({
      position: 'absolute' as 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`, // 1px to 3px wide
      height: `${Math.random() * 60 + 40}px`, // 40px to 100px long
      backgroundColor: 'hsl(var(--primary))', // Use primary color
      borderRadius: '9999px',
      opacity: Math.random() * 0.5 + 0.3,
      transform: `rotate(${(Math.random() * 20 - 10) + 45}deg)`, // Slight angle variation around 45deg
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 5 + 5}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      {meteorStyles.map((style, idx) => (
        <motion.div
          key={"meteor" + idx}
          className="meteor-animation"
          style={style}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: '150vh', opacity: [0, typeof style.opacity === 'number' ? style.opacity : 0.5 , 0] }}
          transition={{
            repeat: Infinity,
            duration: parseFloat(style.animationDuration as string) || 7.5, // Default duration if parsing fails
            delay: parseFloat(style.animationDelay as string) || 0, // Default delay if parsing fails
            ease: "linear",
          }}
        />
      ))}
      <style jsx>{`
        .meteor-animation {
          /* Animation is handled by Framer Motion's animate prop */
        }
      `}</style>
    </div>
  );
};

export default Meteors;
