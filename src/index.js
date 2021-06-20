import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("app");

const Item = ({ title, subtitle, ...props }) => {
  //traigo los demas props y los uso en el span, como solo es style pues asigna los estilos al span
  return (
    <span {...props}>
      {title} - {subtitle}
    </span>
  );
};

const element = (
  <>
    <Item title="Smells Like Teen Spirit" subtitle={<strong>Nirvana</strong>} />
    <br />
    <Item
      title="Come As You Are"
      subtitle="Nirvana"
      style={{
        borderColor: "red",
        borderWidth: 2,
        borderStyle: "dotted"
      }}
    />
  </>
);

/*
  Los props tambien pueden recibir JSX. 
*/

ReactDOM.render(element, root);
