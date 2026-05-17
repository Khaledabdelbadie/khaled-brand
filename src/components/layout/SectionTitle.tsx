interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl mb-16">
      {eyebrow && (
        <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-slate-400 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}