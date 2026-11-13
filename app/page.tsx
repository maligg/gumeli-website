"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import CartDrawer from "@/components/CartDrawer";
import MenuDrawer from "@/components/MenuDrawer";
import SearchModal from "@/components/SearchModal";
import Toast from "@/components/Toast";
import { PRODUCTS } from "@/components/data";
import { Product, ProductColor, CartItem } from "@/components/types";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart actions
  const handleAddToCart = (product: Product, color: ProductColor) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id && item.selectedColor.name === color.name
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedColor: color, quantity: 1 }];
    });
    setToastMessage(`${product.modelCode} SEPETE EKLENDİ`);
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    setToastMessage("ÜRÜN SEPETTEN ÇIKARILDI");
  };

  const scrollToCollection = () => {
    const el = document.getElementById("collection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="min-h-screen w-full bg-[#F8F8F6] text-[#0A0A0A] relative">
      {/* 1. Header (Fixed, blurred background, minimal typography) */}
      <Header
        cartCount={totalCartCount}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToCollection={scrollToCollection}
      />

      {/* 2. Hero (100vh full-screen editorial campaign visual) */}
      <Hero onExploreClick={scrollToCollection} />

      {/* 3. Product Grid (Zara/COS brutalist 2-column grid with 1px black borders) */}
      <ProductGrid
        products={PRODUCTS}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* 4. Footer & Newsletter */}
      <Footer onShowToast={(msg) => setToastMessage(msg)} />

      {/* Interactive Drawers & Overlays */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectCategory={() => scrollToCollection()}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} onClear={() => setToastMessage(null)} />
    </main>
  );
}
