"use client";

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import React from "react";
import { cn } from "../../lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // Retraso predeterminado de 0.05 segundos entre cada letra
      },
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("animate");
          }
        });
      },
      { threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div ref={targetRef} className="flex justify-center flex-wrap">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={controls}
          custom={i}
          className={cn(
            "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]",
            className,
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </motion.div>
  );
}

export default LetterPullup;
