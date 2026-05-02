import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bengkelpaggilan.com',
  name: 'BengkelPanggil – Bengkel Mobil Panggilan',
  image: 'https://bengkelpaggilan.com/logo.png',
  description:
    'Bengkel mobil panggilan profesional melayani area Jakarta, Tangerang, Bekasi, dan Depok. Teknisi berpengalaman datang ke lokasi Anda dalam 30 menit.',
  url: 'https://bengkelpaggilan.com',
  telephone: '+62-812-3456-7890',
  priceRange: 'Rp 150.000 – Rp 2.000.000',
  currenciesAccepted: 'IDR',
  paymentAccepted: 'Cash, Transfer Bank, QRIS',
  openingHours: 'Mo-Su 00:00-23:59',
  areaServed: [
    { '@type': 'City', name: 'Jakarta' },
    { '@type': 'City', name: 'Tangerang' },
    { '@type': 'City', name: 'Bekasi' },
    { '@type': 'City', name: 'Depok' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -6.2088,
      longitude: 106.8456,
    },
    geoRadius: '50000',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressRegion: 'DKI Jakarta',
    addressCountry: 'ID',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Bengkel Mobil Panggilan',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Perbaikan Mesin' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Servis Berkala' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Perbaikan Rem' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kelistrikan Mobil' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobil Mogok' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ganti Oli & Filter' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa lama teknisi datang ke lokasi saya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teknisi kami menargetkan tiba dalam 30–60 menit setelah pemesanan terkonfirmasi, tergantung lokasi dan kondisi lalu lintas di area Jakarta, Tangerang, Bekasi, atau Depok.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah bengkel panggilan ini tersedia 24 jam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, kami melayani 24 jam sehari, 7 hari seminggu termasuk hari libur nasional. Untuk kondisi darurat mogok, hubungi nomor WhatsApp kami kapan saja.',
      },
    },
    {
      '@type': 'Question',
      name: 'Area mana saja yang dilayani bengkel panggilan ini?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami melayani seluruh wilayah Jakarta (Pusat, Utara, Selatan, Timur, Barat), Tangerang (kota dan kabupaten), Bekasi (kota dan kabupaten), serta Depok.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa biaya panggilan teknisi ke lokasi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Biaya kunjungan mulai Rp 50.000 untuk area dalam kota. Biaya ini sudah mencakup diagnosa awal kendaraan. Estimasi biaya perbaikan diberikan sebelum pekerjaan dimulai, tanpa biaya tersembunyi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah spare part yang digunakan original?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami menggunakan spare part original (OEM) atau berkualitas setara sesuai pilihan pelanggan. Semua part dilengkapi garansi dan struk pembelian resmi.',
      },
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Bengkel Mobil Panggilan Jakarta, Tangerang, Bekasi & Depok | BengkelPanggil' },
      {
        name: 'description',
        content:
          'Bengkel mobil panggilan terpercaya di Jakarta, Tangerang, Bekasi, dan Depok. Teknisi datang ke lokasi Anda dalam 30 menit. Servis berkala, perbaikan mesin, mogok, rem, kelistrikan. Hubungi sekarang!',
      },
      { name: 'keywords', content: 'bengkel mobil panggilan jakarta, servis mobil bekasi, perbaikan mobil tangerang, bengkel panggilan depok, montir panggilan jakarta, bengkel mobil 24 jam jakarta, montir mobil ke rumah' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Bengkel Mobil Panggilan – Teknisi Datang ke Lokasi Anda' },
      { property: 'og:description', content: 'Layanan bengkel mobil panggilan 24/7 di Jakarta, Tangerang, Bekasi, Depok. Teknisi berpengalaman datang dalam 30 menit.' },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#0f0e0e' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Nunito+Sans:wght@300;400;500;600;700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schemaMarkup),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
