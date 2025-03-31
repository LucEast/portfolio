"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

  const texts = [
    "I orchestrate containers like a symphony – Kubernetes is my baton.",
    "Terraformed infrastructure? Yep, I’ve got code for that.",
    "Security isn't a feature, it’s a mindset.",
    "IaC is my art – YAML, my brush.",
    "GitOps isn’t buzz – it’s how I ship confidently.",
    "I turn manual chaos into automated calm.",
    "Need a cluster? I’ll spin you one before coffee’s done.",
    "Logs, metrics, traces – I see it all. 🔍",
    "Infrastructure should be repeatable, like great coffee.",
    "Zero-trust, full control – that’s how I roll.",
    "If it’s not versioned, it doesn’t exist.",
    "I speak fluent YAML, bash, and occasionally... coffee ☕️",
    "My favorite state is declarative.",
    "Security by design, not by patch.",
    "RKE2, ArgoCD, Helm – just another Tuesday.",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, baseText.get().length, {
      type: "tween",
      delay: delay,
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="h-32 max-w-96 bg-lightPrimary text-[1.2rem] font-bold dark:bg-darkPrimary md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  );
}
