import React from "react";
import Circle from "react-circle";
import "./Skill.scss";

const Skill = props => {
  return (
    <div className="text-center skill-box">
      <Circle progress={props.point} bgColor="#444" textColor="#fff" />
      <h4 className="skill-box__title">{props.title}</h4>
      <p className="skill-box__description">{props.description}</p>
    </div>
  );
};

export default Skill;
