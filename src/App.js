import React, { Component } from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <About />
          <Skills />
          <Portfolio />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
