import { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState(0);

  const handleClick = () => {
    const increment = 0.1;
    if (anger < 1) {
      return setAnger(anger + increment);
    }
    setAnger(0);
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;