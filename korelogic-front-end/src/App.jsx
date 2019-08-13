import "./App.css";
import React, { Component } from "react";
import Heading from "./components/Heading";
import Filter from "./components/Filter";
import Restaurants from "./components/Restaurants";
import data from "../src/restaurants";

class App extends Component {
  state = {
    restaurants: [],
    filter: "indian"
  };
  render() {
    const { restaurants, filter } = this.state;
    return (
      <div className="App">
        <Heading filter={filter} />
        <Filter updateSearch={this.updateSearch} />
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchRestaurants().then(restaurants => {
      this.setState({ restaurants });
    });
  };
  fetchRestaurants = async () => {
    const { filter } = this.state;
    let restData = await data;
    return restData;
  };
}
export default App;
