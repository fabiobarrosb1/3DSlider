import React, { useRef } from "react";
import "./Background.css";

const Background = () => {
  const divRefs = useRef([]);

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
    <div className="background-div">
      <div
        ref={(el) => (divRefs.current[0] = el)}
        className="background-div-1-pear"
        onClick={() => scrollToNext(0)}
      >
        hi
      </div>
      <div
        ref={(el) => (divRefs.current[1] = el)}
        className="background-div-2-apple"
        onClick={() => scrollToNext(1)}
      ></div>
      <div
        ref={(el) => (divRefs.current[2] = el)}
        className="background-div-3-exotic"
        onClick={() => scrollToNext(2)}
      ></div>
    </div>
  );
};

export default Background;
