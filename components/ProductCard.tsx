"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "./types";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <div
      onClick={() => onSelect(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer bg-[#F8F8F6] flex flex-col justify-between select-none"
    >
      {/* High-Aspect Vertical Product Visual (aspect-[3/4]) */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F0EFEB]">
        {/* Primary Image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
            isHovered && product.images[1] ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Secondary Hover Image (Zara / COS style alternate editorial angle) */}
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} Alternate View`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover object-center absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isHovered ? "opacity-100 scale-102" : "opacity-0"
            }`}
          />
        )}

        {/* Subtle Index Badge */}
        <div className="absolute top-4 left-4 text-[9px] tracking-[0.25em] text-[#0A0A0A]/40 uppercase font-mono">
          {product.modelCode}
        </div>
      </div>

      {/* Product Card Details (Bottom Bar) */}
      <div className="p-4 md:p-6 border-t border-[#0A0A0A]/10">
        <div className="flex items-start justify-between gap-4 mb-3">
          {/* Left: Product Name (uppercase, small, wide tracking) */}
          <h3 className="text-[11px] font-normal tracking-[0.25em] uppercase text-[#0A0A0A] leading-snug">
            {product.name}
          </h3>

          {/* Right: Plain Price */}
          <span className="text-[11px] font-light tracking-[0.15em] text-[#0A0A0A] whitespace-nowrap">
            {product.formattedPrice}
          </span>
        </div>

        {/* Bottom: Only 8x8px Color Squares */}
        <div className="flex items-center space-x-2 pt-1" onClick={(e) => e.stopPropagation()}>
          {product.colors.map((color, idx) => (
            <button
              key={color.name}
              onClick={() => setSelectedColorIndex(idx)}
              title={color.name}
              aria-label={`Renk: ${color.name}`}
              className={`w-2 h-2 rounded-none transition-transform duration-150 ${
                selectedColorIndex === idx
                  ? "scale-125 ring-1 ring-[#0A0A0A] ring-offset-1 ring-offset-[#F8F8F6]"
                  : "hover:scale-125 opacity-80"
              }`}
              style={{
                backgroundColor: color.hex,
                border: color.hex.toLowerCase() === "#f8f8f6" || color.hex.toLowerCase() === "#ffffff"
                  ? "1px solid #0A0A0A"
                  : "1px solid rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
