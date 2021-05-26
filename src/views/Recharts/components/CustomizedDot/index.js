import { useState } from 'react';

export function CustomizedDot({ cx, cy, fill, onMouseOver }) {
  const INITIAL_RADIO_CIRCLE = 5;
  const HOVER_RADIO_CIRCLE = 10;

  const [isHover, setIsHover] = useState(false);
  const [radioCircle, setRadioCircle] = useState(INITIAL_RADIO_CIRCLE);

  const handleMouseOver = () => {
    setIsHover(true);
    setRadioCircle(HOVER_RADIO_CIRCLE);
    onMouseOver();
  };

  const handleMouseOut = () => {
    setIsHover(false);
    setRadioCircle(INITIAL_RADIO_CIRCLE);
  };

  if (isHover) {
    return (
      <circle
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        cx={cx}
        cy={cy}
        r={radioCircle}
        stroke="#FFFFFF"
        strokeWidth={6}
        fill={fill}
        filter="drop-shadow(0px 2px 5px rgba(0, 0, 0, 16%))" />
    );
  }

  return (
    <circle
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      cx={cx}
      cy={cy}
      r={radioCircle}
      stroke="transparent"
      strokeWidth={4}
      fill="transparent" />
  );
}