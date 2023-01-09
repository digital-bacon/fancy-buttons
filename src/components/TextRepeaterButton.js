import { useState } from "react";
function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState(1);
  const textArray = Array.of(repetitions);
  textArray.forEach((element, index) => {
    textArray[index] = <span key={index}>I like this text</span>;
  });

  return (
    <button className="TextRepeaterButton">
      {textArray}
  </button>
  );
}

export default TextRepeaterButton;