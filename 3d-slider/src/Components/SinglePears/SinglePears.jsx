import React from "react";
import "./SinglePears.css";
import Pear1 from "../../Assets/fruits-small/pear1.webp";
import Pear2 from "../../Assets/fruits-small/pear2.webp";
import Pear3 from "../../Assets/fruits-small/pear3.webp";
import Pear4 from "../../Assets/fruits-small/pear4.webp";

const SinglePears = () => {
  return (
    <div className="single-pears-div">
      <img src={Pear1} alt="" className="single-pear-1" />
      <img src={Pear2} alt="" className="single-pear-2" />
      <img src={Pear3} alt="" className="single-pear-3" />
      <img src={Pear4} alt="" className="single-pear-4" />
    </div>
  );
};

export default SinglePears;
