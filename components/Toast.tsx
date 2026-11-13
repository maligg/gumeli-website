"use client";

import React, { useEffect } from "react";

interface ToastProps {
  message: string | null;
  onClear: () => void;
}

export default function Toast({ message, onClear }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClear();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClear]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-slide-up">
      <div className="bg-[#0A0A0A] text-[#F8F8F6] px-6 py-3 border border-white/20 text-[11px] font-normal tracking-[0.3em] uppercase select-none shadow-2xl">
        {message}
      </div>
    </div>
  );
}
