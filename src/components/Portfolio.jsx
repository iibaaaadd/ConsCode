import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Fashion",
      category: "e-commerce",
      image: "https://placehold.co/600x400",
      description: "Website toko fashion online dengan sistem pembayaran terintegrasi"
    },
    {
      title: "Company Profile Tech",
      category: "company",
      image: "https://placehold.co/600x400",
      description: "Website perusahaan teknologi dengan animasi modern"
    },
    {
      title: "Sistem Manajemen Hotel",
      category: "application",
      image: "https://placehold.co/600x400",
      description: "Aplikasi web untuk manajemen hotel dan reservasi"
    },
    {
      title: "Portal Berita",
      category: "application",
      image: "https://placehold.co/600x400",
      description: "Website portal berita dengan CMS custom"
    },
    {
      title: "Restaurant Website",
      category: "company",
      image: "https://placehold.co/600x400",
      description: "Website restoran dengan sistem pemesanan online"
    },
    {
      title: "Marketplace Electronics",
      category: "e-commerce",
      image: "https://placehold.co/600x400",
      description: "Platform marketplace khusus elektronik"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-bl from-[#2d1b69] via-[#1a0b5e] to-[#09032A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-1/3 left-10 w-36 h-36 bg-violet-500 rounded-full mix-blend-multiply animate-float-delayed"></div>
        <div className="absolute top-3/4 right-1/3 w-28 h-28 bg-blue-500 rounded-full mix-blend-multiply animate-float-slow"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Portfolio Kami</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Beberapa contoh website yang telah kami kembangkan untuk klien
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            {['all', 'e-commerce', 'company', 'application'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#09032A] text-gray-300 hover:bg-blue-600/10'
                } transition-all duration-300`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[#09032A] hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09032A] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
