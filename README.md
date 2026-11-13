# GÜMELİ — Official Online Store

> Ultra-minimalist, brutalist luxury e-commerce platform for GÜMELİ (gümeli.com.tr).

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-black?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-black?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-Proprietary-black?style=flat-square)]()

---

## Brand & Design Architecture

Designed to evoke the stark, cold, architectural minimalism of global high-fashion powerhouses (Zara, COS, Chanel):

- **Palette**: Pristine Off-White (`#F8F8F6`) base with deep Obsidian Black (`#0A0A0A`) accents and razor-sharp 1px dividers.
- **Typography**: Ultra-wide tracking (`tracking-[0.35em]`), clean modern sans-serif, uppercase hierarchy.
- **Philosophy**: Zero emotional narrative or provincial storytelling. Pure high-fashion corporate storefront.
- **Hero**: Full-bleed `100vh` editorial campaign visual with sharp border-radius 0 call-to-action.
- **Product Vitrine**: 2-column desktop / 1-column mobile grid separated only by 1px black borders. High-aspect ratio (`3:4`) editorial visuals, plain price typography, 8x8px color swatches, and zero distracting badges.
- **Interactive Experience**: Minimalist Menu Drawer, Instant Search Modal, Slide-Over Cart Drawer, and Technical Specification Quick View Modal.

---

## Featured Models (Edition 2026.01)

1. **GÜMELİ 01** (`2.450,00 TL`)
2. **GÜMELİ 02** (`3.850,00 TL`)
3. **GÜMELİ 03** (`1.950,00 TL`)
4. **GÜMELİ 04** (`3.200,00 TL`)

---

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the storefront.

### Production Build

```bash
npm run build
npm start
```

---

## Vercel Deployment & Domain Configuration

### 1. Vercel Deployment
1. Connect this repository (`maligg/gumeli-website`) on [Vercel](https://vercel.com/new).
2. Framework Preset will automatically detect **Next.js**.
3. Click **Deploy**.

### 2. Domain & DNS (`gümeli.com.tr`)
Because `gümeli.com.tr` contains the Turkish character **ü**, the international domain name (IDN) Punycode format is used:

- **Unicode Domain**: `gümeli.com.tr`
- **Punycode (ACE)**: `xn--gmeli-kva.com.tr`

#### Recommended Nameserver Setup:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

---

© 2026 GÜMELİ. All rights reserved.
