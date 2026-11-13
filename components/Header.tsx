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
      <div className="w-full px-4 md:px-8 h-14 md:h-16 flex items-center justify-between relative">
        {/* Left: MENU & KOLEKSIYON */}
        <div className="flex items-center space-x-2 sm:space-x-6 z-10">
          <button
            onClick={onOpenMenu}
            className="min-h-[44px] min-w-[44px] flex items-center text-[11px] font-medium tracking-[0.3em] uppercase hover:opacity-50 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-black touch-manipulation cursor-pointer"
            aria-label="Menüyü Aç"
          >
            MENÜ
          </button>
          <button
            onClick={onScrollToCollection}
            className="hidden sm:flex min-h-[44px] items-center text-[11px] font-medium tracking-[0.3em] uppercase hover:opacity-50 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-black touch-manipulation cursor-pointer"
          >
            KOLEKSİYON
          </button>
        </div>

        {/* Center: G Ü M E L İ Logo (Responsive, never wraps on mobile) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="pointer-events-auto text-xs sm:text-base md:text-xl font-light tracking-[0.35em] sm:tracking-[0.5em] md:tracking-[0.65em] uppercase select-none hover:opacity-70 transition-opacity whitespace-nowrap pl-[0.35em] sm:pl-[0.5em] md:pl-[0.65em] focus:outline-none focus-visible:ring-1 focus-visible:ring-black"
          >
            G Ü M E L İ
          </a>
        </div>

        {/* Right: ARA & SEPET */}
        <div className="flex items-center space-x-1 sm:space-x-6 z-10">
          <button
            onClick={onOpenSearch}
            className="min-h-[44px] px-2 flex items-center justify-end text-[11px] font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:opacity-50 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-black touch-manipulation cursor-pointer"
            aria-label="Arama Yap"
          >
            ARA
          </button>
          <button
            onClick={onOpenCart}
            className="min-h-[44px] pl-2 flex items-center justify-end text-[11px] font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:opacity-50 transition-opacity focus:outline-none focus-visible:ring-1 focus-visible:ring-black touch-manipulation cursor-pointer whitespace-nowrap"
            aria-label={`Alışveriş Sepeti (${cartCount})`}
          >
            SEPET ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
}
