import { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState();

  return (
    <button className="AngryButton">
      {/* When the threshold is not reached */}
      <span>Don't click me too much! </span>
      {/* When the threshold is not reached */}
      <span>Rawr!</span>
    </button>
  );
}

export default AngryButton;