# AGENTS.md

Dokumen ini menjelaskan arsitektur dan konvensi proyek BengkelPanggil untuk developer dan AI agent.

## Gambaran Proyek

Single-page website untuk layanan bengkel mobil panggilan di area Jabodetabek (Jakarta, Tangerang, Bekasi, Depok). Dibangun di atas TanStack Start dengan fokus pada SEO lokal, geo-targeting, dan AEO (Answer Engine Optimization).

## Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + Custom CSS properties |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |
| Fonts | Barlow Condensed + Nunito Sans (Google Fonts CDN) |

## Struktur Direktori

```
src/
  routes/
    __root.tsx    # Root layout: lang="id", SEO meta, JSON-LD schema markup
    index.tsx     # SELURUH konten halaman (single-page marketing site)
  styles.css      # Design system: tokens, layout, komponen, responsive
public/
  favicon.ico
  placeholder.png
netlify.toml      # Build config: vite build, publish: dist/client
```

## Keputusan Arsitektur Penting

### Single-File Page Pattern
Seluruh konten website ada di `src/routes/index.tsx`. Ini disengaja karena ini adalah marketing site satu halaman, bukan aplikasi multi-halaman. Tidak perlu dipecah kecuali halaman baru ditambahkan.

### CSS tanpa UI Library
Tidak menggunakan Radix UI, shadcn, atau library komponen lain. Semua styling ditulis manual di `styles.css` menggunakan CSS custom properties untuk design tokens. Ini dipilih untuk kontrol penuh atas visual dan bundle size yang minimal.

### Schema Markup di Root
`LocalBusiness` schema dan `FAQPage` schema JSON-LD diletakkan di `__root.tsx` melalui `head()`. Ini memastikan structured data ter-render server-side untuk SEO optimal.

### Nomor WhatsApp
Konstanta `WA_NUMBER` dan `WA_URL` didefinisikan di awal komponen `BengkelPanggil` di `index.tsx`. Untuk mengganti nomor, ubah hanya satu lokasi ini.

### SVG Icons Inline
Semua icon adalah inline React components (tidak ada library icon). Ini menghindari dependency dan memastikan icon selalu sesuai dengan warna tema.

## Design System

- **Warna aksen**: `--amber` (#f97316) — oranye otomotif
- **Background**: `--bg-base` (#0f0e0e) — dark theme industrial
- **Font display**: Barlow Condensed (heading, uppercase, industrial)
- **Font body**: Nunito Sans (body text, readable)
- **Scroll animation**: `.reveal` class + IntersectionObserver di `useEffect`

## Cara Menambah Halaman Baru

Buat file di `src/routes/namahalaman.tsx`:

```ts
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/namahalaman')({
  component: NamaHalaman,
})
function NamaHalaman() { return <div>...</div> }
```

Router otomatis mendeteksi file baru tanpa registrasi manual.

## Development Commands

```bash
npm run dev      # Dev server di port 3000
netlify dev      # Dev server Netlify di port 8888 (direkomendasikan)
npm run build    # Production build → dist/client
```

## Konvensi Kode

- Components: PascalCase
- Utilities/hooks: camelCase
- Import alias `@/` → `src/`
- Type-only imports menggunakan keyword `type`
- Tidak ada komentar kecuali WHY tidak jelas dari kode

## SEO & AEO

- `lang="id"` pada `<html>` untuk geo-signal Indonesia
- H1 → H2 → H3 hierarchy ketat di semua section
- `FAQPage` JSON-LD schema di root untuk AEO
- `LocalBusiness` schema dengan `areaServed` untuk 4 kota
- Meta description dan keywords mengandung keyword lokal (bengkel panggilan jakarta, servis mobil bekasi, dll)
