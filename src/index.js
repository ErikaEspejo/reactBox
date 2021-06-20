import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const element = React.createElement("div", {
  className: "container",
  children: "hello world"
});

ReactDOM.render(element, root);
