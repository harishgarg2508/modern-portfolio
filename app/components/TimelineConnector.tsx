import { motion } from 'framer-motion';

export const TimelineConnector = () => {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-px">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
        animate={{
          scale: [1, 1, 1],
          opacity: [0, 1, 0],
          y: ["-100%", "100%", "100%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-purple-500/20" />
    </div>
  );
};