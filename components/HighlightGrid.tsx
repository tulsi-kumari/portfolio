export default function HighlightGrid() {
  const highlights = [
    {
      metric: "95%",
      title: "ORM & Batching Latency Cut",
      context: "Reduced 45+ min workflows to ~2 min at Texas Instruments via JDBC batching, Persistable<T>, and correlated SQL updates.",
      tag: "Performance",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      metric: "10k+",
      title: "11-State Modular Monolith",
      context: "Architected queue-less lifecycle orchestrator automating sales workflows across 10k+ participants, saving ~$120K/yr.",
      tag: "Architecture",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      metric: "Raft",
      title: "Distributed Consensus in Go",
      context: "From-scratch implementation of Raft consensus protocol: randomized leader election, heartbeat timing, and state replication.",
      tag: "Distributed Systems",
      color: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      metric: "~30s",
      title: "Metadata Knowledge Graph",
      context: "Indexed 65,000+ enterprise objects with PostgreSQL GIN reverse search, slashing dependency analysis from 3 months.",
      tag: "Graph & DB",
      color: "text-purple-700 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted">
          Key Systems &amp; Impact
        </h2>
        <span className="text-xs text-muted/60 font-mono">production &amp; self-study</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="p-4 rounded-xl border border-line bg-ink/[0.015] hover:bg-ink/[0.035] hover:border-ink/20 transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-lg font-extrabold tracking-tight text-ink font-mono">
                {h.metric}
              </span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${h.color}`}>
                {h.tag}
              </span>
            </div>
            <h3 className="text-xs font-bold text-ink mb-1">{h.title}</h3>
            <p className="text-xs text-ink/70 leading-relaxed">{h.context}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
