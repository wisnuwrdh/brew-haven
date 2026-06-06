export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 md:pt-28 px-4 md:px-10 pb-[80px] max-w-[1280px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-8">
          <h1 className="text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1] font-semibold md:tracking-[-0.02em] text-[#271310] max-w-xl">
            Tempat Kerja, Belajar, dan Menikmati Kopi Terbaik, dalam Satu Ruang
          </h1>
          <p className="text-[18px] leading-[1.6] text-[#504442] max-w-lg">
            Brew Haven hadir untuk kamu yang butuh lebih dari sekadar kopi.
            Temukan ruang yang mendukung fokus, produktivitas, dan kenyamanan
            dalam satu kunjungan.
          </p>
          <p className="text-[16px] leading-[1.6] text-[#504442] max-w-lg">
            Bawa laptop, bawa tugas, atau datang untuk meeting. Di sini, kamu
            punya tempat yang siap mendukung semua itu, lengkap dengan specialty
            coffee yang menemani harimu.
          </p>
          <div className="pt-4">
            <button className="bg-[#271310] text-[#fbf9f4] px-8 py-4 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2">
              Kunjungi Brew Haven
            </button>
            <p className="mt-3 text-[12px] leading-[1.4] text-[#504442]">
              Tidak perlu daftar. Langsung datang dan rasakan sendiri.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl mt-8 md:mt-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
            alt="Suasana interior Brew Haven dengan meja kerja dan area kopi yang nyaman"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
