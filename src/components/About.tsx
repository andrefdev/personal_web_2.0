import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/30 translate-x-4 translate-y-4 hidden lg:block"></div>
            <img 
              src="/images/about-bg.jpg" 
              alt="Workspace" 
              className="relative w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-6">Sobre Mí</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              No persigo la perfección, <br />
              persigo <span className="text-gold">sistemas que funcionen.</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
              <p>
                Construyo empresas, productos y metodologías que ayudan a las personas a vivir con más claridad y menos fricción.
              </p>
              <p>
                Como fundador en los sectores de desarrollo personal, tecnología y finanzas, he descubierto que el éxito no es un acto mágico, sino una consecuencia lógica de aplicar los inputs correctos en el orden correcto.
              </p>
              <p>
                Ya sea a través de <span className="text-white font-medium">The Prime Way</span>, <span className="text-white font-medium">Indrox</span> o <span className="text-white font-medium">Finnoba</span>, mi misión es la misma: eliminar el ruido para que puedas enfocarte en la señal.
              </p>
            </div>

            <div className="mt-10">
              <span className="font-heading text-4xl text-gold/80 italic font-bold tracking-tighter">André F.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
