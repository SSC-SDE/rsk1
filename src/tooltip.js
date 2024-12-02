import React, { useState } from 'react';


const Tooltip = ({ position, text }) => {
  const [show, setShow] = useState(false);

  const toggleTooltip = (state) => {
    setShow(state);
  };

  return (
    <div className="tooltip-container" onMouseEnter={() => toggleTooltip(true)} onMouseLeave={() => toggleTooltip(false)}>
      <button className="tooltip-button">Hover over me!</button>
      {show && (
        <div className={`tooltip-box tooltip-${position}`}>
          <span className="tooltip-arrow" />
          <div className="tooltip-content">
            {text || "Thanks for hovering! I'm a tooltip"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;