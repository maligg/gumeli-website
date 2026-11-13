"use client";

import React, { useState } from "react";

interface FooterProps {
  onShowToast: (message: string) => void;
}

export default function Footer({ onShowToast }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      onShowToast("GEÇERLİ BİR E-POSTA ADRESİ GİRİNİZ");
      return;
    }
    setIsSubscribed(true);
    onShowToast("BÜLTEN KAYDINIZ ALINDI");
  };

  return (
    <footer className="w-full bg-[#F8F8F6] text-[#0A0A0A] select-none">
      {/* Newsletter Section */}
      <div className="w-full border-b border-[#0A0A0A] px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-normal tracking-[0.35em] uppercase mb-6 text-[#0A0A0A]">
            BÜLTENE KAYDOLUN
          </p>
          <p className="text-[11px] font-light tracking-[0.15em] text-[#0A0A0A]/60 mb-8 leading-relaxed">
            YENİ KOLEKSİYONLAR, ÖZEL EDİSYONLAR VE DEFİLE DUYURULARI HAKKINDA BİLGİ ALIN.
          </p>

          {isSubscribed ? (
            <div className="text-[11px] font-medium tracking-[0.3em] uppercase py-3 border-b border-[#0A0A0A]">
              KAYDINIZ TAMAMLANDI.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center border-b border-[#0A0A0A] pb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-POSTA ADRESİNİZ"
                required
                className="w-full bg-transparent text-[11px] font-light tracking-[0.25em] uppercase placeholder:text-[#0A0A0A]/40 placeholder:tracking-[0.25em] focus:outline-none text-[#0A0A0A]"
              />
              <button
                type="submit"
                className="text-[11px] font-medium tracking-[0.35em] uppercase px-4 py-1 hover:opacity-50 transition-opacity focus:outline-none shrink-0"
              >
                GÖNDER
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Corporate Links Bar */}
      <div className="w-full px-4 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[10px] md:text-[11px] font-normal tracking-[0.35em] uppercase">
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <a
            href="mailto:contact@gumeli.com.tr"
            className="hover:opacity-50 transition-opacity"
          >
            İLETİŞİM
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity"
          >
            INSTAGRAM
          </a>
          <a
            href="#legal"
            onClick={(e) => {
              e.preventDefault();
              onShowToast("YASAL UYARI VE ŞARTLAR GÜNCELDIR");
            }}
            className="hover:opacity-50 transition-opacity"
          >
            YASAL UYARI
          </a>
        </div>

        <div className="text-[#0A0A0A]/60">
          © 2026 GÜMELİ
        </div>
      </div>
    </footer>
  );
}
