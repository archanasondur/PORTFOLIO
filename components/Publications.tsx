"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="07" title="Publications" />
        </FadeIn>

        <div className="space-y-5 max-w-2xl">
          {publications.map((pub, i) => (
            <FadeIn key={pub.id} delay={i * 0.1}>
              <div className="flex gap-4">
                <span className="font-mono text-xs text-slate-700 mt-[3px] select-none shrink-0">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <div>
                  <p className="font-sans text-sm text-slate-300 leading-snug">
                    &ldquo;{pub.title}&rdquo;
                  </p>
                  <p className="font-mono text-xs text-slate-600 mt-1.5">
                    {pub.venue}
                    <span className="text-slate-700 mx-1.5">·</span>
                    {pub.date}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
