export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-ink/5 text-muted">
      {label}
    </span>
  );
}
