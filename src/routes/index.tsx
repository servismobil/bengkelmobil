import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: BengkelPanggil,
})

// ── SVG Icons ─────────────────────────────────────────────
function IconWrench({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function IconEngine({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="4" height="6" rx="1"/><rect x="17" y="11" width="4" height="6" rx="1"/>
      <path d="M7 14h10M3 14H1M23 14h-2M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>
    </svg>
  )
}

function IconBrake({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
    </svg>
  )
}

function IconBolt({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )
}

function IconOil({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l2 6H6L8 2zM6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/>
      <path d="M10 13h4"/>
    </svg>
  )
}

function IconTow({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 17l4-4h12l4 4"/><path d="M6 17v2"/><path d="M18 17v2"/>
      <circle cx="7" cy="19" r="1"/><circle cx="17" cy="19" r="1"/>
      <path d="M4 13V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/>
    </svg>
  )
}

function IconAC({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="10" rx="2"/>
      <path d="M8 14v2M12 14v4M16 14v2"/>
      <path d="M8 9h8"/>
    </svg>
  )
}

function IconCheck({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function IconPlus({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

function IconPhone({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.05-1.05a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function IconLocation({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

// Car SVG illustration
function CarIllustration() {
  return (
    <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px]">
      {/* Body */}
      <path d="M60 180 L80 130 Q110 90 160 82 L340 78 Q400 78 440 130 L470 180 L470 210 Q470 222 458 222 L62 222 Q50 222 50 210 Z" fill="#1e1d1b" stroke="rgba(249,115,22,0.4)" strokeWidth="2"/>
      {/* Cabin */}
      <path d="M160 130 L180 90 Q200 70 240 68 L300 68 Q340 68 360 90 L385 130 Z" fill="#252320" stroke="rgba(249,115,22,0.2)" strokeWidth="1.5"/>
      {/* Windows */}
      <path d="M175 128 L192 94 Q208 76 242 74 L298 74 Q330 74 348 94 L368 128 Z" fill="rgba(100,130,160,0.15)" stroke="rgba(100,130,160,0.3)" strokeWidth="1"/>
      <line x1="270" y1="74" x2="266" y2="128" stroke="rgba(100,130,160,0.3)" strokeWidth="1"/>
      {/* Wheels */}
      <circle cx="145" cy="218" r="40" fill="#111" stroke="rgba(249,115,22,0.5)" strokeWidth="3"/>
      <circle cx="145" cy="218" r="26" fill="#1a1917" stroke="rgba(249,115,22,0.3)" strokeWidth="2"/>
      <circle cx="145" cy="218" r="10" fill="rgba(249,115,22,0.6)"/>
      <circle cx="385" cy="218" r="40" fill="#111" stroke="rgba(249,115,22,0.5)" strokeWidth="3"/>
      <circle cx="385" cy="218" r="26" fill="#1a1917" stroke="rgba(249,115,22,0.3)" strokeWidth="2"/>
      <circle cx="385" cy="218" r="10" fill="rgba(249,115,22,0.6)"/>
      {/* Wheel spokes */}
      {[0, 60, 120, 180, 240, 300].map(a => (
        <line key={a}
          x1={145 + 12 * Math.cos(a * Math.PI / 180)}
          y1={218 + 12 * Math.sin(a * Math.PI / 180)}
          x2={145 + 23 * Math.cos(a * Math.PI / 180)}
          y2={218 + 23 * Math.sin(a * Math.PI / 180)}
          stroke="rgba(249,115,22,0.4)" strokeWidth="2" strokeLinecap="round"
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map(a => (
        <line key={a}
          x1={385 + 12 * Math.cos(a * Math.PI / 180)}
          y1={218 + 12 * Math.sin(a * Math.PI / 180)}
          x2={385 + 23 * Math.cos(a * Math.PI / 180)}
          y2={218 + 23 * Math.sin(a * Math.PI / 180)}
          stroke="rgba(249,115,22,0.4)" strokeWidth="2" strokeLinecap="round"
        />
      ))}
      {/* Headlight */}
      <path d="M458 155 L468 145 L475 158 L468 168 Z" fill="rgba(249,230,150,0.8)" filter="url(#glow)"/>
      <path d="M60 155 L50 145 L43 158 L50 168 Z" fill="rgba(200,50,50,0.6)"/>
      {/* Glow filter */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      {/* Tool indication */}
      <circle cx="270" cy="185" r="18" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <text x="270" y="190" textAnchor="middle" fill="rgba(249,115,22,0.8)" fontSize="16" fontWeight="bold">✦</text>
      {/* Ground shadow */}
      <ellipse cx="265" cy="258" rx="220" ry="14" fill="rgba(0,0,0,0.4)"/>
    </svg>
  )
}

// ── Components ─────────────────────────────────────────────
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="star" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function ServiceCard({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: string }) {
  return (
    <div className={`service-card reveal ${delay}`}>
      <div className="service-icon" style={{ color: 'var(--amber)' }}>
        {icon}
      </div>
      <div className="service-title">{title}</div>
      <p className="service-desc">{desc}</p>
    </div>
  )
}

type FAQItemProps = { question: string; answer: string; open: boolean; onClick: () => void }
function FAQItem({ question, answer, open, onClick }: FAQItemProps) {
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon"><IconPlus size={20} /></span>
      </button>
      <div className="faq-answer" aria-hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

// ── Main Page ──────────────────────────────────────────────
function BengkelPanggil() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const WA_NUMBER = '6285199558339'
  const WA_MSG = encodeURIComponent('Halo, butuh bantuan bengkel mobil panggilan. Bisa datang ke lokasi?')
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const faqs = [
    {
      q: 'Berapa lama teknisi datang ke lokasi saya?',
      a: 'Teknisi kami menargetkan tiba dalam 30–60 menit setelah pemesanan terkonfirmasi, tergantung lokasi dan kondisi lalu lintas di area Jakarta, Tangerang, Bekasi, atau Depok. Untuk kondisi darurat, kami prioritaskan kecepatanrespons.',
    },
    {
      q: 'Apakah bengkel mobil panggilan ini tersedia 24 jam?',
      a: 'Ya, kami beroperasi 24 jam sehari, 7 hari seminggu termasuk hari libur. Tim on-call kami siap merespons kapan saja, termasuk dini hari saat kendaraan Anda mogok di jalan.',
    },
    {
      q: 'Area mana saja yang dilayani?',
      a: 'Kami melayani seluruh wilayah Jakarta (Pusat, Utara, Selatan, Timur, Barat), Tangerang (kota dan selatan termasuk Serpong, BSD, Ciledug), serta Depok.',
    },
    {
      q: 'Berapa biaya panggilan dan bagaimana estimasi harga?',
      a: 'Biaya kunjungan mulai Rp 150.000 untuk area dalam kota. Setelah diagnosa awal, teknisi memberikan estimasi biaya perbaikan secara transparan sebelum pekerjaan dimulai. Tidak ada biaya tersembunyi — Anda menyetujui harga sebelum kami mulai bekerja.',
    },
    {
      q: 'Apakah spare part yang digunakan original/asli?',
      a: 'Kami menggunakan spare part original (OEM) atau aftermarket berkualitas tinggi sesuai pilihan dan anggaran pelanggan. Semua part dilengkapi garansi resmi dan struk pembelian. Kami tidak pernah menggunakan spare part palsu atau KW.',
    },
    {
      q: 'Bagaimana cara memesan layanan bengkel mobil panggilan?',
      a: 'Cukup hubungi kami via WhatsApp atau telepon. Beritahu lokasi, jenis kendaraan, dan masalah yang dialami. Tim kami akan konfirmasi ketersediaan teknisi dan estimasi waktu kedatangan dalam hitungan menit.',
    },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav className="nav" role="navigation" aria-label="Navigasi utama">
        <a href="/" className="nav-logo" aria-label="Bengkel Mobil Panggilan - Beranda">
          <span className="nav-logo-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f0e0e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </span>
          Bengkel Mobil Panggilan
        </a>
        <ul className="nav-links">
          <li><a href="#layanan">Layanan</a></li>
          <li><a href="#cara-kerja">Cara Kerja</a></li>
          <li><a href="#coverage">Area</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href={WA_URL} className="btn-wa" target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp">
          <IconWhatsApp size={16} /> Hubungi Sekarang
        </a>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <header className="hero" role="banner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span className="section-label" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
              Tersedia 24/7 · Jakarta, Tangerang, Bekasi, Depok
            </span>
          </div>

          <h1>
            Bengkel Mobil
            <em>Panggilan</em>
            Ke Lokasi Anda
          </h1>

          <p className="hero-desc">
            Kendaraan bermasalah? Teknisi kami datang ke lokasi Anda dalam{' '}
            <strong style={{ color: 'var(--amber)' }}>30 menit</strong>. Servis berkala,
            perbaikan mesin, mogok mendadak — semua ditangani di tempat, profesional dan transparan.
          </p>

          <div className="hero-cta">
            <a href={WA_URL} className="btn-wa btn-wa-lg" target="_blank" rel="noopener noreferrer">
              <IconWhatsApp size={18} /> Chat WhatsApp
            </a>
            <a href={WA_URL} className="btn-outline">
              <IconPhone size={16} /> Telp Langsung
            </a>
          </div>

          <div className="hero-stats" role="list" aria-label="Statistik layanan">
            <div role="listitem">
              <div className="hero-stat-num">10<span className="amber">+</span></div>
              <div className="hero-stat-label">Ulasan bintang 5</div>
            </div>
            <div role="listitem">
              <div className="hero-stat-num">4.9<span className="amber">/5</span></div>
              <div className="hero-stat-label">Rating rata-rata</div>
            </div>
            <div role="listitem">
              <div className="hero-stat-num">2<span className="amber">th</span></div>
              <div className="hero-stat-label">Tahun pengalaman</div>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-bg" />
          <div className="hero-grid-lines" />
          <div className="hero-visual-glow" />
          <div className="hero-car-svg">
            <CarIllustration />
          </div>
          <div className="hero-coverage-pill" role="complementary" aria-label="Area layanan">
            <div className="hero-coverage-title">Area Layanan</div>
            <div className="hero-coverage-tags">
              {['Jakarta', 'Tangerang', 'Depok'].map(area => (
                <div key={area} className="hero-coverage-tag">{area}</div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="divider" />

      {/* ── Layanan ────────────────────────────────────────── */}
      <section id="layanan" aria-labelledby="layanan-title">
        <div className="section">
          <div className="section-header">
            <div className="section-label">Layanan Kami</div>
            <h2 className="section-title" id="layanan-title">
              Semua Masalah Kendaraan,<br />Satu Solusi Panggilan
            </h2>
          </div>

          <div className="services-grid" role="list" aria-label="Daftar layanan bengkel">
            <ServiceCard
              icon={<IconEngine size={24} />}
              title="Perbaikan Mesin"
              desc="Diagnosa dan perbaikan masalah mesin: overheat, bunyi aneh, tenaga drop, mesin tidak mau hidup. Teknisi kami menggunakan scan tool OBD-II untuk diagnosa akurat."
              delay="reveal-delay-1"
            />
            <ServiceCard
              icon={<IconWrench size={24} />}
              title="Servis Berkala"
              desc="Ganti oli, filter udara, filter oli, cek semua cairan kendaraan. Paket servis berkala 5.000 km, 10.000 km, dan 20.000 km tersedia langsung di lokasi Anda."
              delay="reveal-delay-2"
            />
            <ServiceCard
              icon={<IconBrake size={24} />}
              title="Perbaikan Rem"
              desc="Ganti kampas rem, cakram, kaliper, minyak rem. Rem bergetar atau berdecit? Kami periksa dan perbaiki sistem pengereman secara menyeluruh."
              delay="reveal-delay-3"
            />
            <ServiceCard
              icon={<IconBolt size={24} />}
              title="Kelistrikan Mobil"
              desc="Aki soak, dinamo starter, alternator, sistem lampu, power window, central lock. Masalah kelistrikan ditangani dengan alat ukur multimeter dan scope digital."
              delay="reveal-delay-1"
            />
            <ServiceCard
              icon={<IconTow size={24} />}
              title="Mobil Mogok Darurat"
              desc="Kendaraan mogok tiba-tiba di jalan? Kami respons dalam 60 menit. Termasuk layanan jumper aki, tambal ban, kehabisan bahan bakar, dan penanganan darurat lainnya."
              delay="reveal-delay-2"
            />
            <ServiceCard
              icon={<IconAC size={24} />}
              title="Servis AC Mobil"
              desc="AC tidak dingin, freon habis, kompresor rusak, evaporator kotor. Isi freon, pembersihan evaporator, dan perbaikan komponen AC dilakukan di tempat Anda."
              delay="reveal-delay-3"
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Keunggulan ─────────────────────────────────────── */}
      <section id="keunggulan" aria-labelledby="keunggulan-title">
        <div className="section">
          <div className="advantages-wrap">
            <div>
              <div className="section-header">
                <div className="section-label">Mengapa Memilih Kami</div>
                <h2 className="section-title" id="keunggulan-title">
                  Standar Bengkel<br />Profesional, Datang<br />ke Lokasi Anda
                </h2>
              </div>
              <div className="advantage-list" role="list">
                {[
                  {
                    num: '01',
                    title: 'Respons 60 Menit',
                    desc: 'Teknisi terdekat dikirim dalam 60 menit setelah konfirmasi. Kami pantau jalur lalu lintas real-time untuk estimasi akurat.',
                  },
                  {
                    num: '02',
                    title: 'Teknisi Berpengalaman',
                    desc: 'Semua teknisi kami memiliki pengalaman Otomotif lebih dari 5 tahun. Terlatih untuk kendaraan Jepang, Korea, dan Eropa.',
                  },
                  {
                    num: '03',
                    title: 'Spare Part Bergaransi',
                    desc: 'Hanya menggunakan spare part original (OEM) atau aftermarket terpercaya. Setiap komponen dilengkapi garansi dan nota resmi.',
                  },
                  {
                    num: '04',
                    title: 'Harga Transparan',
                    desc: 'Estimasi biaya diberikan sebelum pekerjaan dimulai. Tidak ada biaya kejutan. Anda setujui harga terlebih dahulu, baru kami kerjakan.',
                  },
                  {
                    num: '05',
                    title: 'Layanan 24 Jam / 7 Hari',
                    desc: 'Tersedia setiap hari, termasuk hari libur dan akhir pekan. Darurat tengah malam pun kami standby.',
                  },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="advantage-item reveal" role="listitem">
                    <span className="advantage-num">{num}</span>
                    <div className="advantage-body">
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="advantages-visual reveal reveal-delay-2" aria-hidden="true">
              <div className="advantages-visual-glow" />
              <div style={{ textAlign: 'center', padding: '2rem', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: 'rgba(249,115,22,0.1)',
                  border: '2px solid rgba(249,115,22,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 900, color: 'var(--amber)', lineHeight: 1 }}>4.9</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: 4 }}>Rating dari 312 pelanggan</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 4, margin: '1rem 0' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--amber)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '1rem' }}>
                  {[
                    { label: 'Perbaikan selesai di lokasi', val: '94%' },
                    { label: 'Pelanggan repeat order', val: '78%' },
                    { label: 'Tepat waktu (≤30 mnt)', val: '91%' },
                  ].map(({ label, val }) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{label}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--amber)', fontSize: '1rem' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Cara Kerja ─────────────────────────────────────── */}
      <section id="cara-kerja" className="steps-section" aria-labelledby="cara-kerja-title">
        <div className="section">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-label">Mudah & Cepat</div>
            <h2 className="section-title" id="cara-kerja-title">Cara Memesan Bengkel Panggilan</h2>
          </div>

          <div className="steps-grid" role="list" aria-label="Langkah pemesanan">
            {[
              {
                num: '1',
                title: 'Hubungi Kami',
                desc: 'Chat WhatsApp atau telepon. Beritahu lokasi, jenis kendaraan, dan masalah yang dialami.',
                delay: 'reveal-delay-1',
              },
              {
                num: '2',
                title: 'Konfirmasi & Dispatch',
                desc: 'Kami konfirmasi ketersediaan dan kirim teknisi terdekat. Estimasi waktu kedatangan diberikan real-time.',
                delay: 'reveal-delay-2',
              },
              {
                num: '3',
                title: 'Diagnosa & Perbaikan',
                desc: 'Teknisi tiba, lakukan diagnosa, berikan estimasi biaya. Setelah disetujui, perbaikan dimulai di lokasi Anda.',
                delay: 'reveal-delay-3',
              },
              {
                num: '4',
                title: 'Pembayaran & Garansi',
                desc: 'Bayar setelah pekerjaan selesai. Terima invoice resmi dan garansi perbaikan. Kami pastikan kendaraan Anda aman dikendarai.',
                delay: 'reveal-delay-4',
              },
            ].map(({ num, title, desc, delay }) => (
              <div key={num} className={`step reveal ${delay}`} role="listitem">
                <div className="step-circle" aria-hidden="true">
                  <span className="step-num">{num}</span>
                </div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Testimonials ───────────────────────────────────── */}
      <section id="testimoni" aria-labelledby="testimoni-title">
        <div className="section">
          <div className="section-header">
            <div className="section-label">Kata Mereka</div>
            <h2 className="section-title" id="testimoni-title">
              Dipercaya Oleh<br />Pemilik Kendaraan
            </h2>
          </div>

          <div className="testimonials-grid" role="list" aria-label="Testimoni pelanggan">
            <div className="testimonial-card featured reveal" role="listitem">
              <StarRating count={5} />
              <p className="testimonial-text">
                "Mobil saya mogok di Tol Dalam Kota pukul 9 malam. Dalam 45 menit teknisi Bengkel Mobil Panggilan sudah di lokasi. Masalah aki drop langsung diatasi di pinggir jalan. Harga sesuai estimasi, tidak ada biaya tambahan. Luar biasa responsif!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: '#f97316' }}>RH</div>
                <div>
                  <div className="author-name">Bapak Haryanto</div>
                  <div className="author-location">
                    <IconLocation size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Kuningan, Jakarta Selatan
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="testimonial-card reveal reveal-delay-1" role="listitem">
                <StarRating count={5} />
                <p className="testimonial-text">
                  "Servis berkala Toyota Avanza saya, teknisi datang ke rumah di Serpong. Sangat profesional, semua cek komprehensif. Lebih mudah dari harus ke bengkel konvensional."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: '#3b82f6' }}>DW</div>
                  <div>
                    <div className="author-name">Ibu Wulandari</div>
                    <div className="author-location">
                      <IconLocation size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> BSD, Tangerang Selatan
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card reveal reveal-delay-2" role="listitem">
                <StarRating count={5} />
                <p className="testimonial-text">
                  "AC mobil tidak dingin, langsung WA Bengkel Mobil Panggilan. Teknisi datang ke kantor saya di Bekasi, isi freon + servis evap. Sekarang AC dingin lagi. Recommended!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: '#22c55e' }}>AP</div>
                  <div>
                    <div className="author-name">Bapak Pratama</div>
                    <div className="author-location">
                      <IconLocation size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Pasar Minggu, Jakarta
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="testimonial-card reveal reveal-delay-1" role="listitem">
                <StarRating count={5} />
                <p className="testimonial-text">
                  "Rem Honda CR-V bergetar, dideteksi cakram sudah tipis. Teknisi langsung ganti di parkiran kantor di Depok. Prosesnya cepat dan bersih."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: '#8b5cf6' }}>SR</div>
                  <div>
                    <div className="author-name">Ibu Rahayu</div>
                    <div className="author-location">
                      <IconLocation size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Margonda, Depok
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card reveal reveal-delay-2" role="listitem">
                <StarRating count={5} />
                <p className="testimonial-text">
                  "Pakai Bengkel Mobil Panggilan sudah 3x untuk servis berkala. Harga konsisten, kualitas bagus, dan teknisi selalu on-time. Sudah jadi langganan tetap saya."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: '#ef4444' }}>BK</div>
                  <div>
                    <div className="author-name">Bapak Kurniawan</div>
                    <div className="author-location">
                      <IconLocation size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Cibubur, Jakarta Timur
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Coverage ───────────────────────────────────────── */}
      <section id="coverage" className="coverage-section" aria-labelledby="coverage-title">
        <div className="section">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-label">Jangkauan Kami</div>
            <h2 className="section-title" id="coverage-title">Area Layanan Bengkel Panggilan</h2>
            <p style={{ marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0' }}>
              Kami hadir di seluruh wilayah Jabodetabek. Dari pusat kota hingga kawasan pinggiran, teknisi kami siap menjangkau lokasi Anda.
            </p>
          </div>

          <div className="coverage-grid" role="list" aria-label="Area layanan">
            {[
              {
                name: 'Jakarta',
                detail: 'Pusat · Utara · Selatan\nTimur · Barat',
                color: '#f97316',
              },
              {
                name: 'Tangerang',
                detail: 'Kota Tangerang · Tangsel\nSerpong · BSD · Ciledug',
                color: '#fb923c',
              },
              {
                name: 'Bekasi',
                detail: 'Kota Bekasi · Kab. Bekasi\nCikarang · Tambun',
                color: '#ea580c',
              },
              {
                name: 'Depok',
                detail: 'Margonda · Beji · Sawangan\nCimanggis · Sukmajaya',
                color: '#c2410c',
              },
            ].map(({ name, detail, color }) => (
              <div key={name} className="coverage-card reveal" role="listitem">
                <div className="coverage-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="coverage-name" style={{ color }}>{name}</div>
                <div className="coverage-detail">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section id="faq" aria-labelledby="faq-title">
        <div className="section" style={{ maxWidth: 800 }}>
          <div className="section-header">
            <div className="section-label">FAQ</div>
            <h2 className="section-title" id="faq-title">
              Pertanyaan yang Sering<br />Ditanyakan
            </h2>
          </div>

          <div className="faq-list" role="list">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                open={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA Bottom ─────────────────────────────────────── */}
      <section className="cta-section" aria-labelledby="cta-title">
        <div className="cta-glow" aria-hidden="true" />
        <div className="cta-inner">
          <h2 id="cta-title">
            Kendaraan Bermasalah?<br /><em>Kami Datang</em> ke Lokasi Anda
          </h2>
          <p>
            Jangan tunggu sampai mogok total. Hubungi Bengkel Mobil Panggilan sekarang — teknisi kami siap meluncur ke lokasi Anda di Jakarta, Tangerang, Bekasi, dan Depok.
          </p>
          <div className="cta-buttons">
            <a href= className="btn-wa btn-wa-lg" target="_blank" rel="noopener noreferrer">
              <IconWhatsApp size={20} /> Chat WhatsApp Sekarang
            </a>
            <a href={WA_URL} className="btn-outline">
              <IconPhone size={18} /> +{WA_NUMBER}
            </a>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '1.5rem' }}>
            Tersedia 24 jam · 7 hari seminggu · Termasuk hari libur
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="footer" role="contentinfo">
        <div>
          <a href="https://montirmotor.com/mobil" className="nav-logo" style={{ marginBottom: 4 }} aria-label="BengkelMobilPanggilan">
            <span className="nav-logo-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0f0e0e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </span>
            Bengkel Mobil Panggilan
          </a>
          <div className="footer-copy">Bengkel Mobil Panggilan Profesional · Jakarta, Tangerang, Bekasi, Depok</div>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#layanan" style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Layanan</a>
          <a href="#cara-kerja" style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Cara Kerja</a>
          <a href="#faq" style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none' }}>FAQ</a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--amber)', textDecoration: 'none', fontWeight: 600 }}>
            WhatsApp
          </a>
        </div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} Bengkel Mobil Panggilan</div>
      </footer>
    </div>
  )
}
