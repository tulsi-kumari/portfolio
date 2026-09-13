const LABELS: Record<string, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  note: "Note",
};

export default function StatusTag({ status }: { status?: string }) {
  if (!status || !LABELS[status]) return null;
  return (
    <>
      <span className="text-line">&middot;</span>
      <span className="uppercase tracking-wider font-mono text-[11px] font-medium">
        {LABELS[status]}
      </span>
    </>
  );
}
