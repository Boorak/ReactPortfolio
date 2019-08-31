import React from "react";
import "./Heading.scss";

const Heading = props => {
  return (
    <div className="col-md-12 text-center heading">
      <h4 className="heading__heading-secondary text-center">{props.title}</h4>
    </div>
  );
};

export default Heading;
