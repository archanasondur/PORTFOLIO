"use client";

import { Cpu, Server, Code2, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Server,
  Code2,
  Brain,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="04" title="Skills" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.iconName];
            return (
              <FadeIn key={group.id} delay={i * 0.08} className="h-full">
                <div className="bg-card border border-line hover:border-accent/20 rounded-sm p-6 transition-colors duration-300 h-full">
                  {/* Card header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <Icon
                      size={14}
                      className="text-accent shrink-0"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-mono text-xs font-semibold text-slate-300 tracking-wide uppercase">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] text-slate-600 bg-surface border border-line px-2 py-0.5 rounded-sm hover:text-slate-300 hover:border-slate-700 transition-colors duration-150 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
