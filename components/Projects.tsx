"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <SectionHeading number="02" title="Projects" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08} className="h-full">
              <div className="group relative bg-card border border-line hover:border-accent/30 rounded-sm p-6 transition-colors duration-300 h-full flex flex-col">
                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-4 right-4 font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-sm tracking-wide">
                    [featured]
                  </span>
                )}

                {/* Project name */}
                <h3 className="font-mono text-sm font-semibold text-slate-100 group-hover:text-accent transition-colors duration-200 pr-20">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-slate-500 leading-relaxed mt-3 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-slate-600 bg-surface border border-line px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-line">
                  {/* TODO: swap placeholder GitHub URLs */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-slate-600 hover:text-accent transition-colors duration-200"
                  >
                    <Github size={13} strokeWidth={1.5} />
                    <span>source</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-slate-600 hover:text-accent transition-colors duration-200"
                    >
                      <ExternalLink size={13} strokeWidth={1.5} />
                      <span>live</span>
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
