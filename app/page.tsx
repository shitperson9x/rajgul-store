import Link from 'next/link';
import ScrollToTop from './components/ScrollToTop';
import HeroImage from './components/HeroImage';
import TestimonialSection from './components/TestimonialSection';
import EmployeeSection from './components/EmployeeSection';
import WhatsAppFloat from './components/WhatsAppFloat';
import MobileMenu from './components/MobileMenu';
import StatsCounter from './components/StatsCounter';

export default function Home() {
  const waNumber = '6281235014075';
  
  const services = [
    {
      id: 1,
      title: 'Classic Rank',
      fromRank: 'Warrior',
      toRank: 'Master',
      price: 'Rp 50.000',
      duration: '1-3 hari',
      features: ['Win rate tinggi', 'Pro player', 'Garansi bintang']
    },
    {
      id: 2,
      title: 'Grandmaster Boost',
      fromRank: 'Master',
      toRank: 'Grandmaster',
      price: 'Rp 150.000',
      duration: '3-5 hari',
      features: ['Win rate 80%+', 'Expert player', 'Garansi bintang']
    },
    {
      id: 3,
      title: 'Epic Rank',
      fromRank: 'Grandmaster',
      toRank: 'Epic',
      price: 'Rp 250.000',
      duration: '5-7 hari',
      features: ['Win rate 85%+', 'Pro team', 'Full garansi']
    },
    {
      id: 4,
      title: 'Legend Boost',
      fromRank: 'Epic',
      toRank: 'Legend',
      price: 'Rp 400.000',
      duration: '7-10 hari',
      features: ['Win rate 90%+', 'Top player', 'Premium garansi']
    },
    {
      id: 5,
      title: 'Mythic Boost',
      fromRank: 'Legend',
      toRank: 'Mythic',
      price: 'Rp 600.000',
      duration: '10-14 hari',
      features: ['Win rate 90%+', 'Elite player', 'VIP treatment']
    },
    {
      id: 6,
      title: 'Mythical Glory',
      fromRank: 'Mythic',
      toRank: 'Mythical Glory',
      price: 'Rp 1.000.000',
      duration: '14-21 hari',
      features: ['Win rate 95%+', 'Pro esports', 'Full support 24/7']
    },
    {
      id: 7,
      title: 'Mabar VIP',
      fromRank: 'Any Rank',
      toRank: 'Emosi Gaming',
      price: 'Rp 6500',
      duration: 'Per session',
      features: ['Main bareng pro player', 'Fun & enjoy', 'Improve gameplay', 'Lose rate boost', 'Emosi Gaming']
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                epos*rajgul store
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#paket" className="text-gray-300 hover:text-purple-400 transition font-medium">
                Paket
              </Link>
              <Link href="#cara-order" className="text-gray-300 hover:text-purple-400 transition font-medium">
                Cara Order
              </Link>
              <Link href="#kontak" className="text-gray-300 hover:text-purple-400 transition font-medium">
                Kontak
              </Link>
            </nav>
            
            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section with Gusion */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🔥 Trusted by 1 Player
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Naikin Rank ML
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Cepat & Aman
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Boost rank kamu dari Warrior sampai Mythical Glory dengan pro player. Win rate tinggi, garansi, dan harga terjangkau! 🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#paket" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-purple-500/50"
              >
                Lihat Paket →
              </a>
              <a 
                href={`https://wa.me/${waNumber}?text=Halo epos*rajgul store, saya mau tanya tentang jasa boosting ML`}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
              >
                💬 Chat WhatsApp
              </a>
            </div>
            {/* Stats with Counter Animation */}
            <StatsCounter />
          </div>
          
          {/* Right - Gusion Image */}
          <HeroImage />
        </div>
      </section>

      {/* Services Section */}
      <section id="paket" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">
            Paket Jasa Boosting
          </h3>
          <p className="text-gray-400 text-lg">Pilih paket yang sesuai dengan kebutuhan rank kamu</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group relative bg-gradient-to-br ${
                service.id === 7 
                  ? 'from-pink-900/40 to-purple-900/40 border-pink-500/50' 
                  : 'from-purple-900/20 to-blue-900/20'
              } backdrop-blur-sm border ${
                service.id === 7 ? 'border-pink-500/30' : 'border-purple-500/20'
              } rounded-2xl p-6 hover:scale-105 hover:border-purple-500/50 transition-all duration-300 overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* VIP Badge */}
              {service.id === 7 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🌟 VIP
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{service.title}</h4>
                    <p className="text-gray-400 text-sm">
                      {service.fromRank} → {service.toRank}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${
                    service.id === 7 ? 'bg-gradient-to-br from-pink-500 to-purple-600' : 'bg-gradient-to-br from-purple-500 to-blue-500'
                  } flex items-center justify-center text-2xl`}>
                    {service.id === 7 ? '🎮' : '⭐'}
                  </div>
                </div>
                
                <div className="my-6">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {service.price}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">
                    ⏱️ {service.duration}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="text-green-400 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/${waNumber}?text=Halo epos*rajgul store, saya mau order paket ${service.title}`}
                  className={`block w-full ${
                    service.id === 7 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700' 
                      : 'bg-green-500 hover:bg-green-600'
                  } text-white text-center py-3 rounded-xl font-semibold transition shadow-lg`}
                >
                  {service.id === 7 ? '🎮 Book Mabar VIP' : '📱 Order via WhatsApp'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Order */}
      <section id="cara-order" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Employee Section */}
      <EmployeeSection />
        <h3 className="text-4xl font-bold text-white text-center mb-4">
          Cara Order
        </h3>
        <p className="text-gray-400 text-center mb-12">Mudah dan cepat, hanya 4 langkah!</p>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="relative text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition shadow-lg shadow-purple-500/50">
              1
            </div>
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30"></div>
            <h4 className="text-white font-bold text-lg mb-2">Pilih Paket</h4>
            <p className="text-gray-400 text-sm">Pilih paket sesuai rank yang diinginkan</p>
          </div>
          <div className="relative text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition shadow-lg shadow-blue-500/50">
              2
            </div>
            <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
            <h4 className="text-white font-bold text-lg mb-2">Hubungi Kami</h4>
            <p className="text-gray-400 text-sm">Klik tombol WhatsApp untuk order</p>
          </div>
          <div className="relative text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition shadow-lg shadow-purple-500/50">
              3
            </div>
            <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
            <h4 className="text-white font-bold text-lg mb-2">Transfer</h4>
            <p className="text-gray-400 text-sm">Lakukan pembayaran sesuai instruksi</p>
          </div>
          <div className="relative text-center group">
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition shadow-lg shadow-pink-500/50">
              4
            </div>
            <h4 className="text-white font-bold text-lg mb-2">Proses</h4>
            <p className="text-gray-400 text-sm">Kami akan mulai boost rank kamu</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-4xl font-bold text-white text-center mb-12">
          Kenapa Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">epos*rajgul store</span>?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:scale-105 hover:border-purple-500/50 transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition">
              🛡️
            </div>
            <h4 className="text-white font-bold text-xl mb-3">100% Aman</h4>
            <p className="text-gray-400">Akun kamu dijamin aman tanpa banned. Kami pakai metode manual, bukan bot!</p>
          </div>
          <div className="group bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:scale-105 hover:border-purple-500/50 transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition">
              ⚡
            </div>
            <h4 className="text-white font-bold text-xl mb-3">Cepat & Profesional</h4>
            <p className="text-gray-400">Dikerjakan oleh pro player berpengalaman dengan win rate tinggi</p>
          </div>
          <div className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:scale-105 hover:border-purple-500/50 transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition">
              💯
            </div>
            <h4 className="text-white font-bold text-xl mb-3">Garansi Bintang</h4>
            <p className="text-gray-400">Jika bintang turun dalam 7 hari, kami naikan lagi GRATIS!</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Pertanyaan Sering Ditanya (FAQ)
        </h3>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 cursor-pointer group">
            <summary className="text-white font-semibold list-none flex justify-between items-center">
              <span>Apakah aman untuk akun saya?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <p className="text-gray-400 mt-4">
              Ya, 100% aman! Kami menggunakan metode bermain manual (bukan bot/cheat) dan sudah menangani ribuan akun tanpa masalah banned.
            </p>
          </details>
          <details className="bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 cursor-pointer group">
            <summary className="text-white font-semibold list-none flex justify-between items-center">
              <span>Berapa lama proses boosting?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <p className="text-gray-400 mt-4">
              Tergantung paket yang dipilih. Biasanya 1-14 hari kerja. Kami akan update progress secara berkala via WhatsApp.
            </p>
          </details>
          <details className="bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 cursor-pointer group">
            <summary className="text-white font-semibold list-none flex justify-between items-center">
              <span>Bagaimana cara pembayaran?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <p className="text-gray-400 mt-4">
              Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (OVO, DANA, GoPay), dan QRIS. Pembayaran 50% di awal, 50% setelah selesai.
            </p>
          </details>
          <details className="bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 cursor-pointer group">
            <summary className="text-white font-semibold list-none flex justify-between items-center">
              <span>Apakah ada garansi?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <p className="text-gray-400 mt-4">
              Ya! Jika dalam 7 hari setelah proses selesai rank/bintang turun, kami akan naikan kembali GRATIS.
            </p>
          </details>
          <details className="bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 cursor-pointer group">
            <summary className="text-white font-semibold list-none flex justify-between items-center">
              <span>Apakah saya harus kasih password akun?</span>
              <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
            </summary>
            <p className="text-gray-400 mt-4">
              Ya, untuk proses joki kami memerlukan akses ke akun ML kamu. Data kamu kami jaga kerahasiaannya dan tidak akan disalahgunakan.
            </p>
          </details>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact */}
      <section id="kontak" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Siap Naik Rank?
          </h3>
          <p className="text-gray-300 mb-6">
            Hubungi kami sekarang dan mulai perjalanan ke Mythical Glory! 🏆
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${waNumber}?text=Halo epos*rajgul store, saya mau tanya tentang jasa boosting ML`}
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              💬 Chat WhatsApp
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            WhatsApp: +62 812-3501-4075
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-md border-t border-purple-500/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  epos*rajgul store
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Jasa rank boosting Mobile Legends terpercaya dan aman sejak 2024. Trusted by 1000+ players.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#paket" className="text-gray-400 hover:text-purple-400 transition text-sm">Paket Boosting</Link></li>
                <li><Link href="#cara-order" className="text-gray-400 hover:text-purple-400 transition text-sm">Cara Order</Link></li>
                <li><Link href="#kontak" className="text-gray-400 hover:text-purple-400 transition text-sm">Kontak</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Hubungi Kami</h4>
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/${waNumber}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💬</span>
                  <span>+62 812-3501-4075</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 epos*rajgul store. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Made with 💜 by Coklat Terkuat
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button with Progress */}
      <ScrollToTop />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}
