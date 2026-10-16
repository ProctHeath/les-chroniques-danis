import { motion } from 'framer-motion';

export default function Navbar() {
  const go = (event) => {
    event.preventDefault();
    document.querySelector('#chroniques')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.75, duration: 0.8 }}
    >
      <a href="#top" className="brand">ANIS<span> / </span>CHRONIQUES</a>
      <nav>
        <a href="#chroniques" onClick={go}>CHRONIQUES</a>
        <a href="#galerie">FRAGMENTS</a>
      </nav>
      <a href="https://www.instagram.com/anis.ar4/" target="_blank" rel="noreferrer" className="nav-link">INSTAGRAM <span>↗</span></a>
    </motion.header>
  );
}
