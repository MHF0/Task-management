import React, { useState, useRef } from "react";
import "./style.css";

const Tooltip = ({ children, tooltipContent }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      ref={tooltipRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="tooltip-container"
      aria-haspopup="true"
      aria-expanded={showTooltip}
      aria-label={tooltipContent}
    >
      {children}
      {showTooltip && (
        <div className="tooltip">
          <span>{tooltipContent}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
