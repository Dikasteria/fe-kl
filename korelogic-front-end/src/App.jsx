import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    restaurants: [],
    search: "indian"
  };
  render() {
    const { restaurants, search } = this.state;
    return <div className="App">HELLO</div>;
  }
}

export default App;
