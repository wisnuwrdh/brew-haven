export default function CoffeeExperience() {
  return (
    <section
      id="menu"
      className="px-4 md:px-10 py-[80px] max-w-[1280px] mx-auto overflow-hidden"
    >
      <div className="relative rounded-2xl overflow-hidden h-[500px] md:h-[600px] flex items-center px-6 md:px-10">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80"
          alt="Specialty coffee yang disajikan dengan seni latte di Brew Haven"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-lg">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-semibold md:tracking-[-0.02em] mb-4">
            Specialty Coffee untuk Fokus Anda
          </h2>
          <p className="text-[18px] leading-[1.6] mb-8 opacity-90">
            Dipilih dari biji kopi terbaik dan diproses dengan presisi untuk
            memberikan dorongan energi yang jernih tanpa &lsquo;jitters&rsquo;.
          </p>
          <button className="bg-white text-[#271310] px-8 py-3 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:bg-[#e4e2dd] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2 focus:ring-offset-black">
            Lihat Menu
          </button>
        </div>
      </div>
    </section>
  );
}
