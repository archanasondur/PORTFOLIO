"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitMerge, ExternalLink } from "lucide-react";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="03" title="Open Source" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-card border border-line hover:border-accent/25 rounded-sm p-6 transition-colors duration-300 max-w-2xl">
            {/* Repo path + merged badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs text-slate-600">
                drogonframework/drogon
              </span>
              <span className="flex items-center gap-1 font-mono text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-sm tracking-wide">
                <GitMerge size={9} strokeWidth={2} />
                Merged ✓
              </span>
            </div>

            {/* Title */}
            <h3 className="font-mono text-sm font-semibold text-slate-100">
              Drogon C++ Web Framework
            </h3>

            {/* Description */}
            <p className="font-sans text-sm text-slate-500 leading-relaxed mt-3">
              Diagnosed a cross-platform build failure on Apple Silicon, patched
              5 cmake finder modules to support both Intel and ARM Homebrew paths
              transparently. Merged by lead maintainer — 34 CI checks passed.
            </p>

            {/* PR link */}
            <div className="mt-4 pt-4 border-t border-line">
              <a
                href="https://github.com/drogonframework/drogon/pull/2474"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-slate-600 hover:text-accent transition-colors duration-200 w-fit"
              >
                <ExternalLink size={12} strokeWidth={1.5} />
                <span>View PR #2474</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
