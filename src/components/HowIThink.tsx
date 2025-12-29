import { motion } from 'framer-motion';

const quotes = [
  "La motivación no escala, los sistemas sí.",
  "El desorden cuesta más que el esfuerzo.",
  "La tecnología debe liberar tiempo, no consumirlo.",
  "La disciplina bien diseñada se vuelve automática."
];

export default function HowIThink() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
             <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Cómo Pienso</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Manifiesto</h3>
             <p className="text-gray-400">
               Principios que guían cada decisión, cada proyecto y cada línea de código.
             </p>
          </div>
          
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-gold text-2xl mr-4">/</span>
                <p className="text-xl text-white font-light italic">
                  {quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
