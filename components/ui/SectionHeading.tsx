interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-accent text-sm select-none">{number}.</span>
      <h2 className="text-2xl font-semibold text-slate-100 tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-line ml-2" />
    </div>
  );
}
