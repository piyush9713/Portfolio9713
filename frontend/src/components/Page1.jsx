import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Page1 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 70 }} // Starting position before animation
      animate={controls}>
      Transforming Ideas into <br /> Engaging Websites
    </motion.h1>
  );
};

export default Page1;
