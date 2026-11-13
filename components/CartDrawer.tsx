"use client";

import React from "react";
import Image from "next/image";
import { CartItem } from "./types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onShowToast: (message: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onShowToast,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formattedTotal = new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalAmount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F8F6] border-l border-[#0A0A0A] flex flex-col justify-between shadow-none select-none">
          {/* Cart Header */}
          <div className="p-6 border-b border-[#0A0A0A] flex items-center justify-between">
            <h2 className="text-[12px] font-medium tracking-[0.35em] uppercase text-[#0A0A0A]">
              SEPET ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
            <button
              onClick={onClose}
              className="text-[11px] font-normal tracking-[0.3em] uppercase hover:opacity-50 transition-opacity"
            >
              KAPAT ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#0A0A0A]/15 p-6">
            {items.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-[11px] font-light tracking-[0.3em] uppercase text-[#0A0A0A]/60 mb-6">
                  SEPETİNİZ BOŞTUR.
                </p>
                <button
                  onClick={onClose}
                  className="border border-[#0A0A0A] text-[10px] tracking-[0.3em] uppercase px-6 py-2.5 hover:bg-[#0A0A0A] hover:text-[#F8F8F6] transition-colors"
                >
                  ALIŞVERİŞE DÖN
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedColor.name}`} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-24 bg-[#EFECE6] border border-[#0A0A0A]/20 shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-[11px] font-normal tracking-[0.2em] uppercase text-[#0A0A0A]">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-[10px] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors"
                          title="Sil"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="text-[10px] tracking-[0.15em] text-[#0A0A0A]/60 uppercase mt-1">
                        RENK: {item.selectedColor.name}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#0A0A0A] text-[10px]">
                        <button
                          onClick={() => onUpdateQuantity(idx, -1)}
                          className="px-2 py-0.5 hover:bg-[#0A0A0A] hover:text-[#F8F8F6] transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-0.5 font-mono">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(idx, 1)}
                          className="px-2 py-0.5 hover:bg-[#0A0A0A] hover:text-[#F8F8F6] transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-[11px] font-light tracking-[0.1em]">
                        {item.product.formattedPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#0A0A0A] bg-[#F8F8F6]">
              <div className="flex justify-between text-[11px] tracking-[0.25em] uppercase mb-2">
                <span>ARA TOPLAM</span>
                <span className="font-medium">{formattedTotal} TL</span>
              </div>
              <p className="text-[9px] tracking-[0.15em] uppercase text-[#0A0A0A]/60 mb-6">
                KARGO VE VERGİLER ÖDEME ADIMINDA HESAPLANACAKTIR.
              </p>

              <button
                onClick={() => {
                  onShowToast("ÖDEME ALTYAPISI AKTİF EDİLİYOR...");
                }}
                className="w-full py-4 bg-[#0A0A0A] text-[#F8F8F6] text-[11px] font-medium tracking-[0.35em] uppercase hover:bg-neutral-800 transition-colors duration-200 rounded-none focus:outline-none"
              >
                SİPARİŞİ TAMAMLA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
