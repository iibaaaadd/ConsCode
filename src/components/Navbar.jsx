import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'reviews', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Update scrolled state for navbar styling
      setScrolled(window.scrollY > 50);

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full text-white py-3 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/25' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo & Brand - Simple hover effect */}
          <div className="flex items-center gap-3">
            <img 
              src="/ConsCode.jpeg" 
              alt="ConsCode Logo" 
              className="w-10 h-10 rounded-full" 
            />
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Cons</span>
              <span className="text-blue-400">Code</span>
            </div>
          </div>

          {/* Desktop Menu - Simple color change only */}
          <div className="hidden lg:flex text-lg space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'Tentang Kami' },
              { id: 'services', label: 'Layanan' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'reviews', label: 'Testimoni' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Kontak' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 font-medium transition-colors duration-200 ${
                  activeSection === id 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile menu button - Simple */}
          <button
            className="lg:hidden p-2 hover:text-blue-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Simple */}
        <div 
          className={`lg:hidden absolute left-4 right-4 top-full mt-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="flex flex-col py-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'Tentang Kami' },
              { id: 'services', label: 'Layanan' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'reviews', label: 'Testimoni' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Kontak' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left px-4 py-3 font-medium transition-colors duration-200 ${
                  activeSection === id 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-white hover:text-blue-300 hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
