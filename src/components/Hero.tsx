import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay (Commented Out)
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="/images/hero-bg.jpg" 
          alt="Abstract Luxury Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-20"></div>
      </div>
      */}

      {/* New Grain Background */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0A0A0A] to-black opacity-80"></div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
            <filter id='noiseFilter'>
              <feTurbulence 
                type='fractalNoise' 
                baseFrequency='0.8' 
                numOctaves='3' 
                stitchTiles='stitch'/>
              <feColorMatrix type="saturate" values="0"/>
            </filter>
            <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
          </svg>
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            Tu vida también <br />
            <span className="text-gold">se diseña.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Ayudo a personas y empresas a construir crecimiento real a través de estructura, enfoque y sistemas inteligentes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="philosophy"
            smooth={true}
            duration={500}
            className="cursor-pointer px-8 py-4 border border-gold bg-gold/10 text-gold hover:bg-gold hover:text-black transition-all duration-300 text-lg font-medium tracking-wide uppercase flex items-center gap-2"
          >
            Explorar mi filosofía <ArrowRight size={20} />
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium tracking-wide uppercase"
          >
            Ver proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
