import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Chapter({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1.12]);
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const anchorId = `chapter-${item.id}`;

  const goToChapter = (event) => {
    event.preventDefault();
    const element = document.getElementById(anchorId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article id={anchorId} className={`chapter ${item.align}`} ref={ref}>
      <motion.div className="chapter-copy" style={{ y: titleY }}>
        <div className="chapter-meta">
          <span>{item.id}</span>
          <span>{item.place}</span>
          <span>{item.year}</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.title.split('\n').map((line) => <span key={line}>{line}</span>)}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.75 }}
        >
          {item.intro}
        </motion.p>
        <a className="chapter-link" href={`#${anchorId}`} onClick={goToChapter}>LIRE LA CHRONIQUE <span>↗</span></a>
      </motion.div>

      <motion.a className="chapter-image" href={`#${anchorId}`} onClick={goToChapter} aria-label={`Ouvrir la chronique ${item.id}`}>
        <motion.img src={item.image} alt={item.alt} style={{ y: imageY, scale: imageScale }} loading="lazy" />
        <span className="chapter-image-shade" />
        <span className="image-number">CH. {item.id}</span>
        <span className="image-arrow">↗</span>
      </motion.a>
    </article>
  );
}
