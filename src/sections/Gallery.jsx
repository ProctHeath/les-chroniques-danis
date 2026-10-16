import { motion } from 'framer-motion';
import { gallery } from '../data/chronicles';

export default function Gallery() {
  return (
    <section className="gallery" id="galerie">
      <div className="section-label"><span>FRAGMENTS</span><span>—</span><span>04</span></div>
      <div className="gallery-heading">
        <p>QUELQUES INSTANTS</p>
        <h2>Le voyage<br /><i>continue.</i></h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((src, index) => (
          <motion.figure
            key={src}
            className={`g${index + 1}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="gallery-image-wrap"><img src={src} alt="Fragment du voyage" loading="lazy" /></div>
            <figcaption>0{index + 1} / FRAGMENT</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
