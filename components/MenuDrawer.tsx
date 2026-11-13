"use client";

import React from "react";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (cat: string) => void;
}

export default function MenuDrawer({
  isOpen,
  onClose,
  onSelectCategory,
}: MenuDrawerProps) {
  if (!isOpen) return null;

  const menuItems = [
    { code: "01", label: "KOLEKSİYON 01" },
    { code: "02", label: "EDİSYON 2026" },
    { code: "03", label: "EDİTORYAL KAMPANYA" },
    { code: "04", label: "ARŞİV" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#F8F8F6] border-r border-[#0A0A0A] flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#0A0A0A] flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#0A0A0A]/50">
              NAVIGATION
            </span>
            <button
              onClick={onClose}
              className="text-[11px] font-medium tracking-[0.3em] uppercase hover:opacity-50 transition-opacity"
            >
              KAPAT ✕
            </button>
          </div>

          {/* Nav List */}
          <div className="flex-1 px-8 py-12 flex flex-col justify-center space-y-8">
            {menuItems.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  onSelectCategory(item.label);
                  onClose();
                }}
                className="group flex items-baseline text-left hover:pl-3 transition-all duration-300 cursor-pointer"
              >
                <span className="text-[11px] font-mono text-[#0A0A0A]/40 mr-4 tracking-wider">
                  {item.code}
                </span>
                <span className="text-lg md:text-xl font-light tracking-[0.35em] uppercase text-[#0A0A0A] group-hover:opacity-60 transition-opacity">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Footer Info */}
          <div className="p-8 border-t border-[#0A0A0A] space-y-4 text-[10px] tracking-[0.25em] uppercase text-[#0A0A0A]/70">
            <div className="flex justify-between">
              <span>BÖLGE & PARA BİRİMİ</span>
              <span className="font-medium text-[#0A0A0A]">TÜRKİYE / TRY (₺)</span>
            </div>
            <div className="flex justify-between">
              <span>MÜŞTERİ HİZMETLERİ</span>
              <a
                href="mailto:contact@gumeli.com.tr"
                className="font-medium text-[#0A0A0A] hover:underline"
              >
                CONTACT@GUMELI.COM.TR
              </a>
            </div>
            <div className="pt-2 text-[9px] text-[#0A0A0A]/40 tracking-[0.3em]">
              GÜMELİ OFFICIAL — EST. 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
