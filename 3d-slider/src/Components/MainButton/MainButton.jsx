import React from "react";
import "./MainButton.css";

const MainButton = ({ slider, setSlider }) => {
  const handleButtonClick = () => {
    if (slider === 1) {
      setSlider(2);
    } else if (slider === 2) {
      setSlider(3);
    } else {
      setSlider(1);
    }
  };
  return (
    <button
      onClick={() => handleButtonClick()}
      className={`clash-display shop-taste-button button-slider${slider}`}
    >
      Shop Taste
    </button>
  );
};

export default MainButton;
