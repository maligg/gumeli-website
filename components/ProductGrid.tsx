"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "./types";

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({
  products,
  onSelectProduct,
}: ProductGridProps) {
  return (
    <section id="collection" className="w-full bg-[#F8F8F6]">
      {/* Brutalist Minimal Index Bar */}
      <div className="w-full border-t border-b border-[#0A0A0A] px-4 md:px-8 py-3.5 flex items-center justify-between text-[10px] md:text-[11px] font-normal tracking-[0.3em] uppercase">
        <div className="flex items-center space-x-4">
          <span className="text-[#0A0A0A]/40 font-mono">INDEX</span>
          <span className="text-[#0A0A0A] font-medium tracking-[0.3em]">
            KOLEKSİYON (0{products.length})
          </span>
        </div>

        <div className="text-[#0A0A0A]/50 tracking-[0.25em] font-mono text-[9px] md:text-[10px]">
          EDITION 2026.01
        </div>
      </div>

      {/* 2-Column Desktop / 1-Column Mobile Full-Width Grid with 1px Black Divider */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#0A0A0A] border-b border-[#0A0A0A]">
        {products.map((product, index) => {
          const isOddOnDesktop = index % 2 === 0;
          const isTopRowOnDesktop = index < 2;

          return (
            <div
              key={product.id}
              className={`w-full ${
                isOddOnDesktop ? "md:border-r md:border-[#0A0A0A]" : ""
              } ${isTopRowOnDesktop ? "md:border-b md:border-[#0A0A0A]" : ""}`}
            >
              <ProductCard product={product} onSelect={onSelectProduct} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
