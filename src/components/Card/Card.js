import React from "react";
import "./Card.scss";

const Card = props => {
  return (
    <div className="card card--bg-dark">
      <img className="card-img-top" src={props.src} alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          <h6 className="text-muted text-uppercase">description</h6>
          {props.description}
        </p>
        <p className="card-text">
          <h6 className="text-muted text-uppercase">Ends in</h6>
          {props.endin}
        </p>
        <p className="card-text">
          <h6 className="text-muted text-uppercase">technologies</h6>
          {props.technologies}
        </p>
        {props.showAuth ? (
          <p className="card-text">
            <h6 className="text-muted text-uppercase">Demo account for test</h6>
            <div>
              <span>Email, Username: </span>
              <span className="small">amir@gmail.com</span>
            </div>
            <div className="mt-3">
              <span>Password: </span>
              <span className="small">123456</span>
            </div>
          </p>
        ) : null}

        <a href={props.url} className="card-link">
          See Project
        </a>
      </div>
    </div>
  );
};

export default Card;
