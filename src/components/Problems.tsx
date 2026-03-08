export default function Problems() {
  return (
    <section id="masalah" className="py-20 bg-white water-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚠️ Masalah Umum
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Jangan Tunggu Sampai <span className="text-red-500">Mesin Rusak Total</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Banyak pemilik rumah mengalami masalah berikut karena tidak ada sistem preventive maintenance yang tepat.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">Air Cepat Keruh</h3>
            <p className="text-gray-600">Meskipun sudah diberi obat, air tetap keruh dan tidak jernih seperti seharusnya.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">Pompa Bermasalah</h3>
            <p className="text-gray-600">Pompa sering mati mendadak atau mengeluarkan suara berisik yang mengganggu.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">Tagihan Listrik Naik</h3>
            <p className="text-gray-600">Konsumsi listrik meningkat drastis akibat mesin yang tidak efisien.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">Heater Tidak Stabil</h3>
            <p className="text-gray-600">Suhu air tidak konsisten, terkadang terlalu panas atau terlalu dingin.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">Kolam Jarang Dipakai</h3>
            <p className="text-gray-600">Kolam tidak siap pakai kapan saja, sehingga jarang dinikmati keluarga.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">Biaya Servis Mendadak</h3>
            <p className="text-gray-600">Pengeluaran tak terduga untuk perbaikan darurat yang mahal.</p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">Tahukah Anda?</h3>
              <p className="text-gray-700">
                Masalah-masalah ini biasanya terjadi karena <strong>tidak ada sistem preventive maintenance yang tepat</strong>. Dengan perawatan rutin dan terukur, sebagian besar masalah ini dapat dicegah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
