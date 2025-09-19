import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#0a0118] via-[#1a0b5e] to-[#2d1b69] relative overflow-hidden">
      {/* Option 1: Tech Circuit Background */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                <circle cx="25" cy="25" r="3" fill="#3b82f6"/>
                <circle cx="75" cy="75" r="3" fill="#8b5cf6"/>
                <path d="M25,25 L75,25 L75,75" stroke="#3b82f6" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        
        {/* Animated Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-cyan-400/10 rounded-full mix-blend-screen animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/10 rounded-full mix-blend-screen animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-400/30 to-blue-400/10 rounded-full mix-blend-screen animate-float-slow blur-sm"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-violet-400/30 to-purple-400/10 rounded-full mix-blend-screen animate-float blur-sm"></div>
        
        {/* Digital Rain Effect */}
        <div className="absolute top-0 left-1/6 text-xs text-blue-300/10 font-mono leading-tight animate-pulse">
          <div className="flex flex-col space-y-1">
            <span>01001000</span>
            <span>01100101</span>
            <span>01101100</span>
            <span>01101100</span>
            <span>01101111</span>
            <span>00100000</span>
            <span>01010111</span>
            <span>01101111</span>
            <span>01110010</span>
            <span>01101100</span>
            <span>01100100</span>
          </div>
        </div>
        
        <div className="absolute top-0 right-1/6 text-xs text-purple-300/10 font-mono leading-tight animate-pulse delay-1000">
          <div className="flex flex-col space-y-1">
            <span>01000011</span>
            <span>01101111</span>
            <span>01101110</span>
            <span>01110011</span>
            <span>01000011</span>
            <span>01101111</span>
            <span>01100100</span>
            <span>01100101</span>
          </div>
        </div>
        
        {/* Glowing Tech Elements */}
        <div className="absolute top-1/3 left-1/5 text-4xl text-blue-400/20 animate-float tech-float">⚛️</div>
        <div className="absolute top-2/3 right-1/5 text-3xl text-purple-400/20 animate-float-delayed tech-float">💻</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl text-cyan-400/20 animate-float-slow tech-float">🚀</div>
        <div className="absolute top-1/2 right-1/4 text-2xl text-emerald-400/20 animate-float tech-float">⚙️</div>
        
        {/* Data Flow Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>
        
        {/* Vertical Light Beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse light-beam"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse delay-700 light-beam"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="slide-in-bottom" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            <span>🚀</span>
            Tentang Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kenapa Memilih <span className="gradient-text">ConsCode?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tim developer berpengalaman yang siap mewujudkan visi digital Anda 
            dengan teknologi terkini dan standar industri terbaik
          </p>
        </AnimatedSection>

        {/* Main Content - Image & Text Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image */}
          <AnimatedSection animation="slide-in-left" className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <img 
                src="/whyUs.png" 
                alt="Web Development Illustration" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </AnimatedSection>

          {/* Right side - Text Content */}
          <AnimatedSection animation="slide-in-right" className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Mengapa ConsCode Pilihan Terbaik?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Kami memahami bahwa setiap bisnis memiliki kebutuhan unik. 
                Dengan pengalaman bertahun-tahun di industri web development, 
                kami berkomitmen memberikan solusi digital yang tepat sasaran.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  icon: "⚡",
                  title: "Performa Tinggi",
                  desc: "Website cepat dengan optimasi SEO dan performa terbaik",
                  color: "text-yellow-400"
                },
                {
                  icon: "🛡️",
                  title: "Keamanan Terjamin",
                  desc: "Sistem keamanan berlapis dengan enkripsi data terkini",
                  color: "text-green-400"
                },
                {
                  icon: "📱",
                  title: "Responsive Design",
                  desc: "Tampilan sempurna di semua perangkat dan ukuran layar",
                  color: "text-blue-400"
                },
                {
                  icon: "🎨",
                  title: "UI/UX Modern",
                  desc: "Desain menarik yang meningkatkan engagement pengguna",
                  color: "text-purple-400"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 glass-effect p-4 rounded-xl hover:scale-105 transition-all duration-300">
                  <div className={`text-2xl ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass-effect p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Project Selesai</div>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">Client Puas</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Services Cards */}
        <AnimatedSection animation="slide-in-bottom" className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Keunggulan Kami</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Kombinasi sempurna antara teknologi, kreativitas, dan dedikasi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Inovatif & Kreatif",
                desc: "Solusi inovatif dan ide-ide kreatif untuk setiap project",
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30"
              },
              {
                icon: "⚡",
                title: "Teknologi Terkini",
                desc: "Menggunakan teknologi modern untuk performa terbaik",
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30"
              },
              {
                icon: "🤝",
                title: "Support 24/7",
                desc: "Tim support siap membantu kapanpun Anda membutuhkan",
                gradient: "from-emerald-500/20 to-teal-500/20",
                border: "border-emerald-500/30"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${item.gradient} border ${item.border} p-8 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="scale-up" className="mt-20 text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siap Memulai Project Impian Anda?
            </h3>
            <p className="text-gray-300 mb-6">
              Konsultasi gratis untuk mendiskusikan kebutuhan website Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                💬 Konsultasi Gratis
              </a>
              <a 
                href="#portfolio"
                className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                👀 Lihat Portfolio
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
