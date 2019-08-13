import React from "react";

const Heading = ({ search }) => {
  return (
    <h1 className="heading">
      Restaurants serving <span>{search} food</span>
    </h1>
  );
};

export default Heading;
