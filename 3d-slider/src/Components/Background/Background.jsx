import React, { useRef, useState } from "react";
import "./Background.css";
import Pears from "../../Assets/Pears.png";
import Apples from "../../Assets/Apples.png";
import PassionFruit from "../../Assets/Passion-fruit.png";
import can from "../../Assets/Can.png";
import labels from "../../Assets/Labels.png";
import leave1 from "../../Assets/leave1.png";
import leave2 from "../../Assets/leave2.png";
import FruitsSlider from "../FruitsSlider/FruitsSlider";
import Navbar from "../Navbar/Navbar";

const Background = () => {
  const divRefs = useRef([]);
  const [slider, setSlider] = useState(1);
  const [maskPosition, setMaskPosition] = useState("left");
  const [imagePosition, setImagePosition] = useState("0%");
  const [buttonColor, setButtonColor] = useState("#077334");
  const [headerColor, setHeaderColor] = useState("#298F52");
  const [leave1Top, setLeave1Top] = useState("12%");
  const [leave1Left, setLeave1Left] = useState("34%");
  const [leave2Bottom, setLeave2Bottom] = useState("15%");
  const [leave2Left, setLeave2Left] = useState("56.5%");

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
      setImagePosition("0%");
      setHeaderColor("#298F52");
    } else if (slider === 2) {
      setMaskPosition("center");
      setImagePosition("-33%");
      setHeaderColor("#F06659");
    } else if (slider === 3) {
      setMaskPosition("right");
      setImagePosition("-66%");
      setHeaderColor("#8676EC");
    }
  };

  return (
    <>
      <Navbar headerColor={headerColor} slider={slider} />

      {/* <img
        src={leave1}
        alt=""
        className={`leave1-image leave1-image-slider${slider}`}
      />
      <img
        src={leave2}
        alt=""
        className={`leave2-image leave2-image-slider${slider}`}
      />
      <img src={can} alt="" className="can-image" id="can-mask" />
      <img
        src={labels}
        alt=""
        class={`labels-image labels-image-slider${slider}`}
        style={{
          maskPosition: maskPosition,
          // transform: `translateX(${imagePosition})`,
        }}
      /> */}

      <div className="container">
        <img
          src={leave1}
          alt=""
          className={`leave1-image leave1-image-slider${slider}`}
        />
        <img
          src={leave2}
          alt=""
          className={`leave2-image leave2-image-slider${slider}`}
        />
        <div className="mask">
          <img src={can} className="can-can" alt="" />
          <img
            src={labels}
            alt=""
            className={`label-imagem label-imagem-slider${slider}`}
          />
        </div>
      </div>

      <button
        className={`clash-display shop-taste-button button-slider${slider}`}
      >
        Shop Taste
      </button>
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
      <div className={`background-div background-div-slider${slider}`}>
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
