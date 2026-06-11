export default function CourseSkeleton() {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-white/5 animate-pulse">
      <div className="h-4 w-1/2 bg-white/10 rounded" />
      <div className="h-3 w-1/3 bg-white/10 rounded mt-3" />
      <div className="h-2 w-full bg-white/10 rounded mt-4" />
    </div>
  );
}