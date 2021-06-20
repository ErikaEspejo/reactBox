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

const element = (
  <>
    <Item title="Smells Like Teen Spirit" subtitle={<strong>Nirvana</strong>} />
    <br />
    <Item title="Come As You Are" subtitle="Nirvana" />
  </>
);

/*
  Los props tambien pueden recibir JSX. 
*/

ReactDOM.render(element, root);
