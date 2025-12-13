import React from "react";
import bg from "../../assest/bg.jpg";
import { motion } from "framer-motion";
import { FiPause, FiPlay, FiStopCircle } from "react-icons/fi";

export const TimeTracker = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="
      min-h-[200px]
        w-full rounded-xl p-6
        bg-cover bg-center
        text-white shadow-md flex flex-col items-center
      "
    >
      <h3 className="text-base font-semibold w-full text-left truncate">
        Time Tracker
      </h3>

      <p className="text-4xl font-bold tracking-wide mt-3 truncate">01:24:08</p>

      <div
        className="
          mt-5 flex items-center gap-6
          bg-white/20 backdrop-blur-md px-6 py-3 rounded-full truncate
        "
      >
        <FiPause className="text-2xl cursor-pointer hover:opacity-80" />
        <FiPlay className="text-2xl cursor-pointer hover:opacity-80" />
        <FiStopCircle className="text-2xl cursor-pointer hover:opacity-80" />
      </div>
    </motion.div>
  );
};
