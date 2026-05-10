export default function Tag({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-sm border border-ink/20 font-body text-[14px] font-500 text-ink tracking-wide bg-paper hover:bg-ink hover:text-paper transition-all duration-200 cursor-default">
      {label}
    </span>
  );
}
