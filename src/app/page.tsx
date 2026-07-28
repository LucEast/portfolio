"use client";

import { useEffect } from "react";
import About from "@/common/components/sections/about";
import Contact from "@/common/components/sections/contact";
import Experience from "@/common/components/sections/experience";
import Hero from "@/common/components/sections/hero";
import ProofBar from "@/common/components/sections/proof-bar";
import Projects from "@/common/components/sections/projects";
import Skills from "@/common/components/sections/skills";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash || hash === "home") return;

    const timeout = setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <ProofBar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
