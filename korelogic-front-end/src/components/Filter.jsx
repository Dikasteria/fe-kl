import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };

  render() {
    return (
      <div className="restaurant_filter">
        <h3>Filter By Cuisine Here</h3>
        <section className="filter_buttons">
          <button
            className="sort_button"
            type="submit"
            onClick={this.handleClick}
            value="Argentinian"
          >
            Argentinian
          </button>
          <button>Asian</button>
          <button>Balti</button>
          <button>Bar</button>
          <button>British</button>
          <button>Cafe</button>
          <button>International</button>
          <button>Pub</button>
          <button>Steakhouse</button>
        </section>
      </div>
    );
  }
}

export default Search;
