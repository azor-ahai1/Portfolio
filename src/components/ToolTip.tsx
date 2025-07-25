"use client";

import { motion, AnimatePresence, useSpring, MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";

// Separate Tooltip component
const Tooltip = ({
  isVisible,
  name,
  x
}: {
  isVisible: boolean;
  name: string;
  x: MotionValue<number>;
}) => {
  const springConfig = { stiffness: 100, damping: 5 };
  
  // Rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // Translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 10,
            },
          }}
          exit={{ opacity: 0, y: 20, scale: 0.6 }}
          style={{
            translateX: translateX,
            rotate: rotate,
            whiteSpace: "nowrap",
          }}
          className="absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
        >
          <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          <div className="relative z-30 text-base font-bold text-white">
            {name}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;