import React, { useRef, useState } from "react";
import "./Slider.css";
import "../FruitsSlider/FruitSlider.css";
import Navbar from "../Navbar/Navbar";
import MainButton from "../MainButton/MainButton";
import Can from "../Can/Can";
import FruitsSlider from "../FruitsSlider/FruitsSlider";
import TextSlider from "../TextSlider/TextSlider";

const Slider = () => {
  const divRefs = useRef([]);
  const [slider, setSlider] = useState(1);

  return (
    <>
      <div className="slider-container">
        <Navbar slider={slider} />
        <FruitsSlider slider={slider} setSlider={setSlider} />
        <MainButton slider={slider} setSlider={setSlider} />
        <Can slider={slider} setSlider={setSlider} />
        <div className={`slider slider-slide-${slider}`}>
          <TextSlider slider={slider} divRefs={divRefs} setSlider={setSlider} />
        </div>
      </div>
    </>
  );
};

export default Slider;
