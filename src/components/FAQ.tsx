"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Apakah tersedia WiFi?",
    answer:
      "Ya, tersedia WiFi berkecepatan tinggi dengan koneksi stabil dan merata di seluruh area Brew Haven. Cocok untuk meeting online, streaming, dan browsing tanpa hambatan.",
  },
  {
    question: "Apakah stop kontak mudah diakses?",
    answer:
      "Tentu. Setiap meja dilengkapi dengan stop kontak pribadi. Anda tidak perlu khawatir kehabisan baterai saat bekerja atau belajar di sini.",
  },
  {
    question: "Apakah bisa reservasi meja?",
    answer:
      "Bisa. Kami menyediakan layanan reservasi meja untuk memastikan tempat Anda siap sebelum datang. Reservasi dapat dilakukan melalui website atau langsung menghubungi kami.",
  },
  {
    question: "Apakah cocok untuk kerja kelompok atau meeting?",
    answer:
      "Sangat cocok. Brew Haven memiliki area diskusi privat dan semi-privat yang mendukung kerja kelompok, diskusi informal, hingga meeting kecil dengan nyaman.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${item.question.replace(/\s+/g, "-").toLowerCase()}`;
  const buttonId = `faq-button-${item.question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="border border-[#d3c3c0] rounded-xl overflow-hidden bg-[#fbf9f4]">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex justify-between items-center px-6 py-5 text-left text-[18px] leading-[1.6] font-medium text-[#271310] hover:bg-[#f5f3ee] transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e3beb8]"
      >
        <span>{item.question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-[16px] leading-[1.6] text-[#504442]">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 md:px-10 py-[80px] max-w-[1280px] mx-auto">
      <h2 className="text-[32px] leading-[1.2] font-medium text-[#271310] mb-[80px] text-center">
        Pertanyaan Umum
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#271310] text-[#fbf9f4] px-8 py-4 rounded-lg text-[14px] leading-[1.4] tracking-[0.05em] font-semibold hover:opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#e3beb8] focus:ring-offset-2">
          Reservasi Meja
        </button>
        <p className="mt-3 text-[12px] leading-[1.4] text-[#504442]">
          Pastikan tempatmu tersedia sebelum datang.
        </p>
      </div>
    </section>
  );
}
