"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="01" title="About" />
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* TODO: edit bio text here */}
          <p className="font-sans text-slate-400 text-base leading-relaxed max-w-2xl">
            I&apos;m an MS CS student at USC graduating May 2026, focused on
            backend systems and infrastructure engineering. I build things close
            to the metal — eBPF-based security monitors, async job queues, C++
            web frameworks. I&apos;m looking for roles in backend SWE, platform
            engineering, or security tooling where I can work on systems that
            actually matter.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
