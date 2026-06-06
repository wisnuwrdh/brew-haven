"use client";

import Link from "next/link";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#f0eee9] py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 max-w-[1280px] mx-auto">
        {/* Brand Block */}
        <div className="space-y-4">
          <Link
            href="/"
            className="text-[24px] leading-[1.3] font-bold text-[#271310]"
          >
            Brew Haven
          </Link>
          <p className="text-[16px] leading-[1.6] text-[#504442] max-w-xs">
            Ruang &ldquo;Third Place&rdquo; yang didesain khusus untuk mendukung
            fokus, kreativitas, dan produktivitas Anda.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[14px] leading-[1.4] tracking-[0.05em] font-semibold text-[#271310] mb-4">
            Tautan Cepat
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href="#facilities"
              onClick={(e) => handleNavClick(e, "#facilities")}
              className="text-[16px] leading-[1.6] text-[#504442] hover:text-[#271310] transition-colors"
            >
              Fasilitas
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "#menu")}
              className="text-[16px] leading-[1.6] text-[#504442] hover:text-[#271310] transition-colors"
            >
              Menu
            </a>
            <a
              href="#reviews"
              onClick={(e) => handleNavClick(e, "#reviews")}
              className="text-[16px] leading-[1.6] text-[#504442] hover:text-[#271310] transition-colors"
            >
              Testimoni
            </a>
            <a
              href="#location"
              onClick={(e) => handleNavClick(e, "#location")}
              className="text-[16px] leading-[1.6] text-[#504442] hover:text-[#271310] transition-colors"
            >
              Kontak
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[14px] leading-[1.4] tracking-[0.05em] font-semibold text-[#271310] mb-4">
            Legal
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "#faq")}
              className="text-[16px] leading-[1.6] text-[#504442] hover:text-[#271310] transition-colors"
            >
              Reservasi
            </a>
            <a
              href="#"
              className="text-[16px] leading-[1.6] text-[#504442] hover:text-[#271310] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Kebijakan Privasi
            </a>
          </div>
          <div className="mt-10 md:mt-[80px] pt-4 border-t border-[#d3c3c0]">
            <p className="text-[16px] leading-[1.6] text-[#504442] opacity-60">
              &copy; 2024 Brew Haven. Ruang Produktivitas Anda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
