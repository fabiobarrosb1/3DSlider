import React from "react";
import "./MainButton.css";

const MainButton = ({ slider }) => {
  return (
    <button
      className={`clash-display shop-taste-button button-slider${slider}`}
    >
      Shop Taste
    </button>
  );
};

export default MainButton;
