export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "kernelguard",
    name: "KernelGuard",
    description:
      "eBPF-based Linux runtime security monitor that intercepts syscalls via kernel tracepoints and streams structured events to a C++ userspace daemon. Designed for AI agent runtime monitoring.",
    tags: ["C++", "eBPF", "libbpf", "Linux", "YAML", "CO-RE"],
    // TODO: replace with actual GitHub URL
    github: "https://github.com/archanasondur/kernelguard",
    featured: true,
  },
  {
    id: "ebpf-ai-agent",
    name: "eBPF AI Agent",
    description:
      "Agentic tool in Rust that takes a natural language tracing goal, generates eBPF C programs via the Claude API, compiles and loads them via libbpf-rs, and autonomously iterates on compile errors.",
    tags: ["Rust", "tokio", "eBPF", "libbpf-rs", "Anthropic API"],
    // TODO: replace with actual GitHub URL
    github: "https://github.com/archanasondur/ebpf-ai-agent",
    featured: true,
  },
  {
    id: "inbox-matrix",
    name: "Inbox Matrix",
    description:
      "AI email triage dashboard integrating Gmail API with async Redis job queue, LLaMA 3.1 classification, and feedback-driven scikit-learn layer. Deployed on Google Cloud Run.",
    tags: ["Python", "Flask", "Redis", "LLaMA 3.1", "OAuth 2.0", "Docker", "GCP"],
    // TODO: replace with actual GitHub URL
    github: "https://github.com/archanasondur/inbox-matrix",
    // TODO: replace with actual live URL
    live: "https://inbox-matrix.example.com",
    featured: false,
  },
  {
    id: "breakpoint",
    name: "BreakPoint",
    description:
      "Failure-driven system design learning platform where users diagnose live production incidents through animated distributed system diagrams covering DB exhaustion, thundering herd, and CAP theorem.",
    tags: ["React", "TypeScript", "React Flow", "Framer Motion", "Vercel"],
    // TODO: replace with actual GitHub URL
    github: "https://github.com/archanasondur/breakpoint",
    live: "https://break-point-two.vercel.app",
    featured: false,
  },
];
