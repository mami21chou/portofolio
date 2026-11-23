"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Rideau d'ouverture : deux panneaux se séparent sur les initiales.
export default function Intro() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => { setShow(false); document.body.style.overflow = ""; }, 1900);
    return () => { clearTimeout(t); document.body.style.overflow = ""; };
  }, []);
  const ease = [0.76, 0, 0.24, 1] as const;
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center" exit={{ transition: { delay: 0.15 } }}>
          <motion.div className="absolute inset-y-0 left-0 w-1/2 bg-[#1A1310]" exit={{ x: "-100%" }} transition={{ duration: 1, ease }} />
          <motion.div className="absolute inset-y-0 right-0 w-1/2 bg-[#1A1310]" exit={{ x: "100%" }} transition={{ duration: 1, ease }} />
          <motion.p
            className="relative font-display text-5xl italic text-[#EDE8E1] md:text-7xl"
            initial={{ opacity: 0, letterSpacing: "0.35em" }}
            animate={{ opacity: 1, letterSpacing: "0.02em" }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            transition={{ duration: 1.4, ease }}
          >
            A.W.S
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
