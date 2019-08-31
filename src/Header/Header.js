import React from "react";
import "./Header.scss";

const header = () => {
  return (
    <header className="header" id="home">
      <nav className="header__nav">
        <a className="header__nav-item" href="#about">
          About
        </a>
        <a className="header__nav-item" href="#skills">
          Skills
        </a>
        <a className="header__nav-item" href="#portfolio">
          Portfolio
        </a>
      </nav>
      <div className="header__title">
        <div>
          <h1 className="text-center">
            I am amir shojaei
            <span className="blink"> _</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default header;
