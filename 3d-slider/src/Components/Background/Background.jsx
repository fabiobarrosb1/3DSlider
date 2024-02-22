import React, { useRef, useState } from "react";
import "./Background.css";
import Pears from "../../Assets/Pears.png";
import Apples from "../../Assets/Apples.png";
import PassionFruit from "../../Assets/Passion-fruit.png";
import can from "../../Assets/Can.png";
import labels from "../../Assets/Labels.png";
import FruitsSlider from "../FruitsSlider/FruitsSlider";
import Navbar from "../Navbar/Navbar";

const Background = () => {
  const divRefs = useRef([]);
  const [slider, setSlider] = useState(1);
  const [maskPosition, setMaskPosition] = useState("left");

  const scrollToNext = (index) => {
    const nextIndex = (index + 1) % divRefs.current.length;
    divRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      scrollIntoViewOptions: {
        behavior: "smooth", // Adjust the duration of the animation here
        duration: 1000, // Duration in milliseconds
      },
    });
  };

  const handleClick = (slider) => {
    if (slider === 1) {
      setMaskPosition("left");
    } else if (slider === 2) {
      setMaskPosition("center");
    } else if (slider === 3) {
      setMaskPosition("right");
    }
  };

  return (
    <>
      <Navbar />
      <img src={can} alt="" className="can-image" />
      <img
        src={labels}
        alt=""
        className="labels-image"
        style={{ maskPosition: maskPosition, backgroundPosition: "center" }}
      />
      <button className="clash-display shop-taste-button">Shop Taste</button>
      <div
        onClick={() => {
          scrollToNext(0);
          setSlider(2);
          handleClick(2);
        }}
        className={`fruit-image-div pear-position-${slider}`}
      >
        <img src={Pears} alt="" className="fruit-slider-image" />
      </div>
      <div
        onClick={() => {
          scrollToNext(1);
          setSlider(3);
          handleClick(3);
        }}
        className={`fruit-image-div apple-position-${slider}`}
      >
        <img src={Apples} alt="" className="fruit-slider-image" />
      </div>
      <div
        onClick={() => {
          scrollToNext(2);
          setSlider(1);
          handleClick(1);
        }}
        className={`fruit-image-div exotic-position-${slider}`}
      >
        <img src={PassionFruit} alt="" className="fruit-slider-image" />
      </div>
      <div className="background-div">
        <div
          ref={(el) => (divRefs.current[0] = el)}
          className="background-div-1-pear"
          onClick={() => {
            scrollToNext(0);
            setSlider(2);
          }}
        >
          <h1 className="background-title clash-display">Pear</h1>
        </div>
        <div
          ref={(el) => (divRefs.current[1] = el)}
          className="background-div-2-apple"
          onClick={() => {
            scrollToNext(1);
            setSlider(3);
          }}
        >
          <h1 className="background-title clash-display">Apple</h1>
        </div>
        <div
          ref={(el) => (divRefs.current[2] = el)}
          className="background-div-3-exotic"
          onClick={() => {
            scrollToNext(2);
            setSlider(1);
          }}
        >
          <h1 className="background-title clash-display">Exotic</h1>
        </div>
      </div>
    </>
  );
};

export default Background;
