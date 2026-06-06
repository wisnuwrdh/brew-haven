export default function Location() {
  return (
    <section
      id="location"
      className="px-4 md:px-10 py-[80px] max-w-[1280px] mx-auto"
    >
      <h2 className="text-[32px] leading-[1.2] font-medium text-[#271310] mb-[80px]">
        Temukan Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-[#fbf9f4] rounded-xl border border-[#d3c3c0] h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#271310"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className="text-[24px] leading-[1.3] font-medium text-[#271310]">
                Alamat
              </h3>
            </div>
            <p className="text-[18px] leading-[1.6] text-[#504442] mb-8">
              Information Not Available
            </p>

            <div className="flex items-center gap-4 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#271310"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h3 className="text-[24px] leading-[1.3] font-medium text-[#271310]">
                Jam Operasional
              </h3>
            </div>
            <p className="text-[18px] leading-[1.6] text-[#504442]">
              Information Not Available
            </p>
          </div>

          <button className="mt-8 border-2 border-[#271310] text-[#271310] px-8 py-3 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:bg-[#271310] hover:text-white transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#e3beb8]">
            Dapatkan Arah
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden bg-[#f0eee9] h-[200px] md:h-[250px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80"
              alt="Eksterior Brew Haven"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative h-[200px] md:h-[250px] bg-[#f0eee9]">
            <div className="absolute inset-0 bg-[#d5e4ce]/20 flex flex-col items-center justify-center gap-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#546251"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-[16px] leading-[1.6] text-[#504442]">
                Peta akan tersedia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
