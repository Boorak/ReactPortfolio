import React, { Component } from "react";
import "./Portfolio.scss";
import Heading from "./../components/Heading/Heading";
import Card from "./../components/Card/Card";
import Slider from "./../components/Slider/Slider";

import FourmImg from "../images/forum-podonak.png";
import TradeImg from "../images/trade-podonak.png";
import InstaImg from "../images/insta-podonak.png";
import NodeImg from "../images/node-podonak.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-section" id="portfolio">
        <div className="container">
          <Heading title="portfolio" />
          <Slider>
            <div className="px-2">
              <Card
                src={FourmImg}
                alt={"Forum cryptocurrency Laravel"}
                description="Email service is desable please check with demo account"
                title="cryptocurrency Traders Analysis Website Like tradingview.com"
                endin="45 DAYS"
                technologies="php, laravel, vue.js, jwt, webpack, bulma, axois, redis, echo laravel, javascript, es6"
                showAuth={true}
                url="http://forum.boorakcasts.ir"
              />
            </div>
            <div className="px-2">
              <Card
                src={TradeImg}
                alt={"Trade Cryptocurrency Laravel"}
                description="Email service is desable please check with demo account"
                title="Cryptocurrency Exchange like bitfinex.com"
                endin="60 DAYS"
                technologies="nodejs, php, laravel, vue.js, jwt, webpack, bootstrap, axois, redis, sass, javascript, es6"
                showAuth={true}
                url="http://trade.boorakcasts.ir/"
              />
            </div>
            <div className="px-2">
              <Card
                src={InstaImg}
                alt={"Insta crawler Symfony"}
                description="Currently Not Working because of update (PHP version)"
                title="Instagram Crawler"
                endin="15 DAYS"
                technologies="symfony, twig, mysql, bootstrap,  redis, javascript"
                showAuth={false}
                url="http://insta.boorakcasts.ir?asd"
              />
            </div>
            <div className="px-2">
              <Card
                src={NodeImg}
                alt={"Node school Laravel"}
                description="My Example Project (Not Completed)"
                title="Online Programming Editor School"
                endin="15 DAYS"
                technologies="larvel, nodejs, webpack, bootstrap,  redis, javascript, sass, ace editor"
                showAuth={false}
                url="http://node.boorakcasts.ir/learn/learn-vue/courses/1/lessons/1/exercises/1"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Portfolio;
