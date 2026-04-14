"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    Icon: Mail,
    label: "sondur@usc.edu",
    href: "mailto:sondur@usc.edu",
    external: false,
  },
  {
    Icon: Github,
    label: "github.com/archanasondur",
    href: "https://github.com/archanasondur",
    external: true,
  },
  {
    Icon: Linkedin,
    label: "linkedin.com/in/archana-sondur",
    href: "https://linkedin.com/in/archana-sondur-a2646a191",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading block */}
        <FadeIn>
          <div className="max-w-md">
            <p className="font-mono text-accent text-xs tracking-[0.2em] uppercase mb-4 opacity-60">
              {"// 08. contact"}
            </p>
            <h2 className="text-3xl font-semibold text-slate-100 tracking-tight leading-tight">
              Let&apos;s build
              <br />
              something.
            </h2>
            <p className="font-sans text-sm text-slate-500 mt-4 leading-relaxed">
              Open to backend SWE, platform engineering, and security tooling
              roles. Graduating May 2026.
            </p>

            {/* Open-to-work badge */}
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              Open to work
            </div>
          </div>
        </FadeIn>

        {/* Links */}
        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            {contactLinks.map(({ Icon, label, href, external }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 group w-fit"
              >
                <Icon
                  size={14}
                  className="text-slate-600 group-hover:text-accent transition-colors duration-200 shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-mono text-sm text-slate-500 group-hover:text-accent transition-colors duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Footer bar */}
        <FadeIn delay={0.3}>
          <div className="mt-20 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="font-mono text-xs text-slate-700">
              archana@portfolio:~$ exit
            </span>
            <span className="font-mono text-xs text-slate-700">
              © 2026 Archana Sondur
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
