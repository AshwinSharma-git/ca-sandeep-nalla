export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-32">
      <div
        role="status"
        aria-label="Loading"
        className="w-10 h-10 rounded-full border-2 border-lime/30 border-t-lime animate-spin"
      />
    </div>
  );
}
