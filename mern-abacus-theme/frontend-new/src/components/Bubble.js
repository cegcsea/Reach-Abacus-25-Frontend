import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Bubble = ({ delay, duration, size, left }) => (
  <motion.div
    className="absolute rounded-full bg-[#473863] backdrop-blur-sm"
    style={{
      left: `${left}%`,
      width: size,
      height: size,
    }}
    initial={{ y: "120vh", opacity: 0 }}
    animate={{
      y: "-20vh",
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

Bubble.propTypes = {
  delay: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};
