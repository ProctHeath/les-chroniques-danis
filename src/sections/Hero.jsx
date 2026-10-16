import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], ['0%', '16%']);
  const contentY = useTransform(scrollY, [0, 700], [0, -90]);
  const opacity = useTransform(scrollY, [0, 550], [1, 0]);

  return (
    <section className="hero" id="top">
      <motion.div className="hero-bg" style={{ y: imageY }} />
      <div className="hero-vignette" />
      <div className="hero-grain" />

      <motion.div
        className="hero-content"
        style={{ y: contentY, opacity }}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.45, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="eyebrow"><span>01 — 2026</span><span>JOURNAL D'EXPLORATION</span></div>
        <h1><span>LES</span><span>CHRONIQUES</span><em>D'Anis</em></h1>
        <p>Des terres lointaines. Des histoires silencieuses.<br />Un monde à parcourir.</p>
      </motion.div>

      <motion.a
        href="#chroniques"
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span>SCROLL TO EXPLORE</span><i />
      </motion.a>
    </section>
  );
}
