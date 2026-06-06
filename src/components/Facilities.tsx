interface FacilityCardProps {
  icon: string;
  title: string;
  description: string;
}

function FacilityCard({ icon, title, description }: FacilityCardProps) {
  return (
    <div className="p-8 bg-[#fbf9f4] border border-[#d3c3c0] rounded-xl ambient-shadow flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-[#d5e4ce] flex items-center justify-center text-[#596655] mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon === "wifi" && (
            <>
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <circle cx="12" cy="20" r="1" />
            </>
          )}
          {icon === "power" && (
            <>
              <path d="M12 2v6" />
              <path d="M17.2 5.8a8 8 0 1 1-10.4 0" />
              <path d="M12 18v-4" />
            </>
          )}
          {icon === "chair" && (
            <>
              <path d="M4 16V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8" />
              <path d="M4 16h16" />
              <path d="M8 20v-4" />
              <path d="M16 20v-4" />
            </>
          )}
          {icon === "focus" && (
            <>
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2" />
              <path d="M12 21v2" />
              <path d="M4.22 4.22l1.42 1.42" />
              <path d="M18.36 18.36l1.42 1.42" />
              <path d="M1 12h2" />
              <path d="M21 12h2" />
              <path d="M4.22 19.78l1.42-1.42" />
              <path d="M18.36 5.64l1.42-1.42" />
            </>
          )}
        </svg>
      </div>
      <h3 className="text-[24px] leading-[1.3] font-medium text-[#271310] mb-2">
        {title}
      </h3>
      <p className="text-[16px] leading-[1.6] text-[#504442]">{description}</p>
    </div>
  );
}

const facilities = [
  {
    icon: "wifi",
    title: "High-speed WiFi",
    description:
      "Koneksi stabil dan cepat untuk meeting online tanpa hambatan.",
  },
  {
    icon: "power",
    title: "Banyak Stop Kontak",
    description:
      "Tersedia di setiap meja untuk memastikan perangkat Anda tetap menyala.",
  },
  {
    icon: "chair",
    title: "Kursi Ergonomis",
    description:
      "Didesain untuk kenyamanan jangka panjang saat Anda bekerja intensif.",
  },
  {
    icon: "focus",
    title: "Area Fokus Tenang",
    description:
      "Zona khusus bebas kebisingan untuk konsentrasi yang mendalam.",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="px-4 md:px-10 py-[80px] max-w-[1280px] mx-auto"
    >
      <div className="text-center mb-[80px]">
        <h2 className="text-[32px] leading-[1.2] font-medium text-[#271310]">
          Fasilitas Pendukung Kerja
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility.title}
            icon={facility.icon}
            title={facility.title}
            description={facility.description}
          />
        ))}
      </div>
    </section>
  );
}
