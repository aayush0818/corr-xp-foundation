import { motion } from 'framer-motion';
interface ScrollIndicatorProps {
  onClick?: () => void;
}
const ScrollIndicator = ({
  onClick
}: ScrollIndicatorProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  return <motion.button onClick={handleClick} initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: 1.2,
    duration: 0.6
  }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-white/70 hover:text-warm-white transition-colors cursor-pointer group" aria-label="Scroll to content">
      <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
      
      <motion.div animate={{
      y: [0, 6, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        
      </motion.div>
    </motion.button>;
};
export default ScrollIndicator;