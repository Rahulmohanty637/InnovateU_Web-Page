"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { fadeIn } from "../utils/motion";
import { useState } from "react";


const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 1)}
        className="flex md:flex-row flex-col gap-4"
      >
        <div className="mt-12 max-w-[700px] mx-auto">
          <div className="pb-8">
            <div className="flex items-center justify-between">
              <div className="sm:text-xl text-base font-bold text-white">
                {title}
              </div>
              <BsChevronDown onClick={() => handleClick(IDBCursor)} className="text-yellow-50" />
            </div>
            <AnimatePresence>
              {
                id === activeIndex && (
                  <div>
                    <p>
                    DevFest is an annual technology conference organized by the developer community. It brings together developers, designers, and tech enthusiasts to learn, share knowledge, and network.
                    </p>
                  </div>
                )
              }
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InsightCard;
