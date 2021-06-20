import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

/*
const item = ({ title }) => {
  //se traen los props de los elementos que se renderizan y se usan para renderizar algo mas

  return <p>{title}</p>;
};

const element = (
  <>
    {item({
      title: "Smells Like Teen Spirit"
    })}
    {item({
      title: "Come As You Are"
    })}
  </>
);
*/

//Esta es una manera correcta de hacerlo y de mejor entendimiento

const Item = ({ title }) => {
  //trae de los props de Item el title
  return <p>{title}</p>;
};

const element = (
  <>
    <Item title="Smells Like Teen Spirit" />
    <Item title="Come As You Are" />
  </>
);

/*
  JSX puede diferenciar una etiqueta HTML de un componente por su inicial,
  si esta es en mayuscula se trata de un componente, en caso contrario es
  una etiqueta HTML.
*/

ReactDOM.render(element, root);
