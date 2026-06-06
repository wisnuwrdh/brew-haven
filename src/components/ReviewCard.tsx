export default function ReviewCard() {
  return (
    <div className="p-8 bg-[#fbf9f4] rounded-xl border border-[#d3c3c0]">
      <div className="flex gap-1 text-[#ae8d87] mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-[16px] leading-[1.6] italic text-[#1b1c19] mb-8">
        &ldquo;Information Not Available&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#e4e2dd] flex items-center justify-center font-bold text-[#271310] text-sm">
          ?
        </div>
        <div className="text-[14px] leading-[1.4] tracking-[0.05em] font-semibold text-[#504442]">
          Information Not Available
        </div>
      </div>
    </div>
  );
}
