import React from "react";

const Heading = ({ filter }) => {
  return (
    <h1 className="heading">
      Restaurants serving <span>{filter} food</span>
    </h1>
  );
};

export default Heading;
