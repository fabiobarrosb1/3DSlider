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

  return (
    <>
      <div className="slider">
        <Navbar slider={slider} />
        <Can slider={slider} />
        <MainButton slider={slider} />
        <FruitsSlider
          slider={slider}
          setSlider={setSlider}
          scrollToNext={scrollToNext}
        />
        <TextSlider
          slider={slider}
          divRefs={divRefs}
          setSlider={setSlider}
          scrollToNext={scrollToNext}
        />
      </div>
    </>
  );
};

export default Slider;
