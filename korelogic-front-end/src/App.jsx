import "./App.css";
import React, { Component } from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Restaurants from "./components/Restaurants";
import data from "../src/restaurants.json";

class App extends Component {
  state = {
    restaurants: [],
    search: "indian"
  };
  render() {
    const { restaurants, search } = this.state;
    return (
      <div className="App">
        <Heading search={search} />
        <Search updateSearch={this.updateSearch} />
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}
export default App;
