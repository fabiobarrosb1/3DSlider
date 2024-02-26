import React from "react";
import can from "../../Assets/Can.webp";
import "./Can.css";
import "../Slider/Slider.css";
import labels from "../../Assets/Labels.webp";
import leave1 from "../../Assets/leave1.webp";
import leave2 from "../../Assets/leave2.webp";
import shadow from "../../Assets/Shadow.webp";
import shadow2 from "../../Assets/Shadow2.webp";
import shadow3 from "../../Assets/Shadow3.webp";

const Can = ({ slider }) => {
  return (
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
      <img src={shadow} alt="" className="shadow" />
      <img src={shadow2} alt="" className="shadow2" />
      <img src={shadow3} alt="" className="shadow3" />
      <div className="mask">
        <img src={can} className="can-can" alt="" />
        <img
          src={labels}
          alt=""
          className={`label-imagem label-imagem-slider${slider}`}
        />
      </div>
    </div>
  );
};

export default Can;
