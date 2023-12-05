import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export const ProgressBar = ({
  progressPercent,
  height,
  radius,
  progressBarColor,
  startBarColor,
  endBarColor,
}) => {
  const changeBarColor = progressPercent !== 100 ? startBarColor : endBarColor;
  return (
    <div className="progressbar-container">
      <div
        className="progressbar"
        style={{
          height: `${height}px`,
          backgroundColor: `${progressBarColor}`,
          borderRadius: radius,
        }}
      >
        <motion.div
          className="bar"
          animate={{
            width: `${progressPercent}%`
          }}
          transition={{duration:0.5}}
          style={{
            width: `${progressPercent}%`,
            backgroundColor: changeBarColor,
            borderRadius: radius,
          }}
        />
      </div>
    </div>
  );
};
