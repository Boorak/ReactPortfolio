import React from "react";
import Slider from "./../Slider/Slider";

const SkillBox = props => {
  return (
    <div>
      <div className="col text-center mb-5">
        <h6 className="section-skills__subtitle">{props.title}</h6>
      </div>
      <Slider>{props.children}</Slider>
    </div>
  );
};

export default SkillBox;
