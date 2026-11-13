"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "./types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.modelCode.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-[#F8F8F6]/95 backdrop-blur-md overflow-y-auto select-none">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Top Bar with Close */}
        <div className="flex items-center justify-between pb-6 border-b border-[#0A0A0A]">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#0A0A0A]/50">
            INDEX ARAMA
          </span>
          <button
            onClick={onClose}
            className="text-[11px] font-medium tracking-[0.3em] uppercase hover:opacity-50 transition-opacity cursor-pointer"
          >
            KAPAT ✕
          </button>
        </div>

        {/* Input */}
        <div className="py-12 border-b border-[#0A0A0A]">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="MODEL VEYA NUMARA ARAYIN (01, 02, GÜMELİ...)"
            className="w-full bg-transparent text-xl md:text-3xl font-light tracking-[0.2em] uppercase placeholder:text-[#0A0A0A]/30 focus:outline-none text-[#0A0A0A]"
          />
        </div>

        {/* Results */}
        <div className="py-10">
          {query.trim() && results.length === 0 && (
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#0A0A0A]/50">
              EŞLEŞEN MODEL BULUNAMADI.
            </p>
          )}

          {results.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="cursor-pointer group flex flex-col justify-between border border-[#0A0A0A]/20 hover:border-[#0A0A0A] p-3 transition-colors"
                >
                  <div className="relative aspect-[3/4] w-full bg-[#EFECE6] mb-3 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-[#0A0A0A]/50">
                      NO. {product.modelCode}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-medium mt-1">
                      {product.name}
                    </div>
                    <div className="text-[10px] tracking-[0.1em] text-[#0A0A0A]/70 mt-2">
                      {product.formattedPrice}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Suggestions when query is empty */}
          {!query.trim() && (
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#0A0A0A]/40 mb-4">
                KOLEKSİYON LİSTESİ
              </p>
              <div className="flex flex-wrap gap-3">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setQuery(p.modelCode)}
                    className="border border-[#0A0A0A]/30 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F8F8F6] transition-colors cursor-pointer"
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
