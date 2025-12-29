import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Philosophy from './components/Philosophy';
import WhatIDo from './components/WhatIDo';
import Ecosystem from './components/Ecosystem';
import HowIThink from './components/HowIThink';
import Blog from './components/Blog';
import About from './components/About';
import Newsletter from './components/Newsletter';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-gold selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Purpose />
      <Philosophy />
      <WhatIDo />
      <Ecosystem />
      <HowIThink />
      <Blog />
      <About />
      <Newsletter />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
