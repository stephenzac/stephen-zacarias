"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Test() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <motion.div
        layout
        data-isClicked={clicked}
        initial={{ borderRadius: 50 }}
        className="parent flex flex-col gap-6"
        onClick={() => setClicked(!clicked)}
      >
        <motion.div layout className="child">
          <h1>Header</h1>
        </motion.div>
        <AnimatePresence>
          {clicked && (
            <motion.h1
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, position: "absolute" }}
              transition={{ duration: 0.5 }}
              className="text-black"
              style={{ position: clicked ? "relative" : "absolute" }}
            >
              Body text.
            </motion.h1>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
