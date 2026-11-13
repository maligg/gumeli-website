"use client";

import React, { useState } from "react";
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
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredProducts =
    activeFilter === "ALL"
      ? products
      : products.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="collection" className="w-full bg-[#F8F8F6]">
      {/* Brutalist Sub-Header / Index Bar */}
      <div className="w-full border-t border-b border-[#0A0A0A] px-4 md:px-8 py-3.5 flex flex-wrap items-center justify-between text-[10px] md:text-[11px] font-normal tracking-[0.3em] uppercase">
        <div className="flex items-center space-x-6 md:space-x-8">
          <span className="text-[#0A0A0A]/40 font-mono">INDEX</span>
          <button
            onClick={() => setActiveFilter("ALL")}
            className={`transition-opacity ${
              activeFilter === "ALL" ? "text-[#0A0A0A] font-semibold" : "text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
            }`}
          >
            TÜMÜ ({products.length})
          </button>
          <button
            onClick={() => setActiveFilter("OMUZ")}
            className={`hidden sm:inline-block transition-opacity ${
              activeFilter === "OMUZ" ? "text-[#0A0A0A] font-semibold" : "text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
            }`}
          >
            OMUZ
          </button>
          <button
            onClick={() => setActiveFilter("TOTE")}
            className={`hidden sm:inline-block transition-opacity ${
              activeFilter === "TOTE" ? "text-[#0A0A0A] font-semibold" : "text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
            }`}
          >
            TOTE
          </button>
          <button
            onClick={() => setActiveFilter("MİNİ")}
            className={`hidden sm:inline-block transition-opacity ${
              activeFilter === "MİNİ" ? "text-[#0A0A0A] font-semibold" : "text-[#0A0A0A]/60 hover:text-[#0A0A0A]"
            }`}
          >
            MİNİ
          </button>
        </div>

        <div className="text-[#0A0A0A]/50 tracking-[0.25em]">
          EDITION 2026.01
        </div>
      </div>

      {/* 2-Column Desktop / 1-Column Mobile Full-Width Grid with 1px Black Divider */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#0A0A0A] border-b border-[#0A0A0A]">
        {filteredProducts.map((product, index) => {
          // Add right border to odd items on desktop (1st item in each pair)
          const isOddOnDesktop = index % 2 === 0;
          // Add bottom border to items that are not in the last row
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
