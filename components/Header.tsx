"use client";

import React from "react";

interface HeaderProps {
  cartCount: number;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onScrollToCollection: () => void;
}

export default function Header({
  cartCount,
  onOpenMenu,
  onOpenSearch,
  onOpenCart,
  onScrollToCollection,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F8F8F6]/90 backdrop-blur-md border-b border-[#0A0A0A] transition-all duration-200">
      <div className="w-full px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
        {/* Left: MENU & KOLEKSIYON */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <button
            onClick={onOpenMenu}
            className="text-[11px] font-medium tracking-[0.35em] uppercase hover:opacity-50 transition-opacity focus:outline-none"
            aria-label="Menüyü Aç"
          >
            MENÜ
          </button>
          <button
            onClick={onScrollToCollection}
            className="hidden sm:inline-block text-[11px] font-medium tracking-[0.35em] uppercase hover:opacity-50 transition-opacity focus:outline-none"
          >
            KOLEKSİYON
          </button>
        </div>

        {/* Center: G Ü M E L İ Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-base md:text-xl font-light tracking-[0.65em] uppercase select-none hover:opacity-70 transition-opacity inline-block pl-[0.65em]"
          >
            G Ü M E L İ
          </a>
        </div>

        {/* Right: ARA & SEPET */}
        <div className="flex items-center space-x-6 md:space-x-10">
          <button
            onClick={onOpenSearch}
            className="text-[11px] font-medium tracking-[0.35em] uppercase hover:opacity-50 transition-opacity focus:outline-none"
            aria-label="Arama Yap"
          >
            ARA
          </button>
          <button
            onClick={onOpenCart}
            className="text-[11px] font-medium tracking-[0.35em] uppercase hover:opacity-50 transition-opacity focus:outline-none"
            aria-label={`Alışveriş Sepeti (${cartCount})`}
          >
            SEPET ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}
