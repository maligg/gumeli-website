"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-[#0A0A0A] select-none">
      {/* High-Fashion Editorial Imagery */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop"
          alt="GÜMELİ COLLECTION 01 Editorial Campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter grayscale contrast-110 brightness-90 scale-105 animate-subtle-zoom transition-transform duration-1000 ease-out"
        />
        {/* Subtle brutalist grain & gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />
      </div>

      {/* Hero Bottom Center Callout */}
      <div className="absolute bottom-12 md:bottom-16 left-0 right-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <span className="text-[10px] md:text-[11px] font-light tracking-[0.45em] uppercase text-white/90 mb-4 pl-[0.45em]">
          COLLECTION 01
        </span>

        <button
          onClick={onExploreClick}
          className="rounded-none border border-white text-white px-8 md:px-12 py-3 text-[11px] font-normal tracking-[0.35em] uppercase bg-transparent hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 focus:outline-none pl-[calc(2rem+0.35em)] md:pl-[calc(3rem+0.35em)]"
        >
          KEŞFET
        </button>
      </div>

      {/* Decorative vertical corner line */}
      <div className="hidden md:block absolute bottom-8 left-8 text-white/40 text-[9px] tracking-[0.3em] uppercase">
        AUTUMN / WINTER 2026
      </div>
      <div className="hidden md:block absolute bottom-8 right-8 text-white/40 text-[9px] tracking-[0.3em] uppercase">
        EDITION 01
      </div>
    </section>
  );
}
