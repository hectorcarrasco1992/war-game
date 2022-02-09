import React, { Component } from "react";

import MainRouter from "./MainRouter";

import "./css/App.css";

import NavBar from "./Components/NavBar.js/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <MainRouter />
      </div>
    );
  }
}

export default App;
