"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="05" title="Experience" />
        </FadeIn>

        {/* Timeline container */}
        <div className="relative pl-6">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-line" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.12}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-[5px] w-2 h-2 rounded-full bg-accent ring-4 ring-surface" />

                  {/* Content */}
                  <div>
                    {/* Role + date */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-mono text-sm font-semibold text-slate-200">
                        {exp.role}
                        <span className="text-accent"> — {exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-slate-600 shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Location + stack */}
                    <div className="flex flex-wrap items-center gap-x-2 mt-1">
                      <span className="font-mono text-xs text-slate-600">
                        {exp.location}
                      </span>
                      {exp.stack && (
                        <>
                          <span className="text-line font-mono text-xs select-none">
                            ·
                          </span>
                          <span className="font-mono text-xs text-slate-700">
                            {exp.stack.join(" · ")}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Bullets */}
                    <ul className="mt-3 space-y-2">
                      {exp.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2.5 font-sans text-sm text-slate-500 leading-relaxed"
                        >
                          <span className="text-accent select-none shrink-0 mt-0.5">
                            ›
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
