"use client";

import { useEffect, useState } from "react";
import React from "react";
import { cn } from "../../lib/utils";

interface MeteorsProps {
  number?: number;
}

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const container = document.querySelector(".meteors-container");
    const containerWidth = container?.clientWidth || window.innerWidth;
    const containerHeight = container?.clientHeight || window.innerHeight;

    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * containerHeight) + "px",
      left: Math.floor(Math.random() * containerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="meteors-container pointer-events-none absolute inset-0 -z-10 bg-black">
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
          )}
          style={style}
        >
          <div className="absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
