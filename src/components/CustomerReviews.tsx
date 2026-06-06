import ReviewCard from "./ReviewCard";

export default function CustomerReviews() {
  return (
    <section id="reviews" className="bg-[#f5f3ee] py-[80px]">
      <div className="px-4 md:px-10 max-w-[1280px] mx-auto">
        <h2 className="text-[32px] leading-[1.2] font-medium text-[#271310] mb-[80px] text-center">
          Apa Kata Mereka?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#271310] text-[#fbf9f4] px-8 py-4 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2">
            Kunjungi Brew Haven
          </button>
        </div>
      </div>
    </section>
  );
}
