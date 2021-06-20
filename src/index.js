import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const title = "Smell like teen spirit";
const singer = "Nirvana";
const props = {
  className: "container",
  id: "song"
};

const element = (
  <>
    <div {...props}>
      <p>
        {title} - {singer}
      </p>
    </div>
    <div {...props}>
      <p>
        {title} - {singer}
      </p>
    </div>
  </>
);

/*
JSX solo retorna un elemento padre, para lo cual se puede usar
  <React.Fragment>
    ....
  </React.Fragment>

  La manera reducida de la anterior etiqueta que no genera ningun div ni algo
  por el estilo y solo sirve como encapsulador es:
  <>
    .....
  </>
*/

ReactDOM.render(element, root);
