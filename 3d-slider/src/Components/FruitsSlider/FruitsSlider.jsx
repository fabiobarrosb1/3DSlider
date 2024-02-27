import React, { useState, useEffect } from "react";
import "./FruitSlider.css";
import Pears from "../../Assets/Pears.webp";
import Apples from "../../Assets/Apples.webp";
import PassionFruit from "../../Assets/Passion-fruit.webp";
import SinglePears from "../SinglePears/SinglePears";

const FruitsSlider = ({ setSlider, slider }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="fruits-div">
        <div
          className={`fruit-image-div pear-position-${slider}`}
          onClick={() => setSlider(2)}
        >
          <img src={Pears} alt="" className={`fruit-slider-image`} />
        </div>
        <div
          className={`fruit-image-div apple-position-${slider}`}
          onClick={() => setSlider(3)}
        >
          <img src={Apples} alt="" className={`fruit-slider-image`} />
        </div>
        <div
          className={`fruit-image-div exotic-position-${slider}`}
          onClick={() => setSlider(1)}
        >
          <img src={PassionFruit} alt="" className={`fruit-slider-image`} />
        </div>
      </div>
    </>
  );
};

export default FruitsSlider;
