import React from "react";
import can from "../../Assets/Can.png";
import "./Can.css";
import labels from "../../Assets/Labels.png";

const Can = () => {
  return (
    <div className="container">
      <img src={can} alt="" className="can-image" />
      <img src={labels} alt="" className="labels-image" />
    </div>
  );
};

export default Can;
