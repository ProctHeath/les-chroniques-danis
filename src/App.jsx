import { useState } from 'react';
import useLenis from './hooks/useLenis';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Chapter from './components/Chapter';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';
import { chronicles } from './data/chronicles';

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <>
      <div className={`app ${loading ? 'loading' : ''}`}>
        <Navbar />
        <CustomCursor />

        <main>
          <Hero />
          <Intro />

          <section id="chroniques" className="chronicles" aria-label="Les chroniques d'Anis">
            <div className="section-label">
              <span>CHRONIQUES</span><span>—</span><span>01 / 03</span>
            </div>
            <div className="chronicles-list">
              {chronicles.map((chronicle) => <Chapter key={chronicle.id} item={chronicle} />)}
            </div>
          </section>

          <Gallery />
        </main>
        <Footer />
      </div>

      {loading && <Preloader onDone={() => setLoading(false)} />}
    </>
  );
}
