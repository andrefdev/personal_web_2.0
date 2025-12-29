import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#020202] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-white block mb-6">
              ANDRÉ <span className="text-gold">FORSYTH</span>
            </span>
            <p className="text-gold text-lg font-serif italic mb-6">
              "Diseña tu vida."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-black transition-all duration-300 rounded-full"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-black transition-all duration-300 rounded-full"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-black transition-all duration-300 rounded-full"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-black transition-all duration-300 rounded-full"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#purpose" className="text-gray-400 hover:text-white transition-colors">Propósito</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#philosophy" className="text-gray-400 hover:text-white transition-colors">Filosofía</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Mí</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Legal</h4>
             <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center md:text-left text-xs text-gray-700 flex flex-col md:flex-row justify-between">
          <p>© 2024 André Forsyth. Todos los derechos reservados.</p>
          <p>Desarrollado con sistemas.</p>
        </div>
      </div>
    </footer>
  );
}
