"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#facilities", label: "Fasilitas" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Testimoni" },
  { href: "#location", label: "Tempat" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    const target = document.querySelector("#hero");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-[#fbf9f4]/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="text-[24px] leading-[1.3] font-bold text-[#271310]"
        >
          Brew Haven
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#504442] hover:text-[#271310] transition-colors text-[14px] leading-[1.4] tracking-[0.05em] font-semibold"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleCTAClick}
            className="bg-[#271310] text-[#fbf9f4] px-6 py-2 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2"
          >
            Kunjungi Brew Haven
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#271310] p-2 focus:outline-none focus:ring-2 focus:ring-[#e3beb8] rounded"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-[#fbf9f4]/95 backdrop-blur-md flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#504442] hover:text-[#271310] transition-colors text-[14px] leading-[1.4] tracking-[0.05em] font-semibold py-2"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleCTAClick}
            className="bg-[#271310] text-[#fbf9f4] px-6 py-3 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] w-full"
          >
            Kunjungi Brew Haven
          </button>
        </div>
      </div>
    </header>
  );
}
