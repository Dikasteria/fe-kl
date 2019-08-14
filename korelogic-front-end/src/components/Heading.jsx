import React from "react";
import "./Heading.css";

const Heading = ({ filter }) => {
  return (
    <div className="Heading">
      <h1 className="title">
        Restaurants serving <span>{filter} food</span>
      </h1>
    </div>
  );
};

export default Heading;
