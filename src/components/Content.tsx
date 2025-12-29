import { motion } from 'framer-motion';

const articles = [
  {
    category: "Sistemas",
    date: "Dec 2024",
    title: "Por qué tus metas de año nuevo fallarán (y qué hacer al respecto)",
    excerpt: "La fuerza de voluntad es un recurso finito. Aprende a construir entornos que hagan el éxito inevitable."
  },
  {
    category: "Tecnología",
    date: "Nov 2024",
    title: "Automatización Consciente: Recupera 10 horas semanales",
    excerpt: "Herramientas no-code y scripts simples para eliminar la fricción administrativa de tu negocio."
  },
  {
    category: "Finanzas",
    date: "Oct 2024",
    title: "El interés compuesto aplicado a los hábitos",
    excerpt: "Cómo pequeñas acciones diarias generan retornos exponenciales en tu salud, riqueza y conocimiento."
  }
];

export default function Content() {
  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-white">Últimas Reflexiones</h2>
          <a href="#" className="text-gold hover:text-white transition-colors text-sm uppercase tracking-wider font-bold">Ver todo</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-48 bg-[#1a1a1a] mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                 {/* Placeholder for blog image - using CSS pattern */}
                 <div className="w-full h-full bg-[#151515] group-hover:scale-105 transition-transform duration-700"></div>
                 <span className="absolute bottom-4 left-4 z-20 text-xs font-bold text-gold uppercase tracking-wider">
                   {article.category}
                 </span>
              </div>
              <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                <span>{article.date}</span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span>5 min read</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
