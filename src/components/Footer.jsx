import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#09032A] via-[#0f0544] to-[#1a0b5e] text-white">
      <AnimatedSection animation="slide-in-bottom">
        <div className="container mx-auto px-4 py-16">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Cons</span>
                <span className="text-blue-400">Code</span>
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Transforming digital ideas into powerful web solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Services</a></li>
                <li><a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">Website Development</li>
                <li className="text-gray-300 text-sm">E-Commerce Solutions</li>
                <li className="text-gray-300 text-sm">Web Applications</li>
                <li className="text-gray-300 text-sm">UI/UX Design</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 mb-4">
                <p className="text-gray-300 text-sm"> info@conscode.com</p>
                <p className="text-gray-300 text-sm"> +62 812 3456 7890</p>
                <p className="text-gray-300 text-sm"> Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/5 p-6 rounded-xl mb-8">
            <div className="text-center max-w-xl mx-auto">
              <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">Get the latest updates.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
                />
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
               2025 ConsCode. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-white rounded-lg transition-colors text-sm"
            >
               Back to Top
            </button>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
