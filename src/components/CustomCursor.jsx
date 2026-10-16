import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.35 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (!isFinePointer) {
      document.body.style.cursor = '';
      return undefined;
    }

    document.body.style.cursor = 'none';

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event) => setHovering(Boolean(event.target.closest('a, button, figure')));

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  return (
    <motion.div
      className={`cursor ${hovering ? 'is-hovering' : ''}`}
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  );
}
