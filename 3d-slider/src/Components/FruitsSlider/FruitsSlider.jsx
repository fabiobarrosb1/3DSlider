import React from "react";
import "./FruitSlider.css";
import Pears from "../../Assets/Pears.webp";
import Apples from "../../Assets/Apples.webp";
import PassionFruit from "../../Assets/Passion-fruit.webp";

const FruitsSlider = ({ scrollToNext, setSlider, slider }) => {
  return (
    <>
      <div
        onClick={() => {
          scrollToNext(0);
          setSlider(2);
        }}
        className={`fruit-image-div pear-position-${slider}`}
      >
        <img src={Pears} alt="" className="fruit-slider-image" />
      </div>
      <div
        onClick={() => {
          scrollToNext(1);
          setSlider(3);
        }}
        className={`fruit-image-div apple-position-${slider}`}
      >
        <img src={Apples} alt="" className="fruit-slider-image" />
      </div>
      <div
        onClick={() => {
          scrollToNext(2);
          setSlider(1);
        }}
        className={`fruit-image-div exotic-position-${slider}`}
      >
        <img src={PassionFruit} alt="" className="fruit-slider-image" />
      </div>
    </>
  );
};

export default FruitsSlider;
