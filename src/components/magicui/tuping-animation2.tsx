"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  stopAt?: number; // Nueva propiedad para controlar cuánto retroceder
}

export function TypingAnimation2({
  text,
  duration = 250,
  className,
  stopAt = 2, // Por defecto retrocede un poco antes de llegar al inicio
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [isReversing, setIsReversing] = useState<boolean>(false);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (!isReversing) {
        // Avanzando
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          setI(i + 1);
        } else {
          // Alcanza el final, espera un momento y luego comienza a retroceder
          setTimeout(() => setIsReversing(true), duration);
        }
      } else {
        // Retrocediendo
        if (i > stopAt) {
          setDisplayedText(text.substring(0, i - 1));
          setI(i - 1);
        } else {
          // Pausa y luego comienza a avanzar
          setTimeout(() => setIsReversing(false), duration);
        }
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, isReversing, duration, text, stopAt]);

  return (
    <p
      className={cn(
        "text-4xl leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText}
    </p>
  );
}

export default TypingAnimation2;