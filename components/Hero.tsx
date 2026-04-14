"use client";

import { useTypewriter } from "@/lib/useTypewriter";
import { MapPin } from "lucide-react";

const roles = ["Backend Engineer", "Systems Programmer", "Platform Engineer"];

export default function Hero() {
  const displayText = useTypewriter({ words: roles });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-canvas overflow-hidden"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial vignette — darkens edges, focuses center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 25%, #0a0a0f 100%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-32">
        {/* Pre-label */}
        <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-6 opacity-60">
          {"// hello, world"}
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-50 tracking-tight leading-[1.05]">
          Archana
          <br />
          Sondur
        </h1>

        {/* Nickname */}
        <p className="font-mono text-slate-600 text-sm mt-3 tracking-wider">
          &lt;ace /&gt;
        </p>

        {/* Typewriter role line */}
        <div className="mt-10 flex items-center gap-2.5 font-mono text-xl sm:text-2xl text-slate-300">
          <span className="text-accent select-none">$</span>
          <span>{displayText}</span>
          <span className="text-accent animate-blink select-none">█</span>
        </div>

        {/* Subtitle */}
        <p className="mt-6 font-sans text-slate-500 text-sm max-w-sm leading-relaxed">
          MS CS · USC · May 2026 — building backend systems
          and infrastructure tooling that operates at the speed
          of the kernel.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-mono text-sm bg-accent text-canvas px-6 py-2.5 rounded-sm hover:bg-accent/90 transition-colors duration-200 inline-flex items-center gap-2"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm border border-line hover:border-accent/40 text-slate-400 hover:text-slate-200 px-6 py-2.5 rounded-sm transition-colors duration-200"
          >
            Get in touch →
          </a>
        </div>

        {/* Location badge */}
        <div className="mt-10 flex items-center gap-1.5 font-mono text-xs text-slate-700">
          <MapPin size={11} className="shrink-0" />
          <span>Los Angeles, CA → Open to SF</span>
        </div>
      </div>
    </section>
  );
}
