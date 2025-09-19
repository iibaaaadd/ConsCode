const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-bl from-[#2d1b69] via-[#0f0544] to-[#09032A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-10 w-44 h-44 bg-emerald-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-36 h-36 bg-violet-500 rounded-full mix-blend-multiply animate-float-delayed"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply animate-float-slow"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Hubungi Kami</h2>
              <p className="text-gray-300">
                Diskusikan kebutuhan website Anda dengan tim kami. Kami siap membantu mewujudkan website impian Anda.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Lokasi</h3>
                  <p className="text-gray-400">Jakarta, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">hello@conscode.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400">+62 123 4567 890</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0D0832] p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nama</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#09032A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#09032A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Masukkan email Anda"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Pesan</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-[#09032A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tuliskan pesan Anda"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
