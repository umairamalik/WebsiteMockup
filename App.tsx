import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Logos } from './components/sections/Logos';
import { WhyChoose } from './components/sections/WhyChoose';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { Gallery } from './components/sections/Gallery';
import { Stats } from './components/sections/Stats';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-charcoal bg-white selection:bg-banana selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Logos />
        <WhyChoose />
        <About />
        <Process />
        <Testimonials />
        <Gallery />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;