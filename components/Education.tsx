"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="06" title="Education" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {education.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 0.1} className="h-full">
              <div className="bg-card border border-line hover:border-accent/20 rounded-sm p-6 transition-colors duration-300 h-full">
                <div className="flex items-start gap-3">
                  <GraduationCap
                    size={15}
                    className="text-accent mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-slate-200">
                      {edu.degree}
                    </h3>
                    <p className="font-sans text-sm text-slate-500 mt-0.5 leading-snug">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-2 mt-3 font-mono text-xs text-slate-600">
                      <span>GPA {edu.gpa}</span>
                      <span className="text-line select-none">·</span>
                      <span>{edu.graduation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
