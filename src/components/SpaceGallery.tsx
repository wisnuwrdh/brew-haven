export default function SpaceGallery() {
  return (
    <section className="px-4 md:px-10 py-[80px] max-w-[1280px] mx-auto">
      <h2 className="text-[32px] leading-[1.2] font-medium text-[#271310] mb-[80px] text-center">
        Jelajahi Ruang Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
        <div className="md:col-span-8 h-[300px] md:h-full rounded-xl overflow-hidden relative group">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="Ruang kerja utama Brew Haven dengan meja dan kursi ergonomis"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded text-[14px] leading-[1.4] tracking-[0.05em] font-semibold text-[#271310]">
            Main Workspace
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-6 h-auto md:h-full">
          <div className="h-[200px] md:h-1/2 rounded-xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&q=80"
              alt="Area diskusi Brew Haven dengan meja bundar dan kursi nyaman"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded text-[14px] leading-[1.4] tracking-[0.05em] font-semibold text-[#271310]">
              Discussion Zone
            </div>
          </div>
          <div className="h-[200px] md:h-1/2 rounded-xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Area lounge Brew Haven untuk bersantai dan membaca"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded text-[14px] leading-[1.4] tracking-[0.05em] font-semibold text-[#271310]">
              Lounge Area
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#271310] text-[#fbf9f4] px-8 py-4 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2">
          Kunjungi Brew Haven
        </button>
      </div>
    </section>
  );
}
