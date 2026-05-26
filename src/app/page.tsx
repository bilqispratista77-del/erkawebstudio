'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowDown,
  AlertTriangle,
  X,
  TrendingDown,
  EyeOff,
  MessageCircleOff,
  ShieldX,
  SearchX,
  LayoutGrid,
  Sparkles,
  CheckCircle2,
  Globe,
  Zap,
  MessageCircle,
  Star,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Palette,
  Rocket,
  Gift,
  Flame,
  Heart,
  Target,
  MonitorSmartphone,
  HeadphonesIcon,
  MousePointerClick,
  Building2,
  Briefcase,

  ExternalLink,
  Layers,
  Layout,
  ShoppingCart,
  Home as HomeIcon,
  Mail,
  ChevronLeft,
  ChevronRight,
  Quote,
  ClipboardList,
  CalendarCheck,
  Facebook,
  Instagram,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

/* ───────────── Animated Section Wrapper ───────────── */
function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ───────────── Stagger Children ───────────── */
function StaggerItem({
  children,
  index,
  className = '',
}: {
  children: React.ReactNode
  index: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ───────────── WhatsApp CTA Button ───────────── */
function WhatsAppCTA({ text, className = '', size = 'default' }: { text?: string; className?: string; size?: 'default' | 'lg' | 'sm' }) {
  const whatsappNumber = '6285196245196'
  const message = encodeURIComponent('Halo! Saya tertarik dengan jasa pembuatan website. Bisa info lebih lanjut?')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Button
        size={size}
        className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-600/25 ${className}`}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        {text || 'Chat WhatsApp Sekarang'}
      </Button>
    </a>
  )
}

/* ───────────── PAIN ITEMS ───────────── */
const painItems = [
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Customer Hilang ke Kompetitor',
    desc: 'Mereka cari bisnismu di Google... nemu kompetitor yang punya website. Dan mereka pergi.',
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: 'Tidak Terlihat di Google',
    desc: 'Kalau bisnismu tidak muncul di halaman pertama = bisnismu tidak eksis di mata calon customer.',
  },
  {
    icon: <ShieldX className="h-5 w-5" />,
    title: 'Tidak Dipercaya Calon Customer',
    desc: '"Lho, ini bisnis beneran atau nggak sih?" Tanpa website, orang ragu. Ragu = tidak jadi order.',
  },
  {
    icon: <MessageCircleOff className="h-5 w-5" />,
    title: 'Hanya Andalkan Instagram',
    desc: 'Instagram bisa down. Algoritma berubah. Follower bukan berarti buyer. Kamu tidak punya aset digital sendiri.',
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: 'Bisnis Terlihat Kecil',
    desc: 'Tanpa website, bisnismu terlihat seperti usaha sampingan. Padahal kamu serius.',
  },
  {
    icon: <SearchX className="h-5 w-5" />,
    title: 'Iklan Tidak Maksimal',
    desc: 'Iklan mahal, tapi mendarat di mana? Tanpa website, iklan = buang uang.',
  },
  {
    icon: <X className="h-5 w-5" />,
    title: 'Order Berantakan',
    desc: 'DM ke sini, chat ke sana. Tidak ada sistem. Customer bingung, pesanan tercecer.',
  },
  {
    icon: <TrendingDown className="h-5 w-5" />,
    title: 'Kalah dari Bisnis Online',
    desc: 'Kompetitormu sudah punya website, sudah muncul di Google. Kamu masih manual.',
  },
]

/* ───────────── SOLUTION ITEMS ───────────── */
const solutionItems = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Muncul di Google 24/7',
    desc: 'Website bekerja nonstop. Calon customer menemukanmu bahkan saat kamu tidur.',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Trust Level Naik Drastis',
    desc: 'Website = bukti bisnismu serius. Customer langsung percaya.',
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Order dari HP Kapan Saja',
    desc: 'Responsive design = customer bisa akses dan order nyaman dari mana saja.',
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: 'WhatsApp Ramai Orderan',
    desc: 'Tombol WhatsApp di website. Dari lihat → tertarik → chat → deal.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Bisnis Naik Kelas',
    desc: 'Dari "usaha kecil" jadi "brand profesional". Persepsi berubah, profit ikut berubah.',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Iklan Lebih Efektif',
    desc: 'Iklan mendarat di website yang meyakinkan. Conversion rate naik, ROI berlipat.',
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: 'Branding Lebih Kuat',
    desc: 'Website = rumah digital bisnismu. Brand story, testimoni, portofolio tampil maksimal.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Booking & Order Otomatis',
    desc: 'Tidak perlu balas DM satu-satu. Customer bisa langsung booking atau isi form.',
  },
]

/* ───────────── LAYANAN (SERVICES) ───────────── */
const services = [
  {
    icon: <Building2 className="h-7 w-7" />,
    title: 'Company Profile',
    desc: 'Website korporat yang menampilkan visi, misi, layanan, dan portofolio bisnismu secara profesional.',
    includes: ['Halaman Tentang Kami', 'Daftar Layanan', 'Portofolio / Galeri', 'Form Kontak & WhatsApp', 'Testimoni Client'],
  },
  {
    icon: <Layout className="h-7 w-7" />,
    title: 'Landing Page',
    desc: 'Halaman penjualan fokus yang dirancang untuk mengkonversi pengunjung jadi lead dan customer.',
    includes: ['Headline Persuasif', 'CTA Strategis', 'Integrasi WhatsApp', 'Social Proof', 'Desain High-Converting'],
  },
  {
    icon: <ShoppingCart className="h-7 w-7" />,
    title: 'Website Toko Online',
    desc: 'Tampilkan produk atau jasa lengkap dengan harga, foto, dan pemesanan langsung via WhatsApp.',
    includes: ['Katalog Produk', 'Filter & Pencarian', 'Tombol Order WhatsApp', 'Halaman Detail Produk', 'Keranjang Belanja'],
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: 'Website E-Commerce',
    desc: 'Toko online lengkap dengan sistem pembayaran, manajemen stok, dan dashboard admin untuk mengelola transaksi.',
    includes: ['Sistem Pembayaran Online', 'Manajemen Stok & Produk', 'Dashboard Admin', 'Integrasi Kurir', 'Laporan Penjualan'],
  },
  {
    icon: <Rocket className="h-7 w-7" />,
    title: 'Website Ekspor',
    desc: 'Website profesional untuk bisnis ekspor dengan tampilan internasional, katalog produk, dan inquiry form.',
    includes: ['Desain Internasional', 'Katalog Produk Ekspor', 'Form Inquiry Global', 'Multi-Bahasa', 'Profil Perusahaan'],
  },
  {
    icon: <ClipboardList className="h-7 w-7" />,
    title: 'Website Inventory',
    desc: 'Sistem manajemen stok dan inventaris untuk mengelola gudang, barang masuk-keluar, dan laporan stok secara real-time.',
    includes: ['Manajemen Stok Real-time', 'Barcode & QR Scanner', 'Laporan Stok & Opname', 'Notifikasi Stok Minimum', 'Multi-Gudang & Kategori'],
  },
]

/* ───────────── PORTFOLIO ───────────── */
const portfolioItems = [
  {
    icon: <Heart className="h-5 w-5" />,
    title: 'Website Klinik',
    desc: 'Layanan, booking pasien, testimoni, dan info dokter.',
    bgColor: 'bg-rose-50',
    iconBg: 'bg-rose-500',
    dotColor: 'bg-rose-400',
    btnColor: 'bg-rose-500',
    preview: '/klinik.png',
    link: 'https://klinik-nu.vercel.app/',
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: 'Company Profile',
    desc: 'Profil perusahaan, portofolio, dan form kontak.',
    bgColor: 'bg-sky-50',
    iconBg: 'bg-sky-500',
    dotColor: 'bg-sky-400',
    btnColor: 'bg-sky-500',
    preview: '/properti.png',
    link: 'https://properti-indol.vercel.app/',
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: 'Website Konsultan',
    desc: 'Layanan, portofolio, testimoni, dan booking.',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-500',
    dotColor: 'bg-blue-400',
    btnColor: 'bg-blue-500',
    preview: '/notaris.png',
    link: 'https://notaris-eight.vercel.app/',
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: 'Web App Inventory',
    desc: 'Kelola stok barang, laporan masuk-keluar, dan alert stok habis.',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-500',
    dotColor: 'bg-purple-400',
    btnColor: 'bg-purple-500',
    preview: '/web-inventory.png',
    link: '#',
  },
  {
    icon: <CalendarCheck className="h-5 w-5" />,
    title: 'Web App Appointment',
    desc: 'Booking janji temu, jadwal otomatis, dan reminder notifikasi.',
    bgColor: 'bg-rose-50',
    iconBg: 'bg-rose-500',
    dotColor: 'bg-rose-400',
    btnColor: 'bg-rose-500',
    preview: '/web-appointment.png',
    link: '#',
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: 'Website Toko Online',
    desc: 'Katalog produk, order WhatsApp, dan keranjang belanja.',
    bgColor: 'bg-amber-50',
    iconBg: 'bg-amber-500',
    dotColor: 'bg-amber-400',
    btnColor: 'bg-amber-500',
    preview: '/herbal.png',
    link: 'https://herbal-teal.vercel.app/',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Website E-Commerce',
    desc: 'Pembayaran online, manajemen stok, dan dashboard admin.',
    bgColor: 'bg-emerald-50',
    iconBg: 'bg-emerald-500',
    dotColor: 'bg-emerald-400',
    btnColor: 'bg-emerald-500',
    preview: '/e-commerce.png',
    link: 'https://www.mitrajasapro.com/',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Website Kursus',
    desc: 'Daftar kursus, pembayaran online, dan sertifikat.',
    bgColor: 'bg-orange-50',
    iconBg: 'bg-orange-500',
    dotColor: 'bg-orange-400',
    btnColor: 'bg-orange-500',
    preview: '/bimbel.png',
    link: 'https://bimbel-murex.vercel.app/',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Website Ekspor',
    desc: 'Katalog produk internasional, inquiry form, dan multi-bahasa.',
    bgColor: 'bg-teal-50',
    iconBg: 'bg-teal-500',
    dotColor: 'bg-teal-400',
    btnColor: 'bg-teal-500',
    preview: '/ekspor.png',
    link: 'https://ekspor-ten.vercel.app/',
  },
]

/* ───────────── FEATURES ───────────── */
const features = [
  { icon: <MonitorSmartphone className="h-5 w-5" />, title: 'Responsive Design', desc: 'Tampil sempurna di HP, tablet, dan laptop' },
  { icon: <MessageCircle className="h-5 w-5" />, title: 'Integrasi WhatsApp, Google Map & Sosmed', desc: 'Terhubung langsung ke WhatsApp, lokasi Google Map, dan media sosial bisnismu' },
  { icon: <Globe className="h-5 w-5" />, title: 'SEO Friendly', desc: 'Struktur dioptimalkan agar mudah ditemukan Google' },
  { icon: <Zap className="h-5 w-5" />, title: 'Loading Super Cepat', desc: 'Performa tinggi agar customer tidak kabur' },
  { icon: <Palette className="h-5 w-5" />, title: 'Desain Profesional', desc: 'Tampilan modern yang bikin customer percaya' },
  { icon: <MousePointerClick className="h-5 w-5" />, title: 'CTA Strategis', desc: 'Penempatan tombol action yang mengkonversi' },
  { icon: <Shield className="h-5 w-5" />, title: 'SSL Security', desc: 'Website aman dengan sertifikat SSL' },
  { icon: <HeadphonesIcon className="h-5 w-5" />, title: 'Support 30 Hari', desc: 'Bantuan teknis selama 30 hari setelah launch' },
]

/* ───────────── TESTIMONIALS (aligned with portfolio) ───────────── */
const testimonials = [
  {
    name: 'Dr. Rina Susanti',
    business: 'Owner Klinik Kecantikan',
    text: 'Sebelum punya website, pasien cuma dari yang lewat atau rekomendasi. Sekarang setiap hari ada yang booking lewat website langsung. Pasien dari Google makin banyak, omzet naik 3x dalam 2 bulan!',
    rating: 5,
    avatar: '👩🏻',
  },
  {
    name: 'Andi Prasetyo',
    business: 'Direktur PT Properti Indol',
    text: 'Company profile website kami jadi pintu masuk utama bagi investor dan calon pembeli. Tampilan profesional, info lengkap, dan langsung meyakinkan. Closing rate naik signifikan!',
    rating: 5,
    avatar: '👨🏼',
  },
  {
    name: 'Ratna Dewi, S.H.',
    business: 'Konsultan Notaris & Hukum',
    text: 'Klien sekarang bisa langsung lihat layanan dan booking konsultasi lewat website. Tidak perlu repot jelaskan ulang. Kredibilitas kami langsung naik di mata klien baru!',
    rating: 5,
    avatar: '👩🏽',
  },
  {
    name: 'Hendra Wijaya',
    business: 'Owner Toko Herbal Sehat Alami',
    text: 'Dulu cuma jualan di toko fisik, jangkauannya terbatas. Setelah bikin website toko online, order masuk dari luar kota setiap hari. WhatsApp ramai, pelanggan baru terus bertambah!',
    rating: 5,
    avatar: '👨🏽',
  },
  {
    name: 'Budi Santoso',
    business: 'Owner Mitra Jasa Pro',
    text: 'Awalnya ragu investasi website e-commerce, tapi setelah jadi... WOW. Penjualan online langsung naik drastis. Sistem pembayaran otomatis, manajemen stok jadi rapi. Worth it banget!',
    rating: 5,
    avatar: '👨🏻',
  },
  {
    name: 'Siti Nurhaliza',
    business: 'Pengelola Bimbel Edustar',
    text: 'Website kursus kami jadi magnet siswa baru. Orang tua bisa langsung lihat program, harga, dan daftar online. Pendaftaran naik 4x sejak website launch!',
    rating: 5,
    avatar: '👩🏻',
  },
  {
    name: 'Ahmad Fauzi',
    business: 'Direktur PT Ekspor Nusantara',
    text: 'Website ekspor kami mendapat inquiry dari buyer internasional dalam minggu pertama! Tampilan profesional dan multi-bahasa bikin buyer luar negeri langsung percaya.',
    rating: 5,
    avatar: '👨🏾',
  },
]

/* ───────────── BONUSES ───────────── */
const bonuses = [
  { icon: <Globe className="h-5 w-5" />, title: 'Gratis Domain .com', desc: 'Nama domain profesional selama 1 tahun' },
  { icon: <Shield className="h-5 w-5" />, title: 'Gratis SSL Certificate', desc: 'Website aman dan terpercaya' },
  { icon: <Globe className="h-5 w-5" />, title: 'Gratis SEO Dasar', desc: 'Optimasi agar muncul di Google' },
  { icon: <MessageCircle className="h-5 w-5" />, title: 'Gratis Integrasi WhatsApp', desc: 'Tombol chat langsung ke WhatsAppmu' },
  { icon: <Palette className="h-5 w-5" />, title: 'Gratis Revisi Desain 2x', desc: 'Pastikan tampilan sesuai keinginanmu' },
  { icon: <HeadphonesIcon className="h-5 w-5" />, title: 'Gratis Support 30 Hari', desc: 'Bantuan teknis setelah website launch' },
]

/* ───────────── Testimonial Slider ───────────── */
function TestimonialSlider({ items }: { items: typeof testimonials }) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const total = items.length
  const visibleCount = 3 // show 3 cards at a time on desktop
  const slideCount = total // each nav moves by 1 card position

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  // Auto-play
  useEffect(() => {
    if (isPaused) return
    timeoutRef.current = setTimeout(() => {
      next()
    }, 5000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, isPaused, next])

  // Get visible items with wrapping
  const getVisibleItems = () => {
    const visible = []
    for (let i = 0; i < visibleCount; i++) {
      visible.push(items[(current + i) % total])
    }
    return visible
  }

  const visibleItems = getVisibleItems()

  return (
    <div
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards Grid */}
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {visibleItems.map((item, i) => (
          <Card key={`${current}-${i}`} className="bg-white border-0 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-100/50 transition-shadow duration-300">
            <CardContent className="p-0">
              {/* Gradient Top Bar */}
              <div className={`h-1.5 ${
                i === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                i === 1 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                'bg-gradient-to-r from-violet-400 to-violet-600'
              }`} />

              <div className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className={`h-8 w-8 ${
                    i === 0 ? 'text-blue-200' :
                    i === 1 ? 'text-purple-200' :
                    'text-violet-200'
                  }`} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 leading-relaxed text-sm mb-5 line-clamp-4">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Avatar & Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`h-11 w-11 rounded-full flex items-center justify-center text-xl shrink-0 ${
                    i === 0 ? 'bg-blue-50 border-2 border-blue-100' :
                    i === 1 ? 'bg-purple-50 border-2 border-purple-100' :
                    'bg-violet-50 border-2 border-violet-100'
                  }`}>
                    {item.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-800 text-sm truncate">{item.name}</p>
                    <p className={`text-xs font-medium truncate ${
                      i === 0 ? 'text-blue-500' :
                      i === 1 ? 'text-purple-500' :
                      'text-violet-500'
                    }`}>{item.business}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-7 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm'
                  : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="h-10 w-10 rounded-full border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

/* ━━━━━━━━━━━━━━━━━━ MAIN PAGE ━━━━━━━━━━━━━━━━━━ */
export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Erka Web Studio" className="h-9 w-9 rounded-lg object-cover shadow-md" />
            <span className="font-bold text-lg text-slate-800">Erka <span className="text-blue-600">Web Studio</span></span>
          </div>
          <WhatsAppCTA text="Hubungi Kami" size="sm" />
        </div>
      </nav>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
        <div className="absolute inset-0 bg-[url('/hero-main.png')] bg-cover bg-center opacity-[0.08]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <Badge className="bg-white/15 text-white border-white/25 mb-6 text-sm px-4 py-1.5 font-medium backdrop-blur-sm">
                  <Flame className="mr-1.5 h-3.5 w-3.5" />
                  Jasa Pembuatan Website Profesional
                </Badge>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.1] tracking-tight">
                Bisnismu Tanpa Website?{' '}
                <span className="text-purple-300">Customer Lari ke Kompetitor</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg text-blue-100/90 leading-relaxed max-w-xl">
                Setiap hari calon customer mencari bisnismu di Google — dan mereka menemukan kompetitor yang punya website. 
                Berapa lagi customer yang hilang tanpa kamu sadari?
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/6285196245196?text=${encodeURIComponent('Halo! Saya tertarik dengan jasa pembuatan website. Bisa info lebih lanjut?')}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-base px-8 py-6 shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.03]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat WhatsApp Sekarang
                  </Button>
                </a>
                <a href="#portofolio">
                  <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:text-white text-base px-8 py-6 bg-transparent backdrop-blur-sm">
                    Lihat Portofolio
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-5 text-sm text-blue-100/70">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-200" /><span>Gratis Konsultasi</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-200" /><span>Selesai 7 Hari</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-200" /><span>Garansi Revisi</span></div>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.25 }}
              className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10">
                <img src="/hero-solution.png" alt="Profesional wanita bisnis dengan website" className="w-full object-cover rounded-2xl" />
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white text-blue-700 rounded-xl px-5 py-3 shadow-xl border border-slate-100">
                <div className="text-lg font-bold">📱 Responsive</div>
                <div className="text-xs text-slate-500">HP, Tablet & Laptop</div>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-purple-500 text-white rounded-xl px-5 py-3 shadow-xl shadow-purple-500/20">
                <div className="text-lg font-bold">⚡ 7 Hari</div>
                <div className="text-xs text-purple-100">Selesai Jadi</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ NERAKA (PAIN) SECTION ═══════════ */}
      <section id="masalah" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.03),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="bg-red-50 text-red-600 border-red-200 mb-4 font-medium">
              <AlertTriangle className="mr-1.5 h-3.5 w-3.5" />
              Kenyataan Pahit
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Tanpa Website, Bisnismu{' '}
              <span className="text-red-500">Terus Kehilangan Customer</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Ini bukan ketakutan yang tidak beralasan. Ini kenyataan yang terjadi setiap hari pada bisnis tanpa website.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painItems.map((item, i) => (
              <StaggerItem key={i} index={i}>
                <Card className="bg-white border-slate-200 hover:border-red-300 hover:shadow-md transition-all h-full group">
                  <CardContent className="p-5">
                    <div className="h-11 w-11 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SURGA (SOLUTION) SECTION ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/60 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(147,51,234,0.04),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4 font-medium">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Solusi Nyata
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Dengan Website, Bisnismu{' '}
              <span className="text-purple-600">Naik Level</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Website bukan sekadar tampilan. Website adalah mesin penjualan 24 jam yang bekerja untuk kamu.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutionItems.map((item, i) => (
              <StaggerItem key={i} index={i}>
                <Card className="bg-white border-purple-200/60 hover:border-purple-300 hover:shadow-md transition-all h-full group">
                  <CardContent className="p-5">
                    <div className="h-11 w-11 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PORTOFOLIO SECTION ═══════════ */}
      <section id="portofolio" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 font-medium">
              <Layers className="mr-1.5 h-3.5 w-3.5" />
              PORTOFOLIO
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Contoh Website yang Bisa Kami Bangun{' '}
              <span className="text-blue-600">untuk Bisnis Anda</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Setiap website dirancang sesuai kebutuhan dan identitas bisnis.
            </p>
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mt-3 font-medium cursor-pointer">
              Klik untuk Melihat
            </Badge>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <StaggerItem key={i} index={i}>
                <Card className="bg-white border-slate-200 hover:shadow-lg transition-all h-full group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Browser Mockup */}
                    <div className={`${item.bgColor} p-5 pb-4`}>
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200/60 overflow-hidden">
                        {/* Browser Bar */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 bg-slate-50/80">
                          <div className={`h-2.5 w-2.5 rounded-full ${item.dotColor}`} />
                          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                          <div className="ml-3 h-4 flex-1 bg-slate-100 rounded-full" />
                        </div>
                        {/* Page Content */}
                        {'preview' in item && item.preview ? (
                          <div className="relative">
                            <img src={item.preview} alt={item.title} className="w-full object-cover object-top" style={{ aspectRatio: '16/10' }} />
                            {item.link && item.link !== '#' && (
                              <a href={item.link} target="_blank" rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300 group/link">
                                <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 bg-white text-emerald-600 font-semibold text-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                                  <ExternalLink className="h-4 w-4" />
                                  Lihat Website
                                </span>
                              </a>
                            )}
                          </div>
                        ) : (
                          <div className="p-4 space-y-2.5">
                            <div className="h-3 w-3/4 bg-slate-200 rounded" />
                            <div className="h-2 w-full bg-slate-100 rounded" />
                            <div className="h-2 w-5/6 bg-slate-100 rounded" />
                            <div className="h-2 w-2/3 bg-slate-100 rounded" />
                            <div className="flex gap-2 pt-2">
                              <div className={`h-7 w-20 ${item.btnColor} rounded-md`} />
                              <div className="h-7 w-20 bg-slate-200 rounded-md" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Info */}
                    <div className="px-5 py-4 flex items-start gap-3">
                      <div className={`h-10 w-10 shrink-0 rounded-full ${item.iconBg} text-white flex items-center justify-center shadow-sm`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                      {'link' in item && item.link && item.link !== '#' && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                          className="shrink-0 h-9 w-9 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors"
                          title="Lihat website live">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FITUR WEBSITE ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.04),transparent_50%)]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 font-medium">
              <Target className="mr-1.5 h-3.5 w-3.5" />
              Fitur Lengkap
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Website yang <span className="text-blue-600">Beneran Bekerja</span> untuk Bisnismu
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Bukan cuma tampilan cantik. Setiap fitur dirancang untuk mengubah pengunjung jadi customer.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((item, i) => (
              <StaggerItem key={i} index={i}>
                <Card className="bg-white border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full group">
                  <CardContent className="p-5">
                    <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LAYANAN (SERVICES) SECTION ═══════════ */}
      <section id="layanan" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.03),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 font-medium">
              <Briefcase className="mr-1.5 h-3.5 w-3.5" />
              Layanan Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Solusi Website untuk <span className="text-blue-600">Setiap Jenis Bisnis</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnismu. Semua paket termasuk desain profesional dan integrasi WhatsApp.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <StaggerItem key={i} index={i}>
                <Card className="bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all h-full group">
                  <CardContent className="p-7">
                    <div className="h-14 w-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors border border-blue-100">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{item.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {item.includes.map((inc, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />{inc}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-5 border-t border-slate-100">
                      <WhatsAppCTA text="Tanya Harga" size="sm" />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.15}>
            <p className="text-slate-500 mb-4">Butuh fitur khusus? Kami bisa custom sesuai kebutuhan bisnismu.</p>
            <WhatsAppCTA text="Diskusi Kebutuhan Saya" size="default" />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ BONUS PENAWARAN ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(147,51,234,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-200/15 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-100/15 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4 font-medium">
              <Gift className="mr-1.5 h-3.5 w-3.5" />
              Bonus Spesial
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Bonus Gratis yang <span className="text-purple-600">Bikin Makin Worth It</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Semua bonus ini kamu dapatkan GRATIS saat order sekarang.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {bonuses.map((item, i) => (
              <StaggerItem key={i} index={i}>
                <Card className="bg-white border-slate-200 hover:border-purple-300 hover:shadow-md transition-all h-full group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 shrink-0 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-0.5 text-sm">{item.title}</h3>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONI ═══════════ */}
      <section id="testimoni" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.04),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 font-medium">
              <Star className="mr-1.5 h-3.5 w-3.5" />
              Testimoni Client
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
              Mereka Sudah <span className="text-blue-600">Merasakan Hasilnya</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Jangan dengar kami. Dengarkan mereka yang sudah buktikan sendiri.
            </p>
          </AnimatedSection>

          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-violet-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge className="bg-white/15 text-white border-white/25 mb-6 text-sm px-4 py-1.5 font-medium backdrop-blur-sm">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Mulai Sekarang
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Wujudkan Website Profesional{' '}
              <span className="text-purple-200">untuk Bisnismu</span>
            </h2>
            <p className="text-lg text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Bisnis yang serius layak punya website yang serius. Kami siap membantu Anda tampil lebih kredibel, menjangkau lebih banyak pelanggan, dan menutup lebih banyak penjualan — mulai hari ini.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`https://wa.me/6285196245196?text=${encodeURIComponent('Halo! Saya tertarik dengan jasa pembuatan website. Bisa info lebih lanjut?')}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-10 py-7 shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.03]">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Konsultasi Gratis via WhatsApp
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200/70">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-300" /><span>Gratis Konsultasi</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-300" /><span>Selesai 7 Hari</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-300" /><span>Garansi Revisi</span></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-slate-900 text-slate-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/logo.png" alt="Erka Web Studio" className="h-8 w-8 rounded-lg object-cover" />
                <span className="font-bold text-lg text-white">Erka <span className="text-blue-400">Web Studio</span></span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Jasa pembuatan website profesional untuk segala bisnis Anda. Tampil beda, hasil nyata.
              </p>
              {/* Social Media */}
              <div className="mt-5 flex items-center gap-3">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.81a4.84 4.84 0 01-1-.12z"/></svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#layanan" className="hover:text-white transition-colors">Website Company Profile</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Landing Page</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Website Toko Online</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Website E-Commerce</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Website Ekspor</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Web App Inventory</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-blue-400 shrink-0" />
                  <a href={`https://wa.me/6285196245196?text=${encodeURIComponent('Halo! Saya tertarik dengan jasa pembuatan website. Bisa info lebih lanjut?')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +62 851-9624-5196
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                  <a href="mailto:admin@erkawebstudio.com" className="hover:text-white transition-colors">
                    admin@erkawebstudio.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Perum Absolute Place Blok D4 Kelurahan Karang Tuban</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Erka Web Studio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/6285196245196?text=${encodeURIComponent('Halo! Saya tertarik dengan jasa pembuatan website. Bisa info lebih lanjut?')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-3 whitespace-nowrap bg-white text-slate-700 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat WhatsApp
        </span>
      </a>

      {/* Temporary Download Button */}
      <a
        href="/erka-web-studio.tar.gz"
        download
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span className="text-sm font-medium">Download Project</span>
      </a>

    </div>
  )
}
