import React from "react";

const HelloComponent = ({ name }) =>
  React.createElement("div", null, `Hello ${name}`);

export default HelloComponent;
