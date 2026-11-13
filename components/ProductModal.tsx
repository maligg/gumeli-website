"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, ProductColor } from "./types";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor) => void;
}

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product ? product.colors[0] : null
  );
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Update selected color when product changes
  React.useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setActiveImageIdx(0);
    }
  }, [product]);

  if (!product || !selectedColor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-5xl h-full md:h-auto max-h-[100dvh] md:max-h-[90vh] bg-[#F8F8F6] border border-[#0A0A0A] overflow-y-auto flex flex-col md:flex-row select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - min 44x44px touch target */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center text-[11px] font-medium tracking-[0.3em] uppercase hover:opacity-50 transition-opacity bg-[#F8F8F6]/90 px-3 py-2 border border-[#0A0A0A] focus:outline-none focus-visible:ring-1 focus-visible:ring-black touch-manipulation cursor-pointer"
          aria-label="Kapat"
        >
          KAPAT ✕
        </button>

        {/* Left: Product Images Gallery */}
        <div className="w-full md:w-1/2 bg-[#EFECE6] border-b md:border-b-0 md:border-r border-[#0A0A0A] relative min-h-[360px] md:min-h-[560px]">
          <Image
            src={product.images[activeImageIdx] || product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />

          {/* Alternate view switcher if 2+ images */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-2 z-10">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`min-w-[36px] min-h-[36px] flex items-center justify-center text-[10px] font-mono border border-[#0A0A0A] transition-colors focus:outline-none touch-manipulation cursor-pointer ${
                    activeImageIdx === idx
                      ? "bg-[#0A0A0A] text-[#F8F8F6]"
                      : "bg-[#F8F8F6] text-[#0A0A0A] hover:bg-[#0A0A0A]/10"
                  }`}
                  aria-label={`Görsel ${idx + 1}`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Action */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-[#0A0A0A]/50 uppercase mb-2">
              NO. {product.modelCode}
            </div>

            <h2 className="text-base md:text-lg font-normal tracking-[0.25em] uppercase text-[#0A0A0A] mb-3">
              {product.name}
            </h2>

            <div className="text-sm md:text-base font-light tracking-[0.15em] text-[#0A0A0A] mb-6 md:mb-8 pb-4 border-b border-[#0A0A0A]">
              {product.formattedPrice}
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-[11px] font-light tracking-[0.1em] text-[#0A0A0A]/80 leading-relaxed uppercase">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-2 text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/70 mb-6 md:mb-8 border-t border-b border-[#0A0A0A]/15 py-4">
              <div className="flex justify-between">
                <span>MATERYAL</span>
                <span className="font-medium text-[#0A0A0A]">{product.material}</span>
              </div>
              <div className="flex justify-between">
                <span>ÖLÇÜLER</span>
                <span className="font-medium text-[#0A0A0A]">{product.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span>TESLİMAT</span>
                <span className="font-medium text-[#0A0A0A]">1-3 İŞ GÜNÜ</span>
              </div>
            </div>

            {/* Color Selector with accessible touch targets */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between text-[11px] tracking-[0.25em] uppercase mb-2">
                <span>RENK:</span>
                <span className="font-medium">{selectedColor.name}</span>
              </div>
              <div className="flex items-center -ml-2 space-x-1">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Renk Seçimi: ${color.name}`}
                    className="w-10 h-10 flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-black touch-manipulation cursor-pointer"
                  >
                    <span
                      className={`w-6 h-6 block rounded-none transition-all pointer-events-none ${
                        selectedColor.name === color.name
                          ? "scale-110 ring-2 ring-[#0A0A0A] ring-offset-2 ring-offset-[#F8F8F6]"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      style={{
                        backgroundColor: color.hex,
                        border: "1px solid rgba(0,0,0,0.25)",
                      }}
                      title={color.name}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart CTA */}
          <div className="pt-4 border-t border-[#0A0A0A]">
            <button
              onClick={() => {
                onAddToCart(product, selectedColor);
                onClose();
              }}
              className="w-full min-h-[48px] py-4 bg-[#0A0A0A] text-[#F8F8F6] text-[11px] font-medium tracking-[0.35em] uppercase hover:bg-neutral-800 transition-colors duration-200 rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-black touch-manipulation cursor-pointer"
            >
              SEPETE EKLE — {product.formattedPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
