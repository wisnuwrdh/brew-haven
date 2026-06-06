export default function FinalCTA() {
  return (
    <section className="bg-[#271310] py-[80px]">
      <div className="px-4 md:px-10 max-w-[1280px] mx-auto text-center text-white">
        <h2 className="text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-semibold md:tracking-[-0.02em] mb-4">
          Siap Menjadi Lebih Produktif?
        </h2>
        <p className="text-[18px] leading-[1.6] opacity-80 mb-[80px] max-w-2xl mx-auto">
          Bergabunglah dengan komunitas profesional yang memilih fokus tanpa
          kompromi. Kami menunggu kedatangan Anda.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-[#271310] px-10 py-4 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2 focus:ring-offset-[#271310]">
            Kunjungi Brew Haven
          </button>
          <button className="border border-white/30 text-white px-10 py-4 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2 focus:ring-offset-[#271310]">
            Reservasi Meja
          </button>
        </div>
      </div>
    </section>
  );
}
