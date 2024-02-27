import React from "react";
import "./TextSlider.css";

const TextSlider = ({ slider, divRefs, setSlider }) => {
  return (
    <>
      <div
        ref={(el) => (divRefs.current[0] = el)}
        className="background-div-1-pear"
        onClick={() => {
          setSlider(2);
        }}
      >
        <h1 className="background-title clash-display">Pear</h1>
      </div>
      <div
        ref={(el) => (divRefs.current[1] = el)}
        className="background-div-2-apple"
        onClick={() => {
          setSlider(3);
        }}
      >
        <h1 className="background-title clash-display">Apple</h1>
      </div>
      <div
        ref={(el) => (divRefs.current[2] = el)}
        className="background-div-3-exotic"
        onClick={() => {
          setSlider(1);
        }}
      >
        <h1 className="background-title clash-display">Exotic</h1>
      </div>
    </>
  );
};

export default TextSlider;
