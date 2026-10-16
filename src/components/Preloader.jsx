import { motion } from 'framer-motion'
export default function Preloader({ onDone }) {
  return <motion.div className="preloader" initial={{opacity:1}} animate={{opacity:0}} transition={{duration:.8,delay:1.35}} onAnimationComplete={onDone}>
    <div className="preloader-inner"><span>LES CHRONIQUES</span><strong>D’ANIS</strong><i>JOURNAL D’EXPLORATION</i></div>
  </motion.div>
}
