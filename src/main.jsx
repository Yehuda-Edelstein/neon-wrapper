import React from "react";
import "./Neon.css";

const Neon = ({
  color = "#ffee00",
  glowIntensity = 10, // Glow intensity as a percentage
  shadowSpread = 60, // Shadow spread as a percentage
  noFlicker = false,
  children,
}) => {
  return (
    <div
      className={`neon-text ${!noFlicker ? "flicker" : ""}`}
      style={{
        "--neon-color": color,
        "--glow-intensity": `${glowIntensity}%`,
        "--shadow-spread": `${shadowSpread}%`,
      }}
    >
      {children}
    </div>
  );
};

export default { Neon };
