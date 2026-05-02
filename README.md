# BengkelPanggil

Website layanan bengkel mobil panggilan yang melayani area Jakarta, Tangerang, Bekasi, dan Depok. Dibangun sebagai single-page application dengan optimasi SEO, geo-targeting, dan AEO (Answer Engine Optimization).

## Teknologi Utama

| Layer | Teknologi |
|-------|-----------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + Custom CSS |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |
| Fonts | Barlow Condensed + Nunito Sans (Google Fonts) |

## Cara Menjalankan Secara Lokal

### Prasyarat

- Node.js 18+
- npm atau pnpm

### Instalasi

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`. Jika menggunakan Netlify CLI (direkomendasikan untuk emulasi fitur Netlify):

```bash
netlify dev
```

Akses di `http://localhost:8888`.

### Build Produksi

```bash
npm run build
```

Output akan berada di direktori `dist/client`.

## Konfigurasi

### Nomor WhatsApp

Edit variabel `WA_NUMBER` di `src/routes/index.tsx`:

```ts
const WA_NUMBER = '6281234567890' // Ganti dengan nomor WA aktif
```

### Schema Markup (SEO)

Informasi bisnis untuk structured data ada di `src/routes/__root.tsx` pada variabel `schemaMarkup`. Perbarui:
- `name` — nama bisnis
- `telephone` — nomor telepon
- `url` — URL website

## Struktur Halaman

1. **Hero** — Headline, value proposition, area coverage, statistik
2. **Layanan** — 6 layanan utama dengan ikon dan deskripsi
3. **Keunggulan** — 5 keunggulan kompetitif + stats panel
4. **Cara Kerja** — 4 langkah pemesanan
5. **Testimoni** — 5 ulasan pelanggan nyata
6. **Coverage** — 4 kota layanan dengan detail kecamatan
7. **FAQ** — 6 pertanyaan umum (AEO-optimized)
8. **CTA** — Call-to-action WhatsApp + telepon
