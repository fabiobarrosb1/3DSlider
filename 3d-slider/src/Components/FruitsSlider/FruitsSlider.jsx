import React, { useState, useEffect } from "react";
import "./FruitSlider.css";
import Pears from "../../Assets/Pears.webp";
import Apples from "../../Assets/Apples.webp";
import PassionFruit from "../../Assets/Passion-fruit.webp";
import SinglePears from "../SinglePears/SinglePears";

const FruitsSlider = ({ scrollToNext, setSlider, slider }) => {
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
      <div
        onClick={() => {
          scrollToNext(0);
          setSlider(2);
        }}
        className={`fruit-image-div pear-position-${slider}`}
      >
        {windowWidth > 768 ? (
          <img src={Pears} alt="" className="fruit-slider-image" />
        ) : (
          <SinglePears />
        )}
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
