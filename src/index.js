import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const title = "Inevitable";
const props = {
  className: "container",
  id: "song",
  children: <p>Hola mundo</p>
};

const element = <div {...props} />;

/*
Para poder usar JSX a diferentes niveles tipo HTML, se debe poner entre parentesis.
Los props son elementos de React que se pasan como atributos HTML o de expresiones 
y variables externas. Dentro de los atributos HTML se pueden pasar como:
  <div className={props.className}> 
    <p>Hola mundo</p>
  </div>

O tambien incluyendo todos los props mediante el spread operator:
  <div {...props}> 
      <p>Hola mundo</p>
  </div>

Tambien se pueden incluir los childrens dentro de los props y de esta manera
la etiqueta puede ser self-closing. 
  <div {...props} />
*/
ReactDOM.render(element, root);
