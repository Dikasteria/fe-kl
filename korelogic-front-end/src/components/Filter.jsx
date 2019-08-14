import React, { Component } from "react";
import "./Filter.css";

class Search extends Component {
  state = {
    filter: []
  };

  render() {
    return (
      <div className="Filter">
        <h3 className="Cuisine">Filter By Cuisine Here</h3>
        <section className="filter_buttons">
          <button
            className="sort_button"
            type="submit"
            onClick={this.handleClick}
            value="Argentinian"
          >
            Argentinian
          </button>
          <button className="sort_button">Asian</button>
          <button className="sort_button">Balti</button>
          <button className="sort_button">Bar</button>
          <button className="sort_button">British</button>
          <button className="sort_button">Cafe</button>
          <button className="sort_button">International</button>
          <button className="sort_button">Pub</button>
          <button className="sort_button">Steakhouse</button>
        </section>
      </div>
    );
  }
}

// TODO:
// Add handleClick function here which adds the cuisine to the search criteria and componentDidMount and DidUpdate functions to implement the filtering. I would use a match of the search array items in each of the restaurant cuisine arrays to build the relevant.
//Also to add conditions rendering of box, to shade out when selected and return when deselected.

export default Search;
