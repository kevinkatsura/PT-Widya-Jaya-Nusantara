import Partners from "./Partners";

export default function Solutions() {
  return (
    <section id="solusi" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💡 Solusi Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kami Tidak Hanya Membersihkan.<br />
            <span className="text-sky-600">Kami Menjaga Sistemnya.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            PT Air Jernih Indonesia berfokus pada maintenance berbasis sistem, bukan sekadar perawatan permukaan.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Water Care */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-sky-100 card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-gray-900">Perawatan Air Presisi</h3>
                <p className="text-sky-600 font-medium">Water Treatment System</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Vacuum &amp; Brushing Menyeluruh</span>
                  <p className="text-gray-600 text-sm">Pembersihan dasar dan dinding kolam secara detail</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Balancing pH &amp; Chlorine Terukur</span>
                  <p className="text-gray-600 text-sm">Pengukuran dan penyesuaian kadar kimia air yang presisi</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Backwash Filtrasi Rutin</span>
                  <p className="text-gray-600 text-sm">Pembersihan sistem filter untuk sirkulasi optimal</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Monitoring Kualitas Air</span>
                  <p className="text-gray-600 text-sm">Pemantauan berkala untuk menjaga standar kesehatan</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Equipment Maintenance */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-sky-100 card-hover">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-gray-900">Maintenance Mesin</h3>
                <p className="text-cyan-600 font-medium">Equipment &amp; Technical Service</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Pemeriksaan Pompa &amp; Motor</span>
                  <p className="text-gray-600 text-sm">Inspeksi rutin untuk mencegah kerusakan dini</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Inspeksi Filter System</span>
                  <p className="text-gray-600 text-sm">Pengecekan dan perawatan sistem filtrasi</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Heater &amp; Chiller Maintenance</span>
                  <p className="text-gray-600 text-sm">Perawatan sistem pengatur suhu air</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-gray-900">Panel Listrik &amp; Timer Control</span>
                  <p className="text-gray-600 text-sm">Pengecekan sistem kontrol dan kelistrikan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Partners />
      </div>
    </section>
  );
}
