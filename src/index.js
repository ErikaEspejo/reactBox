import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const element = React.createElement(
  "div",
  {
    className: "container"
  },
  React.createElement("p", null, "Hola mundo")
);

ReactDOM.render(element, root);
