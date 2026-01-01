import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

const articles = [
  {
    platform: "Medium",
    date: "Dec 2024",
    title: "So, 2025 is over and this is what i learned that can help you.",
    excerpt: "I'll tell you the best things i learned in 2025, for you, your business and more.",
    link: "https://medium.com/@andreforsythx/so-2025-is-over-and-this-is-what-i-learned-that-can-help-you-77a02cfaa81e", // Placeholder
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yKMih8RCryK8IzWCEGJEkw.png"
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Blog</h2>
            <h3 className="text-3xl font-bold text-white">Últimas Reflexiones</h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-gold hover:text-white transition-colors text-sm uppercase tracking-wider font-bold">
            Ver todas las publicaciones <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block bg-[#141414] border border-white/5 hover:border-gold/30 transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 z-20 text-[10px] font-bold bg-black/80 text-white px-3 py-1 uppercase tracking-wider backdrop-blur-sm border border-white/10">
                  {article.platform}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="flex items-center gap-1"><BookOpen size={12} /> Lectura de 5 min</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <div className="text-xs font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                  Leer artículo <ExternalLink size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm uppercase tracking-wider font-bold">
            Ver todas las publicaciones <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
