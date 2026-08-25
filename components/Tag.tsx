export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-md bg-ink/[0.04] border border-line text-ink/75 hover:bg-ink/[0.08] transition-colors">
      #{label}
    </span>
  );
}
