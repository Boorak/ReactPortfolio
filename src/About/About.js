import React from "react";
import "./About.scss";
import BoorakImage from "./../images/IMAG0760_1.jpg";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="row">
          <div className="section-about__img col-md-5">
            <img
              src={BoorakImage}
              alt="Boorak"
              width="450"
              height="520"
              className="img-fluid"
            />
          </div>
          <div className="section-about__bio col-md-7">
            <div className="section-about__content p-5">
              <p>
                My name is Amir Shojaei and I'm from Shiraz, Iran. I'm 26 years
                old and I'm a freelancer web developer . I'have been programming
                since 2013, My favorite programming language is Javascript.
              </p>
              <br />
              <h4>Interests</h4>
              <p>
                Tennis, Coding, Ski, Music, Online Games
                (FIFA,FORTNITE,DOTA2,WOW,CSGO)
              </p>
              <br />
              <h3>Do Not Imitate,Understand!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
