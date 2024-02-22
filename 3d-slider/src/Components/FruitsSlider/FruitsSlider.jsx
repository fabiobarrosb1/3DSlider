import React from "react";
import "./FruitSlider.css";
import Pears from "../../Assets/Pears.png";
import Apples from "../../Assets/Apples.png";
import PassionFruit from "../../Assets/Passion-fruit.png";

const FruitsSlider = () => {
  return (
    <div className="fruit-slider-div">
      <div className="fruit-image-div">
        <img src={Pears} alt="" className="fruit-slider-image" />
      </div>
      <div className="fruit-image-div">
        <img src={Apples} alt="" className="fruit-slider-image" />
      </div>
      <div className="fruit-image-div">
        <img src={PassionFruit} alt="" className="fruit-slider-image" />
      </div>
    </div>
  );
};

export default FruitsSlider;
