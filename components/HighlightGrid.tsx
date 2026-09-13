export default function HighlightGrid() {
  const highlights = [
    {
      metric: "95%",
      title: "ORM & Batching Latency Cut",
      context: "Reduced 45+ min workflows to ~2 min at Texas Instruments via JDBC batching, Persistable<T>, and correlated SQL updates.",
      tag: "Performance",
    },
    {
      metric: "10K+",
      title: "11-State Modular Monolith",
      context: "Architected queue-less lifecycle orchestrator automating sales workflows across 10,000+ participants, saving ~$120K/yr.",
      tag: "Production / Architecture",
    },
    {
      metric: "Raft",
      title: "Distributed Consensus in Go",
      context: "From-scratch Raft implementation in Go, currently focused on leader election, randomized election timeouts, heartbeats, and the path toward log replication.",
      tag: "Distributed Systems",
    },
    {
      metric: "~30s",
      title: "Metadata Knowledge Graph",
      context: "Indexed 16,000+ artifacts and 30,000+ dependency edges with PostgreSQL GIN reverse search, slashing dependency analysis from months to seconds.",
      tag: "Graph & DB",
    },
  ];

  return (
    <div className="mb-14">
      <div className="flex items-center justify-between gap-2 mb-6 pb-2 border-b border-line">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted">
          Selected Work & Impact
        </h2>
      </div>

      <div className="flex flex-col">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className={`py-5 ${i !== highlights.length - 1 ? "border-b border-line" : ""}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
              <span className="text-lg font-bold tracking-tight text-ink font-mono shrink-0 sm:w-20">
                {h.metric}
              </span>
              <div className="flex items-center gap-3">
                <h3 className="text-base font-semibold text-ink">{h.title}</h3>
                <span className="hidden sm:inline-block text-muted/50">&middot;</span>
                <span className="text-xs font-medium text-muted">{h.tag}</span>
              </div>
            </div>
            <p className="text-[15px] text-ink/85 leading-relaxed sm:ml-[6rem]">
              {h.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
