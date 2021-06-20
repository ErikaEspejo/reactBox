import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const Item = ({ title, subtitle }) => {
  return (
    <span>
      {title} - {subtitle}
    </span>
  );
};

const handleEvent = (event) => {
  console.log(event);
};

const element = (
  <>
    <Item title="Smells Like Teen Spirit" subtitle={<strong>Nirvana</strong>} />
    <br />
    <Item title="Come As You Are" subtitle="Nirvana" />
    <br />
    <button onClick={handleEvent}>Shuffle</button>
  </>
);

/*
  No se ponen parentesis para el handleEvent(), porque se requiere referenciar 
  la funcion y no ejecutarla cada vez que se pinte, sino cuando se de click.
*/

ReactDOM.render(element, root);
