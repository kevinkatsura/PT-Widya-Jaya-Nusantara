export default function Cta() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Jangan Tunggu Sampai<br />
            <span className="text-sky-600">Kolam Bermasalah</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ambil langkah sekarang untuk melindungi investasi kolam renang Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="#kontak" className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 text-center card-hover group block">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">Jadwalkan Maintenance</h3>
            <p className="text-white/80">Atur jadwal perawatan rutin sekarang</p>
          </a>

          <a href="https://wa.me/62811877480" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-8 text-center card-hover group block">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">Konsultasi Gratis</h3>
            <p className="text-white/80">Diskusikan kebutuhan kolam Anda</p>
          </a>

          <a href="https://wa.me/62811877480" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl p-8 text-center card-hover group block">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-white text-xl mb-2">Paket Bulanan</h3>
            <p className="text-white/80">Dapatkan penawaran terbaik</p>
          </a>
        </div>

        <div className="bg-[url('/images/showcase/bg-13.webp')] bg-cover bg-center bg-fixed rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>

          <div className="relative p-8 md:p-12 z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">Hubungi Kami Sekarang</h3>
                <p className="text-sky-200">Tim kami siap membantu Anda 24/7</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://wa.me/62811877480" target="_blank" rel="noopener noreferrer" className="relative btn-primary pulse-ring text-white px-8 py-4 rounded-full font-bold text-xl inline-flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span id="footer-phone">081-1877-480</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-6 text-sky-100 font-medium tracking-wide">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bandung</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bogor</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Karawang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
