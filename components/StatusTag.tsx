const STYLES: Record<string, string> = {
  shipped: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "in-progress": "bg-amber-50 text-amber-700 border-amber-200",
  note: "bg-slate-100 text-slate-600 border-slate-200",
};

const LABELS: Record<string, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  note: "Note",
};

export default function StatusTag({ status }: { status?: string }) {
  if (!status || !STYLES[status]) return null;
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  );
}
