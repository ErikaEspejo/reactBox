import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const song1 = "Smells Like Teen Spirit";
const song2 = "Come As You Are";

const item = (title) => {
  return <p>{title}</p>;
};

const element = (
  <>
    {item(song1)}
    {item(song2)}
  </>
);

/*
  React Trabaja con componentes, lo anterior es un ejemplo muy basico
  de como funcionaria uno por debajo.
*/

ReactDOM.render(element, root);
