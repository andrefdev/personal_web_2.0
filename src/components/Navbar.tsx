import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Propósito', to: 'purpose' },
    { name: 'Filosofía', to: 'philosophy' },
    { name: 'Proyectos', to: 'projects' },
    { name: 'Sobre Mí', to: 'about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-bold tracking-tight text-white">
              ANDRÉ <span className="text-gold">FORSYTH</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-300 hover:text-gold transition-colors duration-300 px-3 py-2 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-6 py-2 rounded-none text-sm font-medium tracking-wide uppercase"
              >
                Empezar
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A0A0A] border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-300 hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gold block px-3 py-2 rounded-md text-base font-medium"
              >
                Empezar
              </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
