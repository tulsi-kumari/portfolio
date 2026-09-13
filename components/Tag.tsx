export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center text-[11px] font-medium text-muted font-mono uppercase tracking-wider">
      {label}
    </span>
  );
}
