"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface SlightFlipProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function FlipText2({
  word,
  duration = 0.8,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: SlightFlipProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento es visible en el 10% de la ventana
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setInView(true); // Establece enView a true cuando entra en vista
        }
      },
      {
        threshold: 0.1, // 10% de visibilidad
      }
    );

    // Observar el contenedor del texto
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Limpieza del observer cuando el componente se desmonta
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex space-x-1" ref={ref}>
      <AnimatePresence mode="wait">
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Cambia la animación si está en vista
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("", className)}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FlipText2;