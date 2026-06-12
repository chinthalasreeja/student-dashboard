export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
              h-40
              rounded-2xl
              bg-white/5
              animate-pulse
            "
          />
        ))}
      </div>
    </main>
  );
}